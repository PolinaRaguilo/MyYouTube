import $ from 'jquery';
import FormHandler from './formHandler';
import VideoSearch from './videoSearch';
import Render from './render';



let formSearch = document.getElementById('formSearch');
let inputSearch = document.getElementById('inputSearch');
let divVideo = document.getElementById('videoList');


const API_KEY = 'AIzaSyAAaRTRDYc93q5agWzuOe-rEvgBD83PXEM';

let search = new VideoSearch(API_KEY);
let formHandler = new FormHandler(formSearch, inputSearch);
let render = new Render(divVideo)


formHandler.formSubmit(function(text){
   return  search.getAllVideos(text, 20)
            .then(data =>{
             //console.log(data)
              render.addRow(data)
            })

});

render.addClickOnVideo(function(id) {
  return search.getVideoById(id)
                .then(data => {
                  console.log(data)
                  render.addDetails(data)
                })
})


