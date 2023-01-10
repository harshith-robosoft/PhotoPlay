import React, { useEffect, useState } from "react";
import "./Videolarge.css";
import filledHeartlarge from "../../images/filledHeartLarge.png"
import emptyheartlarge from "../../images/emptyheartlarge.png";
import profilepiclarge from "../../images/profilepiclarge.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFav, addToheart, getLarge, getLiked, removeOneFromFav, removeOneFromLiked } from "../../Features/PhotoSlice";
import ReactPlayer from "react-player";
import arrow from "../../images/arrow back.png";
import options from "../../images/more vert.png";
export default function Videolarge() {
  const [data, setData] = useState({});
  const [heartpressed, setHeartpressed] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const video = useSelector(getLarge);
  const getlikeddata = useSelector(getLiked);
  // console.log(video);

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

              <span className="Video-desc">{video && description?.[4]}</span>
            
                <img
            className="Video-heart-large-img"
            src={
              getlikeddata?.includes(video?.id)
                ? filledHeartlarge
                : emptyheartlarge
            }
            onClick={() => {
              if (!getlikeddata?.includes(video.id)) {
                dispatch(addToheart(video?.id));
                setHeartpressed(video?.id);
                dispatch(addToFav(video));
              } else {
                dispatch(removeOneFromFav({ id: video?.id }));
                dispatch(removeOneFromLiked(video?.id));
              }
            }}
          ></img>
       
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
