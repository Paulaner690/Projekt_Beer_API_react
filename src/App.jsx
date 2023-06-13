import './App.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Preloader from './components/Preloader/Preloader.jsx'
import { useState, useEffect} from 'react';

import Home from './pages/Home/Home';
import Beers from './pages/Beers/Beers'
import BeerDetail from './pages/BeerDetail/BeerDetail'
import RandomBeer from './pages/RandomBeer/RandomBeer'


function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5500);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Home />}></Route>
            <Route path='/beers' element={ <Beers /> }></Route>
            <Route path='/beerdetail/:beerId' element={ <BeerDetail /> }></Route>
            <Route path='/random' element={ <RandomBeer /> }></Route>   
          </Routes>
        </BrowserRouter>
      )}
    </>
  )
}

export default App
