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
    isSearching: 'boolean',
    searchError: 'string',
  },

  initialize(){

    this.movies = new Collection([
      new Movie({show_title: 'Yo'})
    ]);

    store.subscribe(()=>{
      const { movies, searchTerm, isSearching, searchError } = store.getState();
      this.movies.set(movies.map((movie) => new Movie(movie)));
      // this.searchTerm = searchTerm;
      // this.isSearching = isSearching;
      // this.searchError = searchError;
    });
  },

  render(){
    this.renderWithTemplate();
    this.renderCollection(this.movies, ListItemView, this.queryByHook('movies'), {});
  },

});
