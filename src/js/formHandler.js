import $ from 'jquery';

class FormHandler{
  constructor(formSelector, inputSelector,backBtn) {
    this.$form = $(formSelector);
    this.$field = $(inputSelector);
    this.$btn = $(backBtn)
  }
  formSubmit(cb){
    this.$form.on('submit', e => {
      e.preventDefault();
      const query = this.$field.val();
      cb(query);
    })
  }
  inputValue(field,cb){
    field.addEventListener('input', function(e){
      cb();
    })
  }
  backAction(cb){
    this.$btn.on('click', e => {
      e.preventDefault();
      const query = this.$field.val();
      cb(query);
    })
  }
}

export default FormHandler;