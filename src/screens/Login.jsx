import React, { useRef } from 'react';
import NavbarSite from '../components/Navbar/NavbarSite';
import { Link } from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"

const Login = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();

    const loginSubmit = async() => {
        try {
            const res = await axios.post("https://28-maktab-six.vercel.app/api/auth/login", {
                username: usernameRef.current.value,
                password: passwordRef.current.value,
            })
            toast.success("omadli kirdingiz", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            localStorage.setItem("user", JSON.stringify(res.data))
            window.location.replace("/")
        } catch (error) {
            toast.error("Kirishda xato!", {
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
            <NavbarSite />
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
            <div className='container my-5'>
                <div className="row">
                    <div className="col-12">
                        <div className='shadow p-3' style={{
                            borderRadius:"10px"
                        }}>
                        <h3 className="my-2 text-center">Login</h3>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Username</label>
                                <input
                                    ref={usernameRef}
                                    type="text"
                                    className="form-control shadow-none"
                                    id="exampleFormControlInput1"
                                    placeholder="username"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">password</label>
                                <input
                                    type="password"
                                    className="form-control shadow-none"
                                    id="password"
                                    placeholder="password"
                                    ref={passwordRef}
                                />
                            </div>
                            <div className="mb-3">
                                <button onClick={loginSubmit} className='btn shadow-none btn-warning px-5'>
                                    Login
                                </button>
                            </div>
                            <div className="mb-3 text-center">
                                <Link to="/registration" style={{
                                    textDecoration: "none"
                                }}>Akkauntingiz yo'qmi ? unda ro'yxatdan o'ting</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;