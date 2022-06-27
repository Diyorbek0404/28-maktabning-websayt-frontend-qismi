import React from 'react';
import NavbarSite from '../components/Navbar/NavbarSite';
import { Link } from "react-router-dom"
import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState('')

    const registrationSubmit = async() => {
        const newUser = {
            username, 
            password
        }
        try {
            const res = await axios.post("https://28-maktab-six.vercel.app/api/auth/registration", newUser)
            localStorage.setItem("user", JSON.stringify(res.data))
            toast.success("ro'yxatdan o'tdingiz!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            window.location.replace("/")
        } catch (error) {
            console.log(error)
            toast.error("ro'yxatdan o'tishda xato!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    return (
        <div>
            <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {/* Same as */}
            <ToastContainer />
                <NavbarSite />
                <div className='container my-5'>
                    <div className="row">
                        <div className="col-12">
                            <div className='shadow p-3' style={{
                                borderRadius: "10px"
                            }}>
                                <h3 className="my-2 text-center">Registration</h3>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Username</label>
                                    <input
                                        type="text"
                                        className="form-control shadow-none"
                                        id="exampleFormControlInput1"
                                        placeholder="username"
                                        value={username}
                                        onChange={e => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">password</label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        className="form-control shadow-none"
                                        id="password"
                                        placeholder="password"
                                    />
                                </div>
                                <div className="mb-3">
                                    <button onClick={registrationSubmit} className='btn shadow-none btn-warning px-5'>
                                        Registration
                                    </button>
                                </div>
                                <div className="mb-3 text-center">
                                    <Link to="/login" style={{
                                        textDecoration: "none"
                                    }}>Akkauntingiz bormi ?  unda kiring</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;