import React from 'react';
import LatestNewsAll from "../components/LatestNewsAll/LatestNewsAll"
import NavbarSite from '../components/Navbar/NavbarSite';
import Single from '../components/SinglePost/Single';

const SignlePost = () => {
    return (
        <div>
            <NavbarSite />
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-8 col-sm-12">
                        <Single />
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <LatestNewsAll />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignlePost;