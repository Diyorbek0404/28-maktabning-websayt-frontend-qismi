import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from 'react-router-dom';

const NavbarSite = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    return (
        <Navbar bg="white" expand="lg" className='shadow'>
            <Container>
                <Navbar.Brand href="/" style={{
                    fontWeight: "600",
                    fontSize: "22px"
                }}>28-maktab</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {
                        user ?
                            <Nav className="me-auto">
                                <Link className='nav-link' to="/">Bosh sahifa</Link>
                                <Link className='nav-link' to="/about">Biz haqimizda</Link>
                                <Link className='nav-link' to="/blog">Yangiliklar</Link>
                                <Link className='nav-link' to="/contact">Bog'lanish</Link>
                                <Link className='nav-link' to="/student">O'quvchilar ro'yxati</Link>
                                <Link className='nav-link' to="/profile">Profile</Link>
                            </Nav>
                            :
                            <Nav className="me-auto">
                                <Link className='nav-link' to="/">Bosh sahifa</Link>
                                <Link className='nav-link' to="/about">Biz haqimizda</Link>
                                <Link className='nav-link' to="/blog">Yangiliklar</Link>
                                <Link className='nav-link' to="/contact">Bog'lanish</Link>
                                <Link className='nav-link' to="/student">O'quvchilar ro'yxati</Link>
                                <Link className='nav-link btn btn-primary text-white ' to="/login">Login</Link>
                                <Link className='nav-link btn btn-primary text-white mx-2' to="/registration">Registration</Link>
                            </Nav>
                    }

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarSite;