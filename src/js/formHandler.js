class FormHandler{
  constructor(form, field) {
    this.form = form;
    this.field = field;
  }
  formSubmit(form,cb){
    form.addEventListener('submit', function(e){
       e.preventDefault();
      cb();
    })
  }
  inputValue(field,cb){
    field.addEventListener('input', function(e){
      cb();
    })
  }
  bigVideo(a,cb){
    a.addEventListener('click',function(e){
      cb();
    })
  }

}

export default FormHandler;