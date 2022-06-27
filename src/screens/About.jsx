import React from 'react';
import NavbarSite from '../components/Navbar/NavbarSite';
import { Link } from 'react-router-dom';
import OurAbour from '../components/BizHaqimizda/OurAbour';
import LatestNewsAll from '../components/LatestNewsAll/LatestNewsAll';

const About = () => {
    return (
        <div>
            <NavbarSite />
            <div className='w-100 bg-light my-5 text-center p-3'>
                <h1>Biz haqimizda</h1>
                <p className='py-3' style={{
                    fontSize:"18px"
                }}>
                    <Link className='text-decoration-none text-dark' to={"/"}>Bosh sahifa </Link> 
                    {"->"} 
                    <Link className='text-decoration-none text-danger' to={"/about"}> Biz haqimizda</Link>
                </p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-12">
                        <OurAbour />
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <LatestNewsAll />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;