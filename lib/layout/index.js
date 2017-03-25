import View from 'ampersand-view';
import template from './template.dot';
import ListView from 'list-view';
import SearchInput from 'search-input';

export default View.extend({

  template,

  subviews: {
    listView: {
      hook: 'container-list-view',
      constructor: ListView,
    },
    searchInput: {
      hook: 'container-search-input',
      constructor: SearchInput,
    },
  },

});
