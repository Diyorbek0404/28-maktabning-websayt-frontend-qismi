import React from 'react';
import rasm1 from "../../image/rasm.png"


const Nimaga = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <img
                            src={rasm1}
                            className="w-100"
                            alt=""
                        />
                    </div>
                    <div className="col-md-6 col-sm-12 d-flex align-items-center">
                        <div className='text-center'>
                            <h3>Bizning ish tizimimiz qanday ?</h3>
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
                </div>
            </div>
        </div>
    );
};

export default Nimaga;