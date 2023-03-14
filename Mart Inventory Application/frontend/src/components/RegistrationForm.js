import '../css/registrationForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import employeeService from '../services/employee.service';

const RegistrationForm = () => {

    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [joinDate, setJoindate] = useState('');
    const [location, setLocation] = useState('');
    const [department, setDepartment] = useState('');

    const history = useHistory();
    const { id } = useParams();

    const saveDetails = (e) => {
        e.preventDefault();

        const employee = {
            firstName,
            lastName,
            email,
            password,
            joinDate,
            location,
            department,
            id,
        };

        employeeService
            .create(employee)
            .then((response) => {
                console.log('employee added successfully', response.data);
                alert("Employee Added Sccessfully !!!");
                history.push('/BaseCompanent');
            })
            .catch((error) => {
                alert("Something went wrong while adding Employee !!!");
                console.log('something went wroing' + error.response);
            });
    };


    return (
        <div className='maindiv'>
            <div className='subdiv'>
                <div>
                    <div className='login'>
                        <h1>Registration Form</h1>
                    </div>
                    <div>
                        <form>
                            <table cellPadding='10px'>
                                <tr>
                                    <td>
                                        <label className='desc'>First Name : </label>
                                    </td>
                                        <input
                                            type='text'
                                            className='form-control col-12 '
                                            id='firstName'
                                            value={firstName}
                                            onChange={(e) => setFirstname(e.target.value)}
                                            placeholder='Enter first name'
                                        />
                                </tr>
                                <tr>
                                    <td>
                                        <label className='desc'>Last Name : </label>
                                    </td>
                                    <input
                                        type='text'
                                        className='form-control col-12'
                                        id='lastName'
                                        value={lastName}
                                        onChange={(e) => setLastname(e.target.value)}
                                        placeholder='Enter last name'
                                    />
                                </tr>
                                <tr>
                                    <td>
                                        <label className='desc'>Email : </label>
                                    </td>
                                    <input
                                        type='text'
                                        className='form-control col-12'
                                        id='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder='Enter email'
                                    />
                                </tr>
                                <tr>
                                    <td>
                                        <label className='desc'>Password : </label>
                                    </td>
                                    <input
                                        type='password'
                                        className='form-control col-12'
                                        id='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder='Enter Password'
                                    />
                                </tr>
                                <tr>
                                    <td>
                                        <label className='desc'>Employee Role : </label>
                                    </td>
                                    <input
                                        type='text'
                                        className='form-control col-12'
                                        id='department'
                                        value={department}
                                        onChange={(e) => setDepartment(e.target.value)}
                                        placeholder='Enter Department'
                                    />
                                </tr>
                                <tr>
                                    <td>
                                        <label className='desc'>Location : </label>
                                    </td>
                                    <input
                                        type='text'
                                        className='form-control col-12'
                                        id='location'
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        placeholder='Enter Location'
                                    />
                                </tr>
                                <tr>
                                    <td>
                                        <label className='desc'>Join Date : </label>
                                    </td>
                                    <input
                                        type='date'
                                        className='form-control col-12'
                                        id='joinDate'
                                        value={joinDate}
                                        onChange={(e) => setJoindate(e.target.value)}
                                        placeholder='Enter Joining date'
                                    />
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <label className='descimg'>Upload Image : </label>

                                        <input className='imgfile' type={"file"} alt='Submit' />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <button className='descbutton' type='submit' name='btn' id='btn' onClick={(e) => saveDetails(e)}><b>Submit</b></button>
                                    </td>
                                </tr>
                            </table>
                        </form>
                        {/* <div>
                            <Link to='/RegistrationForm' className='btn btn-primary mb-2'>
                                Sign Up
                            </Link>
                            {/* <a href='#'>Forgot password ?</a> Or <a href='#'>Sign Up</a> 
                        </div> */}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default RegistrationForm;