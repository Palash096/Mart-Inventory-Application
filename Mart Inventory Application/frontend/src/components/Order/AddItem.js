import { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import billingService from '../../services/billing.service';
import productService from '../../services/product.service';
import customerService from '../../services/customer.service';
import '../../css/billDetails.css';

const AddItem = () => {
    const [pid, setProductId] = useState('');
    const [pname, setProductName] = useState('');
    const [qty, setQty] = useState('');
    const [product, setProduct] = useState('');
    // const [mrp, setMRP] = useState('');

    const [sid, setCustomerId] = useState('');
    const [customer, setCustomer] = useState('');

    const [id, setId] = useState('');
    const [gst, setGst] = useState('');
    const [price, setPrice] = useState('');
    const [totalamount, setTotalamount] = useState('');
    const [pqty, setPqty] = useState('');
    const [discount, setDiscount] = useState('');
    // const history = useHistory();
    // const { id } = useParams();

    const prod = {
        id,
        gst,
        price,
        totalamount,
        pqty,
        pname,
        discount,
    };
    const Add = (e) => {
        e.preventDefault();

        setGst(18);
        setPrice(product.mrp);
        setPqty(qty);
        setProductName(product.pname);
        setDiscount(product.discount);
        setTotalamount((price * (100 - discount) * 1.8 * pqty) / 100);

        billingService
            .create(prod)
            .then((response) => {
                console.log('product added successfully', response.data);
                //   history.push('/product');
            })
            .catch((error) => {
                console.log('something went wroing' + error.response);
            });
    };

    const Remove = (e) => {
        e.preventDefault();

        setGst(18);
        setPrice(product.mrp);
        if ((pqty - qty) >= 0) {
            setPqty(pqty - qty);
        }

        setProductName(product.pname);
        setDiscount(product.discount);
        setTotalamount((price * (100 - discount) * 1.8 * pqty) / 100);
        console.log('Printing id', prod);
        billingService
            .update(prod)
            .then((response) => {
                console.log('product updated successfully', response.data);
                //   history.push('/product');
            })
            .catch((error) => {
                console.log('something went wrong' + error.response);
            });
    };

    const SearchProduct = (e) => {
        e.preventDefault();

        productService
            .get(pid)
            .then((response) => {
                console.log('Product data updated successfully', response.data);
                //   history.push('/product');
                setProduct(response.data);
            })
            .catch((error) => {
                alert(error.response.status);
                console.log('Error code ' + error);
                console.log('Something went wrong', error.response.data);
            });

    };

    const SearchCustomer = (e) => {
        e.preventDefault();

        customerService
            .get(sid)
            .then((response) => {
                console.log('Customer data updated successfully', response.data);
                //   history.push('/product');
                setCustomer(response.data);
            })
            .catch((error) => {
                alert(error.response.status);
                console.log('Error code ' + error);
                console.log('Something went wrong', error.response.data);
            });

    };

    return (
        <div className='billDetails'>
            <div className='container'>
                <div>
                    <form>
                        <div className='form-group'>
                            <input
                                type='number'
                                className='form-control col-4'
                                id='pid'
                                value={pid}
                                onChange={(e) => setProductId(e.target.value)}
                                placeholder='Enter Product Id'
                            />
                            <button className='btn btn-danger ml-2' onClick={(e) => SearchProduct(e)} >Search Product</button>
                        </div>
                    </form>

                    <form>
                        <div className='form-group'>
                            <input
                                type='number'
                                className='form-control col-4'
                                id='sid'
                                value={sid}
                                onChange={(e) => setCustomerId(e.target.value)}
                                placeholder='Enter Customer Id'
                            />
                            <button className='btn btn-danger ml-2' onClick={(e) => SearchCustomer(e)} >Search Customer</button>
                        </div>
                    </form>

                    <div>
                        <table className='table table-bordered table-striped'>

                            <tr>
                                <th>Product Name</th>
                                <th>Product Description</th>
                                <th>MRP</th>
                                <th>Discount</th>
                                <th>Qty on hand</th>
                                <th>Expiry Date</th>
                                <th>Product Type</th>
                            </tr>
                            <tr>
                                <td>{product.pname}</td>
                                <td>{product.description}</td>
                                <td>{product.mrp}</td>
                                <td>{product.discount}</td>
                                <td>{product.pqty}</td>
                                <td>{product.expiryDate}</td>
                                <td>{product.ptype}</td>
                            </tr>
                        </table>
                        <table className='table table-bordered table-striped'>
                            <tr>
                                <th>Customer Name</th>
                                <th>Customer Mobile</th>
                                <th>Customer Address</th>
                            </tr>
                            <tr>
                                <td>{customer.cname}</td>
                                <td>{customer.cmobile}</td>
                                <td>{customer.caddr}</td>
                            </tr>
                        </table>
                        Quantity : <input type='number'
                            value={qty}
                            onChange={(e) => setQty(e.target.value)} />
                        <button className='btn btn-primary' onClick={(e) => Add(e)}>
                            Add
                        </button>

                        <button className='btn btn-danger' onClick={(e) => Remove(e)}>
                            Remove
                        </button>
                    </div>
                </div>

                <table className='table table-bordered table-striped'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Serial No.</th>
                            <th>Product Name</th>
                            <th>MRP</th>
                            <th>Discount</th>
                            <th>GST</th>
                            <th>Product Quantity</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>{prod.pname}</td>
                            <td>{prod.price}</td>
                            <td>{prod.discount}</td>
                            <td>{prod.gst}</td>
                            <td>{prod.pqty}</td>
                            <td>{prod.totalamount}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AddItem;