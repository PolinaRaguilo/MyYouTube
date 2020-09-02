import $ from "jquery";
import RenderResults from "./render";

export default class VideoSearch {
  constructor(key, searchText) {
    this.key = key;
    this.searchText = searchText;
  }

  getAllVideos(key, text, maxRes) {
    return $.get(`https://www.googleapis.com/youtube/v3/search`, {
      part: "snippet",
      key: key,
      type: "video",
      order: "viewCount",
      maxResults: maxRes,
      q: text,
    }).fail((err) => console.log(`Что-то пошло не так ${err}`));
  }

  getVideoById(key,videoId){
    return $.get(`https://www.googleapis.com/youtube/v3/videos`,{
      part: "snippet",
      key: key,
      id: videoId
    })
  }
}
