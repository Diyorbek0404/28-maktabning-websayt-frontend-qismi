import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LatestNewsAll = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get("https://28-maktab-six.vercel.app/api/postlatestten")
                setData(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    })
    return (
        <div>
            <h5 className="">
                <i className="fas fa-dot-circle text-primary"></i>
                <span className='px-2'>So'ngi yangiliklar</span>
            </h5>
            {
                data.map(item => {
                    return (
                        <Link key={item._id} to={`/news/${item._id}`} className='my-3 text-decoration-none text-dark'>
                            <span className='text-muted' style={{
                                fontSize: "14px"
                            }}>
                                <i className="fas fa-calendar"></i>
                                <span className="px-2">
                                    {
                                        new Date(item.createdAt).getHours() > 10
                                            ?
                                            new Date(item.createdAt).getHours()
                                            :
                                            <span>
                                                0{new Date(item.createdAt).getHours()}
                                            </span>
                                    }
                                    {" : "}
                                    {
                                        new Date(item.createdAt).getMinutes() > 10
                                            ?
                                            new Date(item.createdAt).getMinutes()
                                            :
                                            <span>
                                                0{new Date(item.createdAt).getMinutes()}
                                            </span>
                                    }
                                </span>
                            </span>
                            <p className='post-line-2 text-dark'>
                                {item.title}
                            </p>
                            <hr />
                        </Link>
                    )
                })
            }
        </div>
    );
};

export default LatestNewsAll;