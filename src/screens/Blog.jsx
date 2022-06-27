import NavbarSite from '../components/Navbar/NavbarSite';
import { Link } from "react-router-dom"
// import LatestNewsPost from '../components/LatestNewsPost/LatestNewsPost';
import LatestNewsAll from '../components/LatestNewsAll/LatestNewsAll';
// import Posts from '../components/Post/Posts';
// import MashxurNews from '../components/Mashxur/MashxurNews';
import { useEffect, useState } from 'react';
import axios from "axios"
// import PaginationPost from '../components/Pagination/PaginationPost';
// import PostsItem from '../components/Item/PostsItem';
// import ReactPaginate from "react-paginate"
import { Carousel } from 'react-bootstrap';



const Blog = () => {
    const [latest, setLatest] = useState([])
    const [getAll, setgetAll] = useState([])
    const [photo, setPhoto] = useState([])



    // pagination
    // const [loading, setLoading] = useState(false);

    const getAllpost = async () => {
        try {
            const res = await axios.get('https://28-maktab-six.vercel.app/api/post')
            setgetAll(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        const getPost = async () => {
            try {
                const res = await axios.get("https://28-maktab-six.vercel.app/api/postlatest")
                setLatest(res.data)
                setPhoto(res.data[0].photo)
            } catch (error) {
                console.log(error)
            }
        }
        getPost()
        getAllpost()
    }, [])


    return (
        <div>
            <NavbarSite />
            <div className='w-100 bg-light my-5 text-center p-3'>
                <h1>Blog</h1>
                <p className='py-3' style={{
                    fontSize: "18px"
                }}>
                    <Link className='text-decoration-none text-dark' to={"/"}>Bosh sahifa </Link>
                    {"->"}
                    <Link className='text-decoration-none text-danger' to={"/blog"}> Blog</Link>
                </p>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 col-sm-12">
                        {
                            latest.map(post => {
                                return (
                                    <Link to={`/news/${post._id}`} className="card mb-3 text-decoration-none text-dark" key={post._id}>
                                        <div className="row g-0">

                                            <div className="col-md-6">
                                                <Carousel>
                                                    {
                                                        photo.map(item => {
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
                                            </div>
                                            <div className="col-md-6">
                                                <div className="card-body">
                                                    <p>
                                                        <small className="text-muted">
                                                            <i className="fas fa-clock"></i>
                                                            <span className='px-2'>
                                                                {new Date(post.createdAt).toLocaleString()}
                                                            </span>
                                                        </small>
                                                    </p>
                                                    <h5 className="card-title">{post.title}</h5>
                                                    <p className="card-text post-line-3">{post.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }

                        <div className="row">
                            {
                                getAll.map(posts => {
                                    return (
                                        <div className="col-md-6 col-sm-12 my-2" key={posts._id}>
                                            <div className="card shadow">
                                                <Carousel>
                                                    {
                                                        posts.photo.map(item => {
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
                                                    <h5 className="card-title">{posts.title}</h5>
                                                    <p className="card-text post-line-4">{posts.desc}</p>
                                                    <Link to={`/news/${posts._id}`} className="btn btn-primary">Ko'proq o'qing</Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <LatestNewsAll />
                    </div>
                </div>
                {/* <div className="row">
                    <h4>Dolzarb Xabarlar</h4>
                    <div className="col-md-3 col-sm-12 my-3">
                        <div className="card shadow">
                            <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Blog;