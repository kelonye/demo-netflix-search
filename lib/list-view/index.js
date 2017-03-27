import View from 'ampersand-view';
import template from './template.dot';
import store from 'redux/store';
import ListItemView from 'list-item-view';
import Collection from 'ampersand-collection';
import Model from 'ampersand-model';

const Movie = Model.extend({
  props: {
    show_title: 'string',
    release_year: 'string',
    summary: 'string',
  },
});

export default View.extend({

  template,

  props: {
    // movies: 'array',
    searchTerm: 'string',
    searchError: 'string',
    isSearching: 'boolean',
  },

  bindings: {
    searchError: {
      type: 'text',
      hook: 'msg-search-error',
    },
    hasSearchError: {
      type: 'booleanClass',
      hook: 'msg-search-error',
      name: 'visible',
      invert: true,
    },
    searchTerm: {
      type: 'text',
      hook: 'msg-search-term-text',
    },
    isSearching: {
      type: 'booleanClass',
      hook: 'msg-search-term',
      name: 'visible',
    },
  },

  initialize(){

    this.movies = new Collection();

    this.isSearching = false;

    this.hasSearchError = false;

    store.subscribe(()=>{
      const { movies, searchTerm, isSearching, searchError } = store.getState();
      this.movies.set(movies.map((movie) => new Movie(movie)));
      this.searchTerm = searchTerm;
      this.isSearching = isSearching;
      this.searchError = searchError;
      this.hasSearchError = !!searchError;
    });
  },

  render(){
    this.renderWithTemplate();
    this.renderCollection(this.movies, ListItemView, this.queryByHook('movies'), {});
  },

});
