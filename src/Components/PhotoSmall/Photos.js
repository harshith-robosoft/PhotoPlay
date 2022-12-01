import React, { useEffect, useState } from "react";
import "./Photos.css";
import oval from "../../images/Oval.png";
import heart from "../../images/Path-2.png";
import filledheart from "../../images/Path.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFav,
  addToheart,
  fetchAsyncPhoto,
  fetchAsyncSearch,
  getFav,
  getLiked,
  getSearch,
} from "../../Features/PhotoSlice";

export default function Photos() {
  const [heartpressed, setHeartpressed] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = "cars";
  const data = useSelector(getSearch);
  const getlikeddata = useSelector(getLiked);
  console.log(getlikeddata);
  const getfav = useSelector(getFav);

  useEffect(() => {
    dispatch(fetchAsyncSearch(name));
  }, []);

  return (
    <>
      {data && data?.photos && (
        <div className="photos-div">
          <div className="photos-container-div">
            {data?.photos?.map((data) => {
              return (
                <div className="photos-container" key={data?.id}>
                  <div>
                    <img
                      src={data.src.large}
                      className="photo-size"
                      onClick={() => {
                        navigate("/imagelarge");
                        dispatch(fetchAsyncPhoto(data.id));
                      }}
                    ></img>
                  </div>
                  <img src={oval} className="profile-pic"></img>
                  <span className="username">{data?.photographer}</span>
                  <img
                    className="heart"
                    id={data?.id}
                    src={getfav?.includes(data?.id) ? filledheart : heart}
                    onClick={() => {
                      dispatch(addToheart(data?.id));
                      setHeartpressed(data?.id);
                      dispatch(addToFav(data));
                    }}
                  ></img>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
