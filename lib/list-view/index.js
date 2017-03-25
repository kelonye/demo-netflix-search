import View from 'ampersand-view';
import template from './template.dot';
import store from 'redux/store';

export default View.extend({

  template,

  props: {
    movies: 'array',
    searchTerm: 'string',
    isSearching: 'boolean',
  },

  initialize(){
    store.subscribe(()=>{
      const { movies, searchTerm, isSearching, searchError } = store.getState();
      this.movies = movies;
      this.searchTerm = searchTerm;
      this.isSearching = isSearching;
      this.searchError = searchError;
      this.render();
    });
  },

});
