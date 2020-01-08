(function() {
  window.searchBarComponent = function() {
    const input = _('input', {
      class: 'searchBar-input',
      placeholder: 'Search'
    });

    input.addEventListener('input', function(event) {
      window.setState({
        term: event.target.value
      })
    });

    return _('div', { class: 'searchBar' }, [
      input,
      _('select', { class: 'searchBar-select' }, [
        _('option', { value: 0 }, ['Most voted'])
      ])
    ])
  }
})();
