import View from 'ampersand-view';
import template from './template.dot';
import { search } from 'redux/actions';

export default View.extend({

  template,

  props: {
    value: 'string',
  },

  events: {
    'input [data-hook=input]': 'onValueChange',
    'submit [data-hook=form]': 'onSearch',
  },

  onValueChange(event) {
    this.value = event.target.value;
  },

  onSearch(event){
    event.preventDefault();
    search(this.value);
  },

});
