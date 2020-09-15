import $ from "jquery";
import RenderResults from "./render";

export default class VideoSearch {
  constructor(key) {
    this.key = key;
  }

  getAllVideos( text , maxRes) {
    return $.get(`https://www.googleapis.com/youtube/v3/search`, {
      part: "snippet",
      key: this.key,
      type: "video",
      order: "viewCount",
      maxResults: maxRes,
      q: text,
    }).fail((err) => console.log(`Что-то пошло не так ${err}`));
  }

  getVideoById(videoId){
    return $.get(`https://www.googleapis.com/youtube/v3/videos`,{
      part: "snippet, contentDetails, statistics",
      key: this.key,
      id: videoId,
    }).fail((err) => console.log(`Что-то пошло не так ${err.status}`));
  }
}
