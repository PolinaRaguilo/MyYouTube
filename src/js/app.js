import $ from 'jquery';
import FormHandler from './formHandler';
import VideoSearch from './videoSearch';
import RenderResults from './render';
import Render from './render';



let formSearch = document.getElementById('formSearch');
let inputSearch = document.getElementById('inputSearch');
let divVideo = document.getElementById('videoList');


const API_KEY = 'AIzaSyAAaRTRDYc93q5agWzuOe-rEvgBD83PXEM';

let search = new VideoSearch();
let formHandler = new FormHandler(formSearch, inputSearch);
// let resultsRender = new RenderResults();
let render = new Render('divVideo')


formHandler.formSubmit(function(e){
  let videos = $("#videoList");
    $("#videoList").empty();
    let text = inputSearch.value;
   return  search.getAllVideos(API_KEY,text,20)
            .then(data =>{
              render.addRow(data)
              //console.log(data);
              //  data.items.forEach((item) => {
              // let title = item.snippet.title;
              // let urlImg = item.snippet.thumbnails.high.url;
              // let channelTitle = item.snippet.channelTitle;

              
              // let video = resultsRender.showListVideos(urlImg, title,channelTitle);
              // videos.append(video);
              // })
            })

});


