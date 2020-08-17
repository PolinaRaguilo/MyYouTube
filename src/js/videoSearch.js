import $ from 'jquery'

export default class VideoSearch{
  constructor(key, searchText) {
    this.key = key;
    this.searchText = searchText;
  }
  videoSearch(key,text,maxRes){
    let videos = $("#videoList");
    $("#videoList").empty();
 
    $.get(`https://www.googleapis.com/youtube/v3/search?key=${key}&type=video&part=snippet&maxResults=${maxRes}&q=${text}`)
     .then((data) => data.items.forEach((item) => {
       let title = item.snippet.title;
       let channelTitle = item.snippet.channelTitle;
       let videoId = item.id.videoId;
       let channelId = item.snippet.channelId;

        let video = `
        <div class="oneVideoBlock">
          <div class="imgVideo">
            <iframe src="http://www.youtube.com/embed/${videoId}" class="littleVideos"></iframe>
          </div>
          <div class="detailsInf">
            <a href='#'><h3 class="titleMain">${title}</h3></a>
            <h4 class="channeleMain">${channelTitle}</h4>
            <div class="detailsLikesDislikes">
            </div>
          </div>
        </div>
        `
        
        videos.append(video);
        this.videoStatistics(key,videoId)
        console.log(item)
     }))
  }
  videoStatistics(Gkey,idVideo){
    let statistics = $(".detailsLikesDislikes");
    $(".detailsLikesDislikes").empty();

     $.get(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${idVideo}&key=${Gkey}`)
      .then((data) => data.items.forEach((item) =>{
        let likes = item.statistics.likeCount;
        let dislikes = item.statistics.dislikeCount;
        let views = item.statistics.viewCount;

        let singleStatistic = `
          <h3> likes ${likes}</h3>
          <h3> dis ${dislikes}</h3>
          <h3>views ${views}</h3>
        `
        statistics.append(singleStatistic);
        console.log(item)
      }))

  }
  channelImg(key, idChannel){

  }
}

