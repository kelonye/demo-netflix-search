const defaultState = {
  movies: [],
  searchTerm: '',
  isSearching: false,
  searchError: '',
};

export default function(state = defaultState, action){

  let {
    movies,
    searchTerm,
    isSearching,
    searchError
  } = state;

  switch (action.type){

    case 'START_SEARCH':
      movies = [];
      searchTerm = action.searchTerm;
      isSearching = true;
      searchError = '';
      break;

    case 'SUCCEED_SEARCH':
      movies = action.movies;
      isSearching = false;
      break;

    case 'ERROR_SEARCH':
      searchError = action.error;
      isSearching = false;
      break;


  }

  return { movies, searchTerm, isSearching, searchError };

}
