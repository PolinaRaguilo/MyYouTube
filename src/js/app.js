import $ from 'jquery';
import FormHandler from './formHandler';
import VideoSearch from './videoSearch';
import Render from './render';



let formSearch = document.getElementById('formSearch');
let inputSearch = document.getElementById('inputSearch');
let divVideo = document.getElementById('videoList');
let backBtn = document.getElementById('btn_back')


const API_KEY = 'AIzaSyAAaRTRDYc93q5agWzuOe-rEvgBD83PXEM';

let search = new VideoSearch(API_KEY);
let formHandler = new FormHandler(formSearch, inputSearch,backBtn);
let render = new Render(divVideo)


formHandler.formSubmit(function(text){
   return  search.getAllVideos(text, 20)
            .then(data =>{
             //console.log(data)
              render.addRow(data)
              ;
            })

});

render.addClickOnVideo(function(id) {
  $('#btn_back').addClass('active');
  return search.getVideoById(id)
                .then(data => {
                  console.log(data)
                  render.addDetails(data)
                  
                })
})


formHandler.backAction(function(text){
  $('#btn_back').removeClass('active');
  return search.getAllVideos(text,20)
                .then(data => {
                  render.addRow(data)
                })
})