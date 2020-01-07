(function() {
  window.movieListComponent = function() {
    var movieList = [];

    for (var i = 0; window.state.movies.length > i; i++) {
      var movie = window.state.movies[i];

      movieList.push(_('p', {}, [movie.title]));
    }

    return _('div', { class: 'movieList' }, movieList);
  }
})();
