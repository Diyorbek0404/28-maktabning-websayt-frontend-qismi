import React, { useEffect } from 'react';
import { useState } from 'react';
import { Carousel } from "react-bootstrap"
import axios from "axios"
import { Link } from "react-router-dom"



const OurAbour = () => {
    const [data, setData] = useState({})
    const [photo, setPhoto] = useState([])
    const [likes, setLikes] = useState([])
    const [loading, setLoading] = useState(false)
    const user = JSON.parse(localStorage.getItem("user"))
    console.log(user)
    useEffect(() => {
        const getPost = async () => {
            try {
                setLoading(true)
                const res = await axios.get("https://28-maktab-six.vercel.app/api/about/621a01d4003801e833093f20")
                setData(res.data)
                console.log(res.data)
                setPhoto(res.data.photo)
                setLoading(false)
                setLikes(res.data.likes)
            } catch (error) {
                console.log(error)
            }
        }
        getPost()
    }, [])

    const likePost = async () => {
        const newLike = {
            userId: user._id
        }
        try {
            await axios.put("https://28-maktab-six.vercel.app/api/about/621a01d4003801e833093f20/like", newLike)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            {
                loading ?
                    <div className="card" aria-hidden="true">
                        <img src="https://images.unsplash.com/photo-1600456899121-68eda5705257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=957&q=80" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title placeholder-glow">
                                <span className="placeholder col-6"></span>
                            </h5>
                            <p className="card-text placeholder-glow">
                                <span className="placeholder col-7"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-6"></span>
                                <span className="placeholder col-8"></span>
                            </p>
                        </div>
                    </div>
                    :
                    <div className="card my-3">
                        <Carousel>
                            {
                                photo.map(photo => {
                                    return (
                                        <Carousel.Item key={photo._id}>
                                            <img
                                                className="d-block w-100"
                                                src={photo.image}
                                                alt="fva"
                                            />
                                        </Carousel.Item>
                                    )
                                })
                            }
                        </Carousel>
                        <div className="card-body">
                            {
                                user ?
                                    <button className='btn shadow-none' onClick={likePost}>
                                        {
                                            likes.includes(user._id) ?
                                                <i className='fas fa-heart fa-lg text-danger'></i>
                                                :
                                                <i className='fal fa-heart fa-lg'></i>
                                        }
                                        <br />{likes.length}

                                    </button>
                                    :
                                    <Link to={"/login"} className='btn shadow-none'>
                                        <i className='fal fa-heart fa-lg'></i>
                                        <br />{likes.length}
                                    </Link>
                            }


                            <h5 className="card-title">{data.title}</h5>
                            <p className="card-text">
                                {data.desc}
                            </p>
                        </div>
                    </div>
            }
        </div>
    );
};

export default OurAbour;