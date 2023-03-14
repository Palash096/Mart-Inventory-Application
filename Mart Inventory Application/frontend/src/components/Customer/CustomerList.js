import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import customerService from '../../services/customer.service';
import '../../css/customerList.css';

const CustomerList = () => {
  const [customer, setCustomer] = useState([]);
  // const [tempEmp, setTempemp] = useState([]);

  const init = () => {
    customerService
      .getAll()
      .then((response) => {
        console.log('Printing customer data', response.data);
        setCustomer(response.data);
        // setTempemp(response.data);
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
    customerService
      .remove(id)
      .then((response) => {
        console.log('customer deleted successfully', response.data);
        init();
      })
      .catch((error) => {
        console.log('Something went wrong', error);
      });
  };

  return (
    <div className='customerDiv'>
      <div className='container'>
        <h3>List of Customer</h3>
        <hr />
        <div>
          <Link to='/addc' className='btn btn-primary mb-2'>
            Add Customer
          </Link>
          <table className='table table-bordered table-striped'>
            <thead className='thead-dark'>
              <tr>
                <th>Customer Name</th>
                <th>Customer Mobile</th>
                <th>Customer Address</th>
                <th colSpan={3}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customer.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.cname}</td>
                  <td>{customer.cmobile}</td>
                  <td>{customer.caddr}</td>
                  <td>
                    <Link
                      className='btn btn-info'
                      to={`/customer/editc/${customer.id}`}
                    >
                      Update
                    </Link>
                  </td>

                  {/* <td>
                  <Link
                    className='btn btn-info'
                    to={`/uploadImage/${employee.id}`}
                  >
                    Image Upload
                  </Link>
                </td> */}
                  <td>
                    <button
                      className='btn btn-danger ml-2'
                      onClick={() => {
                        handleDelete(customer.id);
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

export default CustomerList;
