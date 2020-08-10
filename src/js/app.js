const { default: FormHandler } = require("./formHandler");

let btn_search = document.getElementById('btnSearch');
let input_search = document.getElementById('inputSearch');

let formHandler = new FormHandler(input_search,btn_search);

formHandler.addInputValue(input_search,btn_search)

//formHandler.value(input_search);