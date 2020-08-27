import $ from 'jquery';
import RenderResults from './render';

let results = new RenderResults();

export default class VideoSearch{
  constructor(key, searchText) {
    this.key = key;
    this.searchText = searchText;
  }
  videoSearch(key,text,maxRes){
    let videos = $("#videoList");
    $("#videoList").empty();
 
    $.get(`https://www.googleapis.com/youtube/v3/search?key=${key}&type=video&part=snippet&order=viewCount&maxResults=${maxRes}&q=${text}`)
     .then((data) => data.items.forEach((item) => {
       let title = item.snippet.title;
       let videoId = item.id.videoId;
       let channelId = item.snippet.channelId;

       let video = results.showListVideos(videoId, title);

        // let video = `
        // <div class="oneVideoBlock">
        //   <div class="imgVideo">
        //     <iframe src="http://www.youtube.com/embed/${videoId}" class="littleVideos"></iframe>
        //   </div>
        //   <div class="detailsInf">
        //     <a href='#'><h3 class="titleMain">${title}</h3></a>
        //     <div class="channelInf"></div>
        //     <div class="detailsLikesDislikes">
        //     </div>
        //   </div>
        // </div>
        // `
        
        videos.append(video);
        this.channelImg(key, channelId)
        this.videoStatistics(key,videoId)
        //console.log(item)
     }))
     .catch((err) => console.log(`Что-то пошло не так ${err}`))
  }

  videoStatistics(Gkey,idVideo){
    let statistics = $(".detailsLikesDislikes");
    $(".detailsLikesDislikes").empty();

     $.get(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${idVideo}&key=${Gkey}`)
      .then((data) => data.items.forEach((item) =>{
        let likes = item.statistics.likeCount;
        let dislikes = item.statistics.dislikeCount;
        let views = item.statistics.viewCount;

        let singleStatistic = results.showSingleStatistic(likes, dislikes, views);

        // let singleStatistic = `
        //   <h3><i class="fas fa-thumbs-up"></i>  ${likes}</h3>
        //   <h3><i class="fas fa-thumbs-down"></i> ${dislikes}</h3>
        //   <h3><i class="fas fa-eye"></i> ${views}</h3>
        // `
        statistics.append(singleStatistic);
        //console.log(item)
      }))
      .catch((err) => console.log(`Что-то пошло не так ${err}`))

  }
  channelImg(key, idChannel){
    let imageCh = $(".channelInf");
    $(".channelInf").empty();
    $.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${idChannel}&key=${key}`)
    .then((data)=> data.items.forEach((item)=>{
      console.log(item)
      let image = item.snippet.thumbnails.high;
      let channelTitle = item.snippet.localized.title;

      let imgChannel = results.showImage(channelTitle, image)

      // let imgChannel = ` 
      // <h3>${channelTitle}</h3>
      // <img src="${image}">`

     imageCh.append(imgChannel)
     //console.log(image)
    }))
  }
}




