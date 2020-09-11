import $ from 'jquery';

class Render {
  constructor(selector) {
    this.$element = $(selector);
  }
  addRow(data) {
    const renderList = new RenderListVideo(data);
    this.$element.html('').append(renderList.$element)
  }
  addDetails(data) {
    const renderVideoDetails = new RenderDetailsOfVideo(data);
    this.$element.html('').append(renderVideoDetails.$element);
  }
  addClickOnVideo(cb){
    this.$element.on('click','h3', e => {
      e.preventDefault();
      //let target = e.target;
      let id = $(e.target).closest('.oneVideoBlock').attr('data-id')
      console.log(id)
      cb(id)
    } )
  }
}

class RenderListVideo {
  constructor(data){
    this.data = data;

    const out = this.data.items.reduce((acc, item) =>{
      const{
        id: {
          videoId
        },
        snippet: {
          channelTitle,
          publishedAt,
          title,
          thumbnails:{
            high:{
              url
            }
          }
        } 
      } = item;
     acc += ` <div class="oneVideoBlock" data-id="${videoId}">
            <img src="${url}" alt="" class="littleVideos"/>
          <div class="detailsInf" >
          <h3 class="titleMain"><a href='#'>${title}</a></h3>
            <h2>Channel: ${channelTitle}</h2>
            <h3><i class="fas fa-calendar-alt"></i> ${publishedAt}</h3>
          </div>
        </div>`;
        return acc;  
    }, '');
    this.$element = `<div id="videoList" > ${out}</div>`
    //console.log(this.$element)

  }
}

class RenderDetailsOfVideo{
  constructor(data) {
    this.data = data;

    const {
      id: videoId,
      snippet: {
        channelTitle,
        description,
        title,
        publishedAt,
      },
      statistics: {
        commentCount,
        dislikeCount,
        likeCount,
        viewCount
      }
    } = data.items[0];

    const videoDetails = `<div data-id="${videoId}">
              <iframe src="http://www.youtube.com/embed/${videoId}"></iframe>
            <div>
          
            <div>
              <h2>${title}</h2>
              <p>Channel: ${channelTitle}</p> on ${publishedAt}
              <p>${description}</p>
              <p>${title}</p>
              <h3><i class="fas fa-thumbs-up"></i>  ${likeCount}</h3>
              <h3><i class="fas fa-thumbs-down"></i> ${dislikeCount}</h3>
              <h3><i class="fas fa-comments"></i>${commentCount}</h3>
              <h3><i class="fas fa-eye"></i> ${viewCount}</h3>
            </div>`
    this.$element = `<div id="videoList">${videoDetails}</div>`
  }
}
 



export default  Render;