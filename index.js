function safeInnerHTML(node, html) {
  var parsed = new DOMParser().parseFromString(html, 'text/html').body;
  node.innerHTML = ''
  while (parsed.hasChildNodes()) {
    node.appendChild(parsed.firstChild);
  }
}

module.exports = safeInnerHTML
