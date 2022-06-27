import React, { useEffect, useState } from 'react';
import BackImage from '../components/backgrounImage/BackImage';
import ContactComponent from '../components/contact/Contact';
import NavbarSite from '../components/Navbar/NavbarSite';
// import Nimaga from '../components/Nimaga/Nimaga';
import OurSchoolHome from '../components/OurSchoolHome/OurSchoolHome';
// import LatesPostItem from '../components/LatestPost/PostItem';
// import Sharoitlar from '../components/Sharoitlar/Sharoitlar';
// import Success from '../components/Success/Success';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';
import rasm2 from "../image/rasm2.png"
import rasm3 from "../image/rasm3.png"




const Home = () => {
    const [data, setData] = useState([])
    const [qulaylik, setQulaylik] = useState({})
    const [success, setSuccess] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true)
                const res = await axios.get("https://28-maktab-six.vercel.app/api/postlastfour")
                setData(res.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
        getQulaylik()
        getSuccess()
    }, [])

    const getQulaylik = async () => {
        try {
            const res = await axios.get('https://28-maktab-six.vercel.app/api/qulaylik/6219fdc9de9aae87a85e335e')
            setQulaylik(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getSuccess = async () => {
        try {
            const res = await axios.get('https://28-maktab-six.vercel.app/api/operating/621a002dfe1806da5da0e2c4')
            setSuccess(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <NavbarSite />
            <BackImage />
            <OurSchoolHome />
            {/* <OurSchoolHome /> */}
            <div className="container">
                <div className="row">
                    <h3 className='text-center'>
                        So'ngi Yangiliklar
                    </h3>
                    {
                        data.map(item => {
                            return (
                                <div className="col-md-4 col-sm-12" key={item._id}>
                                    <div className="card shadow my-3" style={{
                                        borderRadius: "20px"
                                    }}>
                                        <Carousel>
                                            {
                                                item.photo.map(item => {
                                                    return (
                                                        <Carousel.Item key={item._id}>
                                                            <img
                                                                className="d-block w-100"
                                                                src={item.image}
                                                                alt="Third slide"
                                                            />
                                                        </Carousel.Item>
                                                    )
                                                })
                                            }
                                        </Carousel>
                                        <div className="card-body">
                                            <p style={{
                                                fontSize: "14px",
                                                color: "#888"
                                            }}>
                                                <span>
                                                    <i className="fad fa-clock"></i> {new Date(item.createdAt).toDateString()}
                                                </span>
                                                <span className='px-3'>
                                                    <i className="fad fa-user"></i> {item.username}
                                                </span>
                                            </p>
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text post-line-3">
                                                {item.desc}
                                            </p>
                                            <Link to={`/news/${item._id}`} className="btn btn-primary shadow-none">Batafsil</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            {/* <Nimaga /> */}
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 col-sm-12 d-flex align-items-center">
                        <div className='text-center'>
                            <h3>{qulaylik.title}</h3>
                            <p className='text-center'>
                                {qulaylik.desc}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img
                            src={rasm2}
                            alt=""
                            className='w-100'
                        />
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <img
                            src={rasm3}
                            alt=""
                            className='w-100'
                        />
                    </div>
                    <div className="col-md-6 col-sm-12 d-flex align-items-center">
                        <div className='text-center'>
                            <h3>{success.title}</h3>
                            <p className='text-center'>
                                {success.desc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ContactComponent />
        </div>
    );
};

export default Home;