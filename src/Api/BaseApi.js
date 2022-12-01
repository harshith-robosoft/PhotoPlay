import axios from "axios";

export default axios.create({
  baseURL: "https://api.pexels.com/",

  headers: {
    Authorization: "563492ad6f91700001000001f73f60ae7a694c0199e4f8e0121cc179",
  },
});
