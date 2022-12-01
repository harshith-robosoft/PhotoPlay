import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BaseApi from "../Api/BaseApi";
export const fetchAsyncPhoto = createAsyncThunk(
  "recent/fetchAsyncPhoto",
  async (id) => {
    const response = await BaseApi.get(`v1/photos/${id}`);
    return response.data;
  }
);
export const fetchAsyncVideo = createAsyncThunk(
  "recent/fetchAsyncPhoto",
  async (id) => {
    const response = await BaseApi.get(`videos/videos/${id}`);
    return response.data;
  }
);

export const fetchAsyncSearch = createAsyncThunk(
  "recent/fetchAsyncSearch",
  async (payload) => {
    const response = await BaseApi.get(
      `v1/search?query=${payload}&per_page=12`
    );
    return response.data;
  }
);
export const fetchAsyncSearchVideo = createAsyncThunk(
  "recent/fetchAsyncSearchVideo",
  async (payload) => {
    const response = await BaseApi.get(
      `videos/search?query=${payload}&per_page=12`
    );
    return response.data;
  }
);

const PhotoSlice = createSlice({
  name: "Photos",
  initialState: {
    recents: [],
    searchdata: {},
    videos: {},
    large: {},
    imagelarge: {},
    liked: [],
    favourites: [],
  },
  reducers: {
    addRecent: (state, { payload }) => {
      let isPresent = false;
      for (let item of state.recents) {
        if (item.id === payload.id) {
          isPresent = true;
        }
      }
      if (!isPresent) {
        state.recents.unshift(payload);
      }
    },
    addLarge: (state, { payload }) => {
      state.large = { payload };
    },
    addSearch: (state, { payload }) => {
      state.searchdata = { payload };
    },
    addToheart: (state, action) => {
      let isPresent = false;
      for (let item of state.liked) {
        if (item.id === action.payload) {
          isPresent = true;
        }
      }
      if (!isPresent) {
        console.log("Got a hit");
        state.liked.unshift(action.payload);
      }
    },
    addToFav: (state, action) => {
      let isPresent = false;
      for (let item of state.favourites) {
        if (item.id === action.payload) {
          isPresent = true;
        }
      }
      if (!isPresent) {
        console.log("Got a hit");
        state.favourites.unshift(action.payload);
      }
    },
    removeOneFromLiked: (state, action) => {
      state.liked = state.liked.filter((data) => data !== action.payload);
    },
    removeFromFav: (state) => {
      state.favourites = [];
    },
    removeFromliked: (state) => {
      state.liked = [];
    },
    removeFromrecent: (state) => {
      state.recents = [];
    },
    removeOneFromFav: (state, action) => {
      state.favourites = state.favourites.filter(
        (place) => place.id !== action.payload.id
      );
    },
  },
  extraReducers: {
    [fetchAsyncPhoto.pending]: () => {
      console.log("Pending....");
    },
    [fetchAsyncPhoto.fulfilled]: (state, { payload }) => {
      console.log("Fetched Succefully!!!");
      return { ...state, imagelarge: payload };
    },
    [fetchAsyncPhoto.rejected]: () => {
      console.log("Rejected....");
    },
    [fetchAsyncSearch.fulfilled]: (state, { payload }) => {
      console.log("Fetched Succefully!!!");
      return { ...state, searchdata: payload };
    },
    [fetchAsyncSearch.rejected]: () => {
      console.log("Rejected....");
    },
    [fetchAsyncSearchVideo.fulfilled]: (state, { payload }) => {
      console.log("Fetched Succefully!!!");
      return { ...state, videos: payload };
    },
    [fetchAsyncSearchVideo.rejected]: () => {
      console.log("Rejected....");
    },
    [fetchAsyncVideo.fulfilled]: (state, { payload }) => {
      console.log("Fetched Succefully!!!");
      return { ...state, large: payload };
    },
  },
});

export const {
  addRecent,
  addToheart,
  removeOneFromLiked,
  addLarge,
  addToFav,
  removeFromFav,
  removeOneFromFav,
  addSearch,
} = PhotoSlice.actions;

export const getRecents = (state) => state.Photos.recents;
export const getSearch = (state) => state.Photos.searchdata;
export const getLarge = (state) => state.Photos.large;
export const getImagelarge = (state) => state.Photos.imagelarge;
export const getLiked = (state) => state.Photos.liked;
export const getFav = (state) => state.Photos.favourites;
export const getVideos = (state) => state.Photos.videos;
export default PhotoSlice.reducer;
