import React from "react";
import "./Favourites.css";

import oval from "../../images/Oval.png";
import play from "../../images/play.png";
import heart from "../../images/Path.png";
import videoimg from "../../images/video-rectangle.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getFav,
  fetchAsyncPhoto,
  fetchAsyncVideo,
  getLiked,
  removeOneFromFav,
  removeOneFromLiked,
} from "../../Features/PhotoSlice";

export default function Favourites() {
  const fav = useSelector(getFav);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(fav);

  return (
    <div className="Favourites-div">
      <div className="Favourites-container-div">
        {fav?.map((data) => {
          return (
            <div className="Favourites-container">
              <img
                src={data?.src?.large ? data?.src?.large : data.image}
                onClick={() => {
                  if (data?.src?.large) {
                    dispatch(fetchAsyncPhoto(data?.id));
                    navigate("/imagelarge");
                  }
                }}
                className="fav-image-size"
              ></img>
              {data?.src?.large ? null : (
                <img
                  src={play}
                  className="play-button"
                  onClick={() => {
                    dispatch(fetchAsyncVideo(data?.id));
                    navigate("/Videolarge");
                  }}
                ></img>
              )}
              <img src={oval} className="profile-pic"></img>
              <span className="username">Favourite</span>
              <img
                className="heart"
                src={heart}
                onClick={() => {
                  dispatch(removeOneFromFav({}));
                  dispatch(removeOneFromLiked());
                }}
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}
