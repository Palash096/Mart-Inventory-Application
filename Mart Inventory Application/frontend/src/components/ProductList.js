import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import productService from '../services/product.service';
import '../css/productList.css';

const ProductList = () => {
  const [product, setProduct] = useState([]);

  const init = () => {
    productService
      .getAll()
      .then((response) => {
        console.log('Printing employees data', response.data);
        setProduct(response.data);
        console.warn(response.data);
      })
      .catch((error) => {
        console.log('Something went wrong', error);
      });
  };

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    console.log('Printing id', id);
    productService
      .remove(id)
      .then((response) => {
        console.log('product deleted successfully', response.data);
        init();
      })
      .catch((error) => {
        console.log('Something went wrong', error);
      });
  };

  return (
    <div className='productDiv'>
      <div className='container'>
        <h3>List of Products</h3>
        <hr />
        <div>
          <Link to='/addp' className='btn btn-primary mb-2'>
            Add Product
          </Link>
          <table className='table table-bordered table-striped'>
            <thead className='thead-dark'>
              <tr>
                <th>Product Name</th>
                <th>Product Description</th>
                <th>MRP</th>
                <th>Discount</th>
                <th>Product Quantity</th>
                <th>Expiry Date</th>
                <th>Product Type</th>
                <th colSpan={3}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {product.map((product) => (
                <tr key={product.id}>
                  <td>{product.pname}</td>
                  <td>{product.description}</td>
                  <td>{product.mrp}</td>
                  <td>{product.discount}</td>
                  <td>{product.pqty}</td>
                  <td>{product.expiryDate}</td>
                  <td>{product.ptype}</td>
                  <td>
                    <Link
                      className='btn btn-info'
                      to={`/product/editp/${product.id}`}
                    >
                      Update
                    </Link>
                  </td>
                  <td>
                    <button
                      className='btn btn-danger ml-2'
                      onClick={() => {
                        handleDelete(product.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <Link to='/BaseCompanent'>Back to Dash Board</Link>
        </div>
      </div>
    </div>
  );

};

export default ProductList;