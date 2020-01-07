(function() {
  window.movieListComponent = function() {
    var movieList = [];

    for (var i = 0; window.state.movies.length > i; i++) {
      var movie = window.state.movies[i];

      var releaseDate = new Date(movie.release_date);

      if (i !== 0) {
        movieList.push(_('hr', { class: 'movieList-item-divider' }, []));
      }

      movieList.push(
        _('div', { class: 'movieList-item' }, [
          _('img', {
            class: 'movieList-item-posterImg',
            src: 'http://image.tmdb.org/t/p/w185/' + movie.poster_path,
          }),
          _('div', { class: 'movieList-item-itemText' }, [
            _('p', { class: 'movieList-item-itemText-title' }, [movie.original_title]),
            _('p', { class: 'movieList-item-itemText-date' }, [
              [releaseDate.getDate() + 1, releaseDate.getMonth() + 1, releaseDate.getFullYear()].join('/')
            ]),
          ])
        ])
      );
    }

    return _('div', { class: 'movieList' }, movieList);
  }
})();
