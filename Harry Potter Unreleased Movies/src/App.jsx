import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import MoviesDetailsPage from './pages/MoviesDetailsPage';
import CreateYourOwnMoviePage from './pages/CreateYourOwnMoviePage';

function App() {
  return (
    <>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movie/:movieId' element={<MoviesDetailsPage />} />
          <Route path='/CreateYourOwnMoviePage' element={<CreateYourOwnMoviePage />} />
          <Route path='*' element={<h1>404 Page</h1>} />
        </Routes>
      </div>
      <h1>Harry Potter's Unreleased Movies!</h1>
    </>
  );
}

export default App;
