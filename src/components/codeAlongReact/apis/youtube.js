import axios from "axios";

const KEY = " AIzaSyA_PGWTh9EaytfrsowDPb2DFcBVPq6RI2M";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
