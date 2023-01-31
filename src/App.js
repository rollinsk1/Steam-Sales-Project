import React, { useState, useEffect } from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'
import About from './Views/About'
import TopSellers from './Views/TopSellers'
import Contact from './Views/Contact'
import './tailwind.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from 'axios'


function App() {

  const [ games, setGames ] = useState();

  useEffect(() => {
    axios.get('https://www.cheapshark.com/api/1.0/games?title=Souls')
    .then(res => {
      const test = []
      for(let i = 0; i < res.data.length; i++) {
        let gameName = res.data[i].external;
        let gameThumb = res.data[i].thumb;
        test.push(gameName, gameThumb)
        console.log(gameName, gameThumb)
      }
      setGames(test)
    })
    .catch(err => {
      console.log("Error!")
      console.log(err)
    })
  }, [])

  return (
    <div>
      <BrowserRouter>
       <Header />

       <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/About" element={<About />}/>
         <Route path="/Top_Sellers" element={<TopSellers games={games}/>}/>
         <Route path="/Contact" element={<Contact />}/>
       </Routes>
       <Footer />

      </BrowserRouter>
    </div>
  )
}


export default App;
