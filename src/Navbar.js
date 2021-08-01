import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand">Brand</a>
                <form class="d-flex">
                <Link to='/login'>Login</Link> &nbsp;&nbsp;
                <Link to='/register'>Register</Link>
                </form>
            </div>
            </nav>
        </div>
    )
}

export default Navbar
