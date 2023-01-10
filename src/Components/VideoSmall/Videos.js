import React, { useEffect, useState } from "react";
import "./Videos.css";
import oval from "../../images/Oval.png";
import heart from "../../images/Path-2.png";
import videoimg from "../../images/video-rectangle.png";
import filledheart from "../../images/Path.png";
import play from "../../images/play.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFav,
  addToheart,
  fetchAsyncSearchVideo,
  fetchAsyncVideo,
  getFav,
  getLiked,
  getVideos,
  removeOneFromFav,
  removeOneFromLiked,
} from "../../Features/PhotoSlice";
export default function Videos() {
  const [heartpressed, setHeartpressed] = useState(null);
  const [unfilled, setUnfilled] = useState(true);
  const [videodata, setVideodata] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = "nature";

  const getfav = useSelector(getFav);
  const data = useSelector(getVideos);
  const getlikeddata = useSelector(getLiked);
  useEffect(() => {
    dispatch(fetchAsyncSearchVideo(name));
    setVideodata(data);
  }, [dispatch]);

  // console.log(data);
  return (
    <>
      {data && data?.videos ? (
        <div className="videos-div">
          <div className="videos-container-div">
            {data.videos.map((data) => {
              return (
                <div className="videos-container" key={data?.id}>
                  <img src={data.image} className="video-thumb-size"></img>
                  <img
                    src={play}
                    className="play-button"
                    onClick={() => {
                      dispatch(fetchAsyncVideo(data.id));
                      navigate("/Videolarge");
                    }}
                  ></img>
                  <img src={oval} className="profile-pic"></img>
                  <span className="username">{data.user.name}</span>

                  <img
                    className="heart"
                    id={data?.id}
                    src={getlikeddata?.includes(data?.id) ? filledheart : heart}
                    onClick={() => {
                      if (!getlikeddata?.includes(data.id)) {
                        dispatch(addToheart(data?.id));
                        setHeartpressed(data?.id);
                        dispatch(addToFav(data));
                      } else {
                        dispatch(removeOneFromFav({ id: data?.id }));
                        dispatch(removeOneFromLiked(data?.id));
                      }
                    }}
                  ></img>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="videos-div">
          <div className="videos-container-div">
            <div className="videos-container">
              <img src={videoimg}></img>
              <img
                src={play}
                className="play-button"
                onClick={() => {
                  navigate("/Videolarge");
                }}
              ></img>
              <img src={oval} className="profile-pic"></img>
              <span className="username">videographer name</span>

              <img
                className="heart"
                src={unfilled ? heart : filledheart}
                onClick={() => {
                  if (unfilled === true) {
                    setUnfilled(!unfilled);
                    dispatch(addToFav(data));
                    dispatch(addToheart(data.id));
                  } else {
                    setUnfilled(!unfilled);
                    dispatch(removeOneFromFav({ id: data.id }));
                    dispatch(removeOneFromLiked(data.id));
                  }
                }}
              ></img>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
