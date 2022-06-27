import React, { useState } from 'react';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactComponent = () => {
    const [name, setName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [desc, setDesc] = useState('')

    const handleSubmit = async () => {
        const newMessage = {
            name, email, lastname, phone, desc
        }
        try {
            await axios.post("https://28-maktab-six.vercel.app/api/message", newMessage)
            toast.success('malumotlaringiz yuborildi tez orada siz bilan aloqaga chiqamiz!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } catch (error) {
            console.log(error)
            toast.error('xabarni yuborishda xatolik!', {
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
        <div className='container my-3'>
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
            <div className="row">
                <div className="col-12">
                    <div className="form shadow p-3" style={{
                        borderRadius: "20px"
                    }}>
                        <h3 className='text-center'>Bizga xabar yo'llang</h3>
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="my-2">
                                    <label htmlFor="name">Ismingiz</label>
                                    <input
                                        type="text"
                                        className='form-control shadow-none'
                                        name=""
                                        id="name"
                                        placeholder='ismaloq'
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="my-2">
                                    <label htmlFor="lastname">Familyangiz</label>
                                    <input
                                        type="text"
                                        className='form-control shadow-none'
                                        name=""
                                        placeholder='familyev'
                                        id="lastname"
                                        value={lastname}
                                        onChange={e => setLastName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="my-2">
                                    <label htmlFor="name">Email</label>
                                    <input
                                        type="email"
                                        className='form-control shadow-none'
                                        name=""
                                        id="email"
                                        placeholder='example@gmail.com'
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="my-2">
                                    <label htmlFor="phone">Telefon raqam</label>
                                    <input
                                        placeholder='+998 __ ___ __ __'
                                        type="text"
                                        className='form-control shadow-none'
                                        name=""
                                        id="phone"
                                        value={phone}
                                        onChange={e => setPhone(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="my-2">
                                    <label htmlFor="desc">xabar matni</label>
                                    <textarea
                                        className='form-control shadow-none'
                                        id="desc"
                                        cols="10"
                                        rows="3"
                                        value={desc}
                                        onChange={e => setDesc(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="my-2">
                                    <button onClick={handleSubmit} className='btn btn-success shadow-none'>yuborish</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactComponent;