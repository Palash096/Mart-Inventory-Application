//import axios from 'axios';
import { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import customerService from '../../services/customer.service';
import '../../css/customerList.css';

const AddCustomer = () => {
  const [cname, setCname] = useState('');
  const [cmobile, setCmobile] = useState('');
  const [caddr, setCaddress] = useState('');


  const history = useHistory();
  const { id } = useParams();

  const saveCustomer = (e) => {
    e.preventDefault();

    const customer = {
      cname,
      cmobile,
      caddr,
      id,
    };
    if (id) {
      //update
      customerService
        .update(customer)
        .then((response) => {
          console.log('Customer data updated successfully', response.data);
          history.push('/customer');
        })
        .catch((error) => {
          alert(error.response.status);
          console.log('Error code ' + error);
          console.log('Something went wrong', error.response.data);
        });
    } else {
      //create
      customerService
        .create(customer)
        .then((response) => {
          console.log('Customer added successfully', response.data);
          history.push('/customer');
        })
        .catch((error) => {
          console.log('something went wroing' + error.response);
        });
    }
  };

  useEffect(() => {
    if (id) {
      customerService
        .get(id)
        .then((customer) => {
          setCname(customer.data.cname);
          setCmobile(customer.data.cmobile);
          setCaddress(customer.data.caddr);
        })
        .catch((error) => {
          console.log('Something went wrong', error);
        });
    }
  }, []);
  return (
    <div className='customerDiv'>
      <div className='container'>
        <h3>Add Customer</h3>
        <hr />
        <form>
          <div className='form-group'>
            <input
              type='text'
              className='form-control col-4'
              id='cname'
              value={cname}
              onChange={(e) => setCname(e.target.value)}
              placeholder='Enter Customer Name'
            />
          </div>
          <div className='form-group'>
            <input
              type='number'
              className='form-control col-4'
              id='cmobile'
              value={cmobile}
              onChange={(e) => setCmobile(e.target.value)}
              placeholder='Enter Mobile Number'
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control col-4'
              id='caddr'
              value={caddr}
              onChange={(e) => setCaddress(e.target.value)}
              placeholder='Enter Address'
            />
          </div>
          <div>
            <button onClick={(e) => saveCustomer(e)} className='btn btn-primary'>
              Save Or Update
            </button>
          </div>
        </form>
        <hr />
        <Link to='/customer'>Back to Customer Page</Link>
      </div>
    </div>
  );
};

export default AddCustomer;
