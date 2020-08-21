import $ from 'jquery';
import FormHandler from './formHandler';
import VideoSearch from './videoSearch';


let formSearch = document.getElementById('formSearch');
let input_search = document.getElementById('inputSearch');
const API_KEY = 'AIzaSyAAaRTRDYc93q5agWzuOe-rEvgBD83PXEM';

let search = new VideoSearch();
let formHandler = new FormHandler(formSearch,input_search);

formHandler.formSubmit(formSearch,function(e){
  let text = input_search.value;
  console.log(text)
  if(text){
    search.videoSearch(API_KEY,text,20);
  }
});

//formHandler.inputValue(input_search);

