import React from 'react';
import { Carousel } from 'react-bootstrap';

const BackImage = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    src="https://images.unsplash.com/photo-1569098272587-7af816a8293c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt=""
                    className='w-100 d-block '
                />
                <Carousel.Caption>
                    <h3>Dana Stewart Scott</h3>
                    <p>
                        Yoshligingizda imkon qadar ko'proq o'rganing, keyinchalik hayot  juda band bo'lib qoladi
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default BackImage;