// import logo from './logo.svg';
import '../css/LoginPage.css';
import profile from "../image/userimage.png";
import { Link, useHistory, useParams } from 'react-router-dom';
import { useState } from 'react';
import employeeService from '../services/employee.service';

const LoginPage = () => {

    const history = useHistory();
    const { id } = useParams();

    const [popupStyle, setPopupStyle] = useState('hide');
    const [employee, setEmployee] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validateEmployee = (e) => {
        // e.preventDefault();

        // alert(email);
        // alert(password);

        const employee = {
            email,
            password,

        };

        if (employee.email === "palash@gmail.com" && employee.password === "12345") {
            alert("Login Successfull !!!");
            history.push('/BaseCompanent');
        } else {
            alert("Incorrect email OR password !!! Please Enter Again");
        }
        setEmail('')
        setPassword('')

        //   employeeService
        //     .signin(employee)
        //     .then((response) => {
        //       console.log('Employee data updated successfully', response.data);
        //       alert("Employee data updated successfully");
        //         // localStorage.setItem("user",JSON.stringify(response.data));
        //         // localStorage.setItem("email",response.data.email)

        //       history.push('/BaseCompanent');
        //     })
        //     .catch((error) => {
        //       alert(error.response.status);
        //       console.log('Error code ' + error);
        //       console.log('Something went wrong', error.response.data);
        //       history.push('/BaseCompanent');
        //     });

    };


    return (
        <div className='maindiv1'>
            <div className='subdiv1'>
                <div>
                    <div className='img1'>
                        <div className='img-container1'>
                            <img className='profile1' src={profile} alt="profile"></img>
                        </div>
                    </div>
                    <div className='login1'>
                        <h1>Login Page</h1>
                    </div>
                    <div>
                        <form>
                            <table cellPadding='10px'>
                                <tr>
                                    <td>
                                        <label className='desc1' htmlFor='email'>Email : </label>
                                    </td>
                                    <td>
                                        <input className='textbox1' type="text" name='email' id='email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder='Enter Username' required></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='desc1' htmlFor='pwd'>Password : </label>
                                    </td>
                                    <td>
                                        <input className='textbox1' type="password" name='pwd' id='pwd'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder='Enter Password' required></input>
                                    </td>
                                </tr>

                                <tr>
                                    <td colSpan={2}>
                                        <button onClick={(e) => validateEmployee(e)} className='desc2' type='button' name='btn' id='btn1'><b>Submit</b></button>
                                    </td>
                                </tr>
                            </table>
                        </form>
                        <div>
                            <a href='#'>Forgot password ?</a> Or
                            <Link to='/RegistrationForm' className='btn btn-primary mb-2'>
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;