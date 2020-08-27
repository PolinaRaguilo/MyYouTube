

export default class RenderResults {
  constructor(videoId, title) {
    this.videoId = videoId;
    this.title = title;
  }

  showListVideos(videoId, title){
    let list = `
        <div class="oneVideoBlock">
          <div class="imgVideo">
            <iframe src="http://www.youtube.com/embed/${videoId}" class="littleVideos"></iframe>
          </div>
          <div class="detailsInf">
            <a href='#'><h3 class="titleMain">${title}</h3></a>
            <div class="channelInf"></div>
            <div class="detailsLikesDislikes">
            </div>
          </div>
        </div>
        `
    return list;
  }
  showSingleStatistic(likes, dislikes, views){
    let statistic = `
          <h3><i class="fas fa-thumbs-up"></i>  ${likes}</h3>
          <h3><i class="fas fa-thumbs-down"></i> ${dislikes}</h3>
          <h3><i class="fas fa-eye"></i> ${views}</h3>
        `
    return statistic;
  }

  showImage(channelTitle, image){
    let imageChannel = ` 
      <h3>${channelTitle}</h3>
      <img src="${image}">`
    return imageChannel;
  }
}