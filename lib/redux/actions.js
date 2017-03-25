import store from 'redux/store';

export function search(searchTerm = ''){

  searchTerm = searchTerm.trim();
  if (!searchTerm) return;

  const { isSearching } = store.getState();
  if (isSearching) return;

  store.dispatch({
    type: 'START_SEARCH',
    searchTerm,
  });

  fetch(`http://netflixroulette.net/api/api.php?title=${searchTerm}`)
    .then((res)=>{
      return res.json();
    })
    .then((res)=>{
      if (res.errorcode){
        store.dispatch({
          type: 'ERROR_SEARCH',
          error: res.message,
        });
      } else {
        store.dispatch({
          type: 'SUCCEED_SEARCH',
          movies: [res],
        });
      }
    });

}
