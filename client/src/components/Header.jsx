import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>

            <div className='bg-dark'>
                <div className='container'>
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand text-white">TodoApp</Link>
                            <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link to={`/`} className="nav-link text-white active" aria-current="page">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={`/register`} className="nav-link text-white">Register</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header
