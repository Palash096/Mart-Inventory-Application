//import axios from 'axios';
import { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import productService from '../services/product.service';
import '../css/productList.css';

const AddProduct = () => {
  const [pname, setProductName] = useState('');
  const [description, setProductDescription] = useState('');
  const [mrp, setMRP] = useState('');
  const [discount, setDiscount] = useState('');
  const [pqty, setProductQuantity] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [ptype, setProductType] = useState('');

  const history = useHistory();
  const { id } = useParams();

  const saveProduct = (e) => {
    e.preventDefault();

    const product = {
      pname,
      description,
      mrp,
      discount,
      pqty,
      expiryDate,
      ptype,
      id,
    };
    if (id) {
      //update
      productService
        .update(product)
        .then((response) => {
          console.log('Product data updated successfully', response.data);
          history.push('/product');
        })
        .catch((error) => {
          alert(error.response.status);
          console.log('Error code ' + error);
          console.log('Something went wrong', error.response.data);
        });
    } else {
      //create
      // added inside database
      productService
        .create(product)
        .then((response) => {
          console.log('product added successfully', response.data);
          history.push('/product');
        })
        .catch((error) => {
          console.log('something went wroing' + error.response);
        });
    }
  };

  useEffect(() => {
    if (id) {
      productService
        .get(id)
        .then((product) => {
          setProductName(product.data.pname);
          setProductDescription(product.data.description);
          setMRP(product.data.mrp);
          setDiscount(product.data.discount);
          setExpiryDate(product.data.expiryDate);
          setProductQuantity(product.data.pqty);
          setProductType(product.data.ptype);
        })
        .catch((error) => {
          console.log('Something went wrong', error);
        });
    }
  }, []);
  return (
    <div className='productDiv'>
      <div className='container'>
        <h3>Add Product</h3>
        <hr />
        <form>
          <div className='form-group'>
            <input
              type='text'
              className='form-control col-4'
              id='pname'
              value={pname}
              onChange={(e) => setProductName(e.target.value)}
              placeholder='Enter Product name'
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control col-4'
              id='description'
              value={description}
              onChange={(e) => setProductDescription(e.target.value)}
              placeholder='Enter Product Description'
            />
          </div>
          <div className='form-group'>
            <input
              type='number'
              className='form-control col-4'
              id='mrp'
              value={mrp}
              onChange={(e) => setMRP(e.target.value)}
              placeholder='Enter MRP'
            />
          </div>
          <div className='form-group'>
            <input
              type='number'
              className='form-control col-4'
              id='discount'
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              placeholder='Enter Discount'
            />
          </div>
          <div className='form-group'>
            <input
              type='number'
              className='form-control col-4'
              id='pqty'
              value={pqty}
              onChange={(e) => setProductQuantity(e.target.value)}
              placeholder='Enter Product Quantity'
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control col-4'
              id='ptype'
              value={ptype}
              onChange={(e) => setProductType(e.target.value)}
              placeholder='Enter Category'
            />
          </div>
          <div className='form-group'>
            <input
              type='date'
              className='form-control col-4'
              id='expiryDate'
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder='Enter Joining date'
            />
          </div>
          <div>
            <button onClick={(e) => saveProduct(e)} className='btn btn-primary'>
              Save Or Update
            </button>
          </div>
        </form>
        <hr />
        <Link to='/product'>Back to Product Page</Link>
      </div>
    </div>
  );
};

export default AddProduct;
