import React from "react";
import "./Photolarge.css";
import emptyheartlarge from "../../images/emptyheartlarge.png";
import filledHeartlarge from "../../images/filledHeartLarge.png"
import zoomin from "../../images/zoom-positive.png";
import zoomout from "../../images/zoom-negative.png";
import profilepiclarge from "../../images/profilepiclarge.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getImagelarge, getLarge } from "../../features/Photo/PhotoSlice";
import imagelarge from "../../images/image-large.png";
import arrow from "../../images/arrow back.png";
import options from "../../images/more vert.png";
import { addToFav, addToheart, getLarge, getLiked, removeOneFromFav, removeOneFromLiked } from "../../Features/PhotoSlice";

export default function Photolarge() {
  const [heartpressed, setHeartpressed] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const image = useSelector(getLarge);
  // console.log(image);
  const imagelink = image && image?.src && image?.src?.large;
  const getlikeddata = useSelector(getLiked);

  return (
    <>
      <div className="photo-large-div">
        <img src={imagelink} className="photo-large"></img>

        <div className="photo-large-div-container">
          {/* <div className="descHeart-div"> */}
          <span className="photo-desc">{image && image?.alt}</span>          
          {/* <img className="heart-large-img" src={emptyheartlarge}></img> */}
          <img
            className="heart-large-img"
            src={
              getlikeddata?.includes(image?.id)
                ? filledHeartlarge
                : emptyheartlarge
            }
            onClick={() => {
              if (!getlikeddata?.includes(image.id)) {
                dispatch(addToheart(image?.id));
                setHeartpressed(image?.id);
                dispatch(addToFav(image));
              } else {
                dispatch(removeOneFromFav({ id: image?.id }));
                dispatch(removeOneFromLiked(image?.id));
              }
            }}
          ></img>
          {/* </div> */}
          <img
            onClick={() => {
              navigate("/");
            }}
            className="back-arrow"
            src={arrow}
            alt="pic"
          />
          <img className="options" src={options} alt="pic" />
          <div className="zoom-p">
            <div className="zoom-in">
              <img src={zoomin}></img>
            </div>
            <div className="zoom-out">
              <img src={zoomout}></img>
            </div>
          </div>
          <div className="profile-name-image-container-large">
            <img src={profilepiclarge}></img>
            <span className="profile-large-name">
              {image && image?.photographer}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
