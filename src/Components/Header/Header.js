import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../images/Photo-logo.png";
import Shape from "../../images/Shape.png";
import { useDispatch, useSelector } from "react-redux";
import { getSearch, fetchAsyncSearch, fetchAsyncSearchVideo } from "../../Features/PhotoSlice";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const data = useSelector(getSearch);
  // console.log(data);

  const handleSubmit =(e)=>{
    e.preventDefault()
    // dispatch(fetchAsyncSearch(inputValue))
    window.location.pathname=== "/" ?  dispatch(fetchAsyncSearch(inputValue)) : dispatch(fetchAsyncSearchVideo(inputValue))
  }
  // useEffect(() => {
  //   dispatch(fetchAsyncSearch(inputValue));
  // }, []);

  return (
    <div className="header-main">
      <div className="header">
        <div className="logo">
          <img src={logo}></img>
        </div>
        <div className="header-inside">
          <div className="discover-the-worlds">
            Discover the world’s best photos & videos
            <span className="best-memories-online">Best memories online</span>
          </div>
          <form className="search-bar" onSubmit={handleSubmit}>     
            <input
              className="search-input"
              placeholder="Search photos, videos, artists"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            ></input>    
            <button
              className="search-button"
              onClick={() => {
                dispatch(fetchAsyncSearch(inputValue));
              }}
            >
              {" "}
              SEARCH
            </button>
          </form>
          <form onSubmit={handleSubmit} className="search-bar-mobile">
            <img className="search-icn" src={Shape} alt="pic" />

            <input
              className="search-input"
              placeholder="Search photos, videos, artists"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
