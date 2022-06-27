import React from 'react';
import NavbarSite from '../components/Navbar/NavbarSite';

const Profile = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    const logout = () => {
        localStorage.clear()
        window.location.replace("/")
    }
    return (
        <div>
            <NavbarSite />
            <div className="container my-5">
                <h3 className=''>Salom, {user.username}</h3>

                <div className="shadow p-3 my-4">
                    <h4>Ro'yxatdan o'tilgan sana : </h4>
                    <h4 className='my-2'>{new Date(user.createdAt).toDateString()}</h4>
                    <div className="my-4">
                        <button onClick={logout} className='btn shadow-none btn-warning'>Hisobdan chiqish</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;