import React from 'react';
import rasm3 from "../../image/rasm3.png"

const Success = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <img
                            src={rasm3}
                            alt=""
                            className='w-100'
                        />
                    </div>
                    <div className="col-md-6 col-sm-12 d-flex align-items-center">
                        <div className='text-center'>
                            <h3>Maktabimizdagi Yutuqlar</h3>
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

export default Success;