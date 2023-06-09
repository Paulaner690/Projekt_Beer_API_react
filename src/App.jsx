import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Beers from './pages/Beers/Beers'
import BeerDetail from './pages/BeerDetail/BeerDetail'
import RandomBeer from './pages/RandomBeer/RandomBeer'


function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home />}></Route>
          <Route path='/beers' element={ <Beers /> }></Route>
          <Route path='/beerdetail/:beerId' element={ <BeerDetail /> }></Route>
          <Route path='/random' element={ <RandomBeer /> }></Route>   
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
