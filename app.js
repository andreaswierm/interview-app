(function() {
  var movieListContainerId = 'movieListContainer';

  window.state = {
    term: '',
    isLoading: true,
    movies: []
  }

  window.setState = function(state) {
    const newState = Object.assign({}, window.state, state);
    const oldState = Object.assign({}, window.state);

    window.state = newState;

    if (oldState.term !== newState.term) {
      fetchMovieList().then(function(movies) {
        setState({
          isLoading: false,
          movies: movies,
        });
      });
    }

    if (oldState.movies !== newState.movies) {
      var movieListContainer = document.getElementById(movieListContainerId);

      movieListContainer.innerHTML = '';
      movieListContainer.appendChild(movieListComponent())
    }
  }

  function fetchMovieList() {
    var termEncoded = encodeURIComponent(window.state.term);

    var url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=319b4314c0f718ec58f56921666a81dc';

    if (termEncoded.length) {
      url = 'https://api.themoviedb.org/3/search/movie?api_key=319b4314c0f718ec58f56921666a81dc&language=en-US&page=1&include_adult=false&query=' + termEncoded;
    }

    return fetch(url, {
      method: 'GET'
    }).then(function(response) {
      return response.json();
    }).then(function(response) {
      return response.results;
    })
  }

  function init() {
    renderApp();

    setState({
      isLoading: true,
    });

    fetchMovieList().then(function(movies) {
      setState({
        isLoading: false,
        movies: movies,
      });
    });
  }

  function renderApp() {
    const app = _('div', {class: 'app-body'}, [
      searchBarComponent(),
      _('div', { id: movieListContainerId }, [
        movieListComponent(),
      ])
    ]);

    const appContainer = document.getElementById('app')

    appContainer.innerHTML = '';
    appContainer.appendChild(app);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
