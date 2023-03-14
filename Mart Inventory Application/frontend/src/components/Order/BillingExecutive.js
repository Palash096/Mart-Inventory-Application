import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import billingService from "../../services/billing.service";
import '../../css/billDetails.css';

const BillingExecutive = () => {
  const [billrecord, setBillRecord] = useState([]);

  const handleDelete = (id) => {
    console.log('Printing id', id);
    billingService
      .remove(id)
      .then((response) => {
        console.log('product deleted successfully', response.data);
        init();
      })
      .catch((error) => {
        console.log('Something went wrong', error);
      });
  };

  const init = () => {
    billingService
      .getAll()
      .then((response) => {
        console.log('Printing employees data', response.data);
        setBillRecord(response.data);
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

  return (
    <div className='billDetails'>
      <div className='container'>
        <h3>Billing Details</h3>
        <hr />
        <div>
          <Link to='/addi' className='btn btn-primary mb-2'>
            Add item
          </Link>
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
                <th colSpan={3}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {billrecord.map((billrecord) => (
                <tr key={billrecord.id}>
                  <td>{billrecord.id}</td>
                  <td>{billrecord.pname}</td>
                  <td>{billrecord.price}</td>
                  <td>{billrecord.discount}</td>
                  <td>{billrecord.gst}</td>
                  <td>{billrecord.pqty}</td>
                  <td>{billrecord.totalamount}</td>
                  <td>
                    <Link
                      className='btn btn-info'
                      to={`/addi`}
                    >
                      Update
                    </Link>
                  </td>
                  <td>
                    <button
                      className='btn btn-danger ml-2'
                      onClick={() => {
                        handleDelete(billrecord.id);
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
      </div>
    </div>
  );
};

export default BillingExecutive;