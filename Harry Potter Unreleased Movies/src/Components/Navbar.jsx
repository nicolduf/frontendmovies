import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='navbar bg-info'>
            <div className='container-fluid'>
                <Link className='navbar-brand' to='/'>
                  <h1 style={{color: "gold"}}> Another Potter ?!? </h1>
                  <h2 style={{color: "gold"}}> The unreleased Harry Potter movies, you never knew you needed in your life!</h2>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
