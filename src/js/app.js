import $ from 'jquery';
import FormHandler from './formHandler';
import VideoSearch from './videoSearch';
import RenderResults from './render';



let formSearch = document.getElementById('formSearch');
let input_search = document.getElementById('inputSearch');
let divInformation = document.getElementsByClassName('detailsInf');
const API_KEY = 'AIzaSyAAaRTRDYc93q5agWzuOe-rEvgBD83PXEM';

let search = new VideoSearch();
let formHandler = new FormHandler(formSearch,input_search);
let resultsRender = new RenderResults();

formHandler.formSubmit(formSearch,function(e){
  let videos = $("#videoList");
    $("#videoList").empty();
    let text = input_search.value
   return  search.getAllVideos(API_KEY,text,20)
            .then(data =>{
              console.log(data);
               data.items.forEach((item) => {
              let title = item.snippet.title;
              let urlImg = item.snippet.thumbnails.high.url;
              let channelTitle = item.snippet.channelTitle;

              
              let video = resultsRender.showListVideos(urlImg, title,channelTitle);
              videos.append(video);
              })})

});


