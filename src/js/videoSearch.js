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
            <img src="https://static.affinity-petcare.com/advance/cdn/farfuture/ddBna0_SjS76_L2uPgcnqwezEHIIlctMaLVd1HXTA64/drupal-cache:qe4ik6/sites/default/files/styles/article-list/public/field/image/16-bosque_noruega.jpeg?itok=LXSxp1mE" alt="альтернативный текст" class="littleVideos">
          </div>
          <div className="detailsInf">
            <h3 class="titleMain">${title}</h3>
            <h4 class="channeleMain">${channelTitle}</h4>
            <div className="detailsLikesDislikes">
            </div>
          </div>
        </div>
        `
        videos.append(video);
        console.log(item)
     }))
  }
  videoStatistics(key,idVideo){
     $.get(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${idVideo}&key=${key}`)
     

  }
  channelImg(key, idChannel){

  }
}