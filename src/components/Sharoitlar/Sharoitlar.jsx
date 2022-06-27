import React from 'react';
import rasm2 from "../../image/rasm2.png"


const Sharoitlar = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 col-sm-12 d-flex align-items-center">
                        <div className='text-center'>
                            <h3>O'quvchilarga qulayliklar</h3>
                            <p className='text-center'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing
                                elit. Dolores, quos? Repudiandae
                                soluta similique quos est ducimus ratione a
                                doloremque culpa?
                                Lorem, ipsum dolor sit amet consectetur adipisicing
                                elit. Dolores, quos? Repudiandae
                                soluta similique quos est ducimus ratione a
                                doloremque culpa?
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
        </div>
    );
};

export default Sharoitlar;