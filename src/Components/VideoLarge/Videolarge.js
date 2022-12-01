import React, { useEffect, useState } from "react";
import "./Videolarge.css";
import emptyheartlarge from "../../images/emptyheartlarge.png";
import profilepiclarge from "../../images/profilepiclarge.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getLarge } from "../../Features/PhotoSlice";
import ReactPlayer from "react-player";
import arrow from "../../images/arrow back.png";
import options from "../../images/more vert.png";
export default function Videolarge() {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const video = useSelector(getLarge);
  console.log(video);

  const videolink = video && video?.video_files?.[0]?.link;
  const video_desc = video && video?.url;
  const description = video_desc?.split("/");

  useEffect(() => {
    setData(video);
  }, []);

  return (
    <>
      {video && (
        <div className="Video-large-div">
          <ReactPlayer
            controls
            url={video && videolink}
            height="522px"
            width="940px"
          />
          <div className="Video-large-div-container">
            <div className="name-heart-top">
              <span className="Video-desc">{video && description?.[4]}</span>
              <img
                src={emptyheartlarge}
                className="Video-heart-large-img"
              ></img>
            </div>
            <img
              onClick={() => {
                navigate("/videos");
              }}
              className="back-arrow"
              src={arrow}
              alt="pic"
            />
            <img className="options" src={options} alt="pic" />
            <div className="profile-name-image-container-large">
              <img src={profilepiclarge}></img>
              <span className="profile-large-name">
                {video ? video?.user?.name : ""}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
