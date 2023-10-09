import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleAudio = () => {
        const audio = new Audio('/src/assets/Hedwigs Theme.mp3');
        if (!isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/CreateYourOwnMoviePage">Create Your Own Movie!</Link>
            <button onClick={toggleAudio}>
                {isPlaying ? 'Pause Harry Potter Music' : 'Play Me Some Harry Potter Music Please!'}
            </button>
        </nav>
    );
}

export default Navbar;










// import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom'

// function Navbar() {
//     return (
//         <nav className='navbar bg-info'>
//             <div className='container-fluid'>
//                 <Link className='navbar-brand' to='/'>
//                   <h1 style={{color: "gold"}}> Another Potter ?!? </h1>
//                   <h2 style={{color: "gold"}}> The unreleased Harry Potter movies, you never knew you needed in your life!</h2>
//                 </Link>
//             </div>
//         </nav>
//     )
// }

// export default Navbar
