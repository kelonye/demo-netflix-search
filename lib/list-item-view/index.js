import View from 'ampersand-view';
import template from './template.dot';

export default View.extend({

  template,

  bindings: {

    'model.show_title': {
      type: 'text',
      hook: 'show_title'
    },

    'model.release_year': {
      type: 'text',
      hook: 'release_year'
    },

    'model.summary': {
      type: 'text',
      hook: 'summary'
    },

  },

});
