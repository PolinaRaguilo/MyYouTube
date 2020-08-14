class FormHandler{
  constructor(form, field, btn) {
    this.form = form;
    this.field = field;
  }
  addInputValue(form,field){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      let text = field.value;
      console.log(text)
      return text;
    })
  }
}

export default FormHandler;