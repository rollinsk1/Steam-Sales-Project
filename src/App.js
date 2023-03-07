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
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://www.cheapshark.com/api/1.0/games?title=${searchTerm}`
      const result = await axios.get(url);
      setGames(result.data);
    };
    fetchData();
  }, [searchTerm]);

  return (
    <div>
      <BrowserRouter>
        <Header onSearch={handleSearch} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route
            path="/Top_Sellers"
            element={<TopSellers games={games} onSearch={handleSearch} />}
          />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}


export default App;
