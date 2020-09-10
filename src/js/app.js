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
   return  search.getAllVideos(API_KEY,20)
            .then(data =>{
              console.log(data)
              render.addRow(data)

            })

});


