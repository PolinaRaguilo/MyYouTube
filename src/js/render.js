

export default class RenderResults {
  constructor(videoId, title) {
    this.videoId = videoId;
    this.title = title;
  }

  showListVideos(urlImg, title, channelTitle){
    let list = `
        <div class="oneVideoBlock">
          <div class="imgVideo">
            <img src="${urlImg}" alt="" class="littleVideos"/>
          </div>
          <div class="detailsInf">
            <a href='#'><h3 class="titleMain">${title}</h3></a>
            <h2>Channel: ${channelTitle}</h2>
            <div class="channelInf"></div>
            <div class="detailsLikesDislikes">
            </div>
          </div>
        </div>
        `
    return list;
  }
  
  // showSingleStatistic(likes, dislikes, views){
  //   let statistic = `
  //         <h3><i class="fas fa-thumbs-up"></i>  ${likes}</h3>
  //         <h3><i class="fas fa-thumbs-down"></i> ${dislikes}</h3>
  //         <h3><i class="fas fa-eye"></i> ${views}</h3>
  //       `
  //   return statistic;
  // }


}