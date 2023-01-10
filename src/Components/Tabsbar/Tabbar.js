// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Tabbar.css";

// export default function Tabbar() {
//   const [checked, setChecked] = useState(false);
//   const handlePhotos = () => {
//     setChecked(true);
//     setVideoChecked(false);
//     setFavouriteschecked(false);
//   };
//   const [videochecked, setVideoChecked] = useState(false);
//   const [FavouritesChecked, setFavouriteschecked] = useState(false);

//   const handleVideos = () => {
//     setVideoChecked(true);
//     setChecked(false);
//     setFavouriteschecked(false);
//   };
//   const handleFav = () => {
//     setFavouriteschecked(true);
//     setChecked(false);
//     setVideoChecked(false);
//   };

//   const navigate = useNavigate();
//   return (
//     <div className="Tabbar">
//       <div className="photos-videos">
//         <div
//           className="photos"
//           onClick={() => {
//             handlePhotos();
//             navigate("/");
//           }}
//           style={{
//             borderBottom: checked
//               ? "2px solid #e81244"
//               : "2px solid rgba(39, 106, 160, 0.1)",
//           }}
//         >
//           <span
//             style={{
//               color: checked ? "#e81244" : "rgba(35, 7, 53,0.5)",
//             }}
//           >
//             Photos
//           </span>
//         </div>

//         <div
//           className="videos"
//           onClick={() => {
//             handleVideos();
//             navigate("/videos");
//           }}
//           style={{
//             borderBottom: videochecked
//               ? "2px solid #e81244"
//               : "2px solid rgba(39, 106, 160, 0.1)",
//           }}
//         >
//           <span
//             style={{
//               color: videochecked ? "#e81244" : "rgba(35, 7, 53,0.5)",
//             }}
//           >
//             Videos
//           </span>
//         </div>
//       </div>
//       <div
//         className="favourites"
//         onClick={() => {
//           handleFav();
//           navigate("/favourites");
//         }}
//         style={{
//           borderBottom: FavouritesChecked
//             ? "2px solid #e81244"
//             : "2px solid rgba(39, 106, 160, 0.1)",
//         }}
//       >
//         <span
//           style={{
//             color: FavouritesChecked ? "#e81244" : "rgba(35, 7, 53,0.5)",
//           }}
//         >
//           Favourites
//         </span>
//       </div>
//     </div>
//   );
// }
import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./Tabbar.css";

export default function Tabbar() {
  const navigate = useNavigate();
  return (
    <div className="Tabbar">
      <div className="photos-videos">
        <NavLink className="tab-line" to="/">
          <p className="photos">Photos</p>
        </NavLink>
        <NavLink className="tab-line" to="/videos">
          <p className="videos">Videos</p>
        </NavLink>
      </div>

      <NavLink className="tab-line" to="/favourites">
        <p className="favourites">Favourites</p>
      </NavLink>
    </div>
  );
}
