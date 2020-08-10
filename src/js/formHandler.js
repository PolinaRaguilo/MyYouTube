class FormHandler{
  constructor(form, field, btn) {
    this.form = form;
    this.field = field;
    this.btn = btn;
  }
  addInputValue(field,btn){
    btn.addEventListener('click', function(e){
      e.preventDefault();
      let text = field.value;
      console.log(text)
      return text;
    })
  }
  value(field){
    field.addEventListener('сhange',function(){
      let text = field.value;
      console.log(text)
    })
    
  }
}

export default FormHandler;