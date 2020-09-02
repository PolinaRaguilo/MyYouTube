import $ from 'jquery';

class FormHandler{
  constructor(formSelector, inputSelector) {
    this.$form = $(formSelector);
    this.$field = $(inputSelector);
  }

  formSubmit(callback){
    this.$form.on('submit', e => {
      e.preventDefault();
      const query = this.$field.val();
      callback(query);
    })
  }

  inputValue(field,cb){
    field.addEventListener('input', function(e) {
      cb();
    })
  }
}

export default FormHandler;
