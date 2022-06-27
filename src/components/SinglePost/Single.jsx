import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';
import { Link } from "react-router-dom"
import { Carousel } from 'react-bootstrap';



const Single = () => {
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    const [posts, setPosts] = useState({})
    const user = JSON.parse(localStorage.getItem("user"))

    // comment
    const [commentLength, setCommentLenght] = useState([])
    const [comment, setComment] = useState("")
    const [comments, setComments] = useState([])

    // like
    const [likeLength, setlikeLenght] = useState([])
    const [like, setLike] = useState([])

    // photo
    const [photo, setPhoto] = useState([])

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("https://28-maktab-six.vercel.app/api/post/" + path);
            setPosts(res.data);
            setCommentLenght(res.data.comments.length)
            setlikeLenght(res.data.likes.length)
            setLike(res.data.likes)
            console.log(res.data)
            setComments(res.data.comments)
            setPhoto(res.data.photo)
        };
        getPost();

    }, [path]);

    const likePost = async () => {
        const newLike = {
            userId: user._id
        }
        try {
            const like = await axios.put(`https://28-maktab-six.vercel.app/api/post/${posts._id}/like`, newLike)
            console.log(like.data)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }

    const commentsPost = async () => {
        const newComment = {
            username: user.username,
            body: comment
        }
        try {
            await axios.put(`https://28-maktab-six.vercel.app/api/post/${posts._id}/comments`, newComment)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <div className="card my-3">
                <Carousel>
                    {
                        photo.map(item => {
                            return (
                                <Carousel.Item key={item._id}>
                                    <img
                                        className="d-block w-100"
                                        src={item.image}
                                        alt="Third slide"
                                        style={{
                                            borderRadius: "20px"
                                        }}
                                    />
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 my-2 text-muted">
                            {
                                user ?
                                    <button className='btn shadow-none' onClick={likePost}>
                                        {
                                            like.includes(user._id) ?
                                                <span>
                                                    <i className="fas fa-heart text-danger fa-lg px-1"></i> <br />
                                                    {likeLength}
                                                </span>
                                                :
                                                <span>
                                                    <i className="far fa-heart fa-lg px-1"></i> <br />
                                                    {likeLength}
                                                </span>
                                        }

                                    </button>
                                    :
                                    <Link to="/login" className='btn shadow-none'>

                                        <i className="far fa-heart fa-lg px-1"></i> <br />
                                        {likeLength}
                                    </Link>
                            }

                            <button className='btn shadow-none'>
                                <i className="far fa-comment fa-lg px-1"></i> <br />
                                {commentLength}
                            </button>
                        </div>
                        <div className="col-md-6 my-2 text-muted">
                            <span>
                                <i className="fas fa-user px-2"></i>{posts.username}
                            </span>
                            <span className="px-3">
                                <i className="fas fa-clock px-2"></i>{new Date(posts.createdAt).toLocaleString()}
                            </span>
                        </div>
                    </div>
                    <h5 className="card-title">{posts.title}</h5>
                    <p className="card-text">
                        {posts.desc}
                    </p>

                    <p>
                        Fikrlar:
                    </p>

                    <div>
                        {
                            comments.map(item => {
                                return (
                                    <div key={item._id} style={{
                                        borderRadius: "10px"
                                    }}>
                                        <p className="text-danger" style={{
                                            fontSize: "15px"
                                        }}>
                                            {item.username}
                                        </p>
                                        <p>
                                            {item.body}
                                        </p>
                                        <hr />
                                    </div>
                                )
                            })
                        }
                    </div>

                    {
                        user ? <div className='comment-form'>
                            <textarea
                                placeholder='sizning fikringiz'
                                name="" id=""
                                cols="20"
                                rows="2"
                                className='form-control my-2 shadow-none'
                                value={comment}
                                onChange={e => setComment(e.target.value)}
                            />
                            <button onClick={commentsPost} className='btn shadow-none btn-danger'>Comment</button>
                        </div>
                            :
                            null
                    }
                </div>
            </div>
        </div>
    );
};

export default Single;