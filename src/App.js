import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Tabbar from "./Components/Tabsbar/Tabbar";
import Photos from "./Components/PhotoSmall/Photos";
import Footer from "./Components/Footer/Footer";
import Videos from "./Components/VideoSmall/Videos";
import navimg from "./images/Nav-logo.png";
import Favourites from "./Components/Favourites/Favourites";
import Photolarge from "./Components/PhotoLarge/Photolarge";
import Videolarge from "./Components/VideoLarge/Videolarge";
import Moblogo from "./images/moblogo.png";
import searchw from "./images/searchw.png";
function App() {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-200px";
    }
  }

  return (
    <div className="App">
      <div id="navbar">
        <div className="nav-mobile">
          <img src={Moblogo} alt="" />
          <img src={searchw} alt="" />
        </div>
        <div>
          <img src={navimg} className="nav-img"></img>
        </div>
        <div className="nav-search-bar">
          <input
            className="nav-search-input"
            placeholder="Search photos, videos, artists"
          ></input>
          <button className="nav-search-button"> SEARCH</button>
        </div>
      </div>
      <BrowserRouter>
        <Header />
        <Tabbar />
        <Routes>
          <Route path="/" exact element={<Photos />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/imagelarge" element={<Photolarge />} />
          <Route path="/Videolarge" element={<Videolarge />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
