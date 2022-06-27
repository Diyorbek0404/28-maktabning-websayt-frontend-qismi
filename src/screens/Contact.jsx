import React from 'react';
import ContactComponent from '../components/contact/Contact';
import NavbarSite from '../components/Navbar/NavbarSite';
import {Link} from "react-router-dom"

const Contact = () => {
    return (
        <div>
            <NavbarSite />
            <div className='w-100 bg-light my-5 text-center p-3'>
                <h1>Contact</h1>
                <p className='py-3' style={{
                    fontSize:"18px"
                }}>
                    <Link className='text-decoration-none text-dark' to={"/"}>Bosh sahifa </Link> 
                    {"->"} 
                    <Link className='text-decoration-none text-danger' to={"/contact"}> Contact</Link>
                </p>
            </div>
            <ContactComponent />
        </div>
    );
};

export default Contact;