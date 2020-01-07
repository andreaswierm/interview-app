window._ = function(elementTag, attributes, children) {
  children = children || [];
  attributes = attributes || {};

  var element = this.document.createElement(elementTag);

  for (var attributeName in attributes) {
    element.setAttribute(attributeName, attributes[attributeName]);
  }

  for (var i = 0; children.length > i; i++) {
    var childrenItem = children[i];

    if (typeof childrenItem === 'string') {
      element.innerHTML = childrenItem
    } else {
      element.appendChild(childrenItem);
    }
  }

  return element;
}
