import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from "axios"



const OurSchoolHome = () => {
    const [data, setData] = useState({})
    const [photo, setPhoto] = useState("")
    useEffect(() => {
        const getPost = async () => {
            try {
                const res = await axios.get("https://28-maktab-six.vercel.app/api/about/621a01d4003801e833093f20")
                setData(res.data)
                setPhoto(res.data.photo[0])
            } catch (error) {
                console.log(error)
            }
        }
        getPost()
    })

    return (
        <Container className='my-5'>
            <div className="row shadow p-2" style={{
                borderRadius: "20px"
            }}>
                <div className="col-lg-6 col-sm-12">
                    <img
                        src={photo.image}
                        alt=""
                        className='w-100 shadow'
                        style={{
                            borderRadius: "20px"
                        }}
                    />
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="p-3">
                        <h3>
                            {data.title}
                        </h3>
                        <p className="post-line-6">
                            {data.desc}
                        </p>
                        <Link to="/about" className='btn shadow-none btn-success'>Ko'proq</Link>
                    </div>
                </div>
            </div>
        </Container>

    );
};

export default OurSchoolHome;