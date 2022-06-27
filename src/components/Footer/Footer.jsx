import React from 'react';

const Footer = () => {
    return (
        <div className='bg-dark text-white p-4'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 my-3">
                        Ohangaron tumani 28-maktabning
                        Rasmiy veb-sayti
                    </div>
                    <div className="col-md-4 my-3">
                        <p>
                            Biz bilan bog'laning
                        </p>
                        <p>
                            <i className="fas fa-phone"></i> +998998030118
                        </p>
                        <p>
                            <i className="fab fa-telegram"></i> @28maktab
                        </p>
                        <p>
                            <i className="fas fa-envelope"></i> uzbekistancoder@gmail.com
                        </p>
                    </div>
                    <div className="col-md-4 my-3">
                        <p>
                        <i className="fas fa-globe-africa px-3"></i>Manzil
                        </p>
                        <p>
                            O'zbekiston, Toshkent viloyati, Ohangaron tumani, Go'shsoy mahallasi. mo'ljal : Ko'chbuloq qishlog'i
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;