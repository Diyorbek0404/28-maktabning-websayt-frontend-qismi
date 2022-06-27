import React, { useEffect, useState } from 'react';
import NavbarSite from '../components/Navbar/NavbarSite';
import axios from "axios"

const Student = () => {
    const [data, setData] = useState([])
    const [datalen, setDatalen] = useState()

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get("https://28-maktab-six.vercel.app/api/student")
            setData(res.data)
            setDatalen(res.data.length)
        }
        getData()
    }, [])
    return (
        <div>
            <NavbarSite />
            <div className="container my-5">
                <div className="row">
                    <div className="col-12 my-2">
                        <h5>Barcha o'quvchilar ro'yxati</h5>

                        <p>
                            Jami o'quvchilar soni :<br />
                            {datalen}
                        </p>
                        <table className="table my-5">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">ism</th>
                                    <th scope="col">familya</th>
                                    <th scope="col">sinfi</th>
                                    <th scope="col">phone</th>
                                    <th scope="col">email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item, inde) => {
                                        inde = inde + 1
                                        return (
                                            <tr key={item._id}>
                                                <th scope="row">{inde}</th>
                                                <td>{item.name}</td>
                                                <td>{item.lastname}</td>
                                                <td>{item.sinf}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.email}</td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Student;