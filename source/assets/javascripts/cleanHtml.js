htmlClean = function(html) {
  var dirtyHtmlArray, leadingSpaces, line, linesArray, _i, _len;
  html = html.replace(/(\r\n|\n|\r)/, '');
  leadingSpaces = html.substr(0, html.indexOf("<"));
  dirtyHtmlArray = html.split(/(\r\n|\n|\r)/g);
  linesArray = [];
  for (_i = 0, _len = dirtyHtmlArray.length; _i < _len; _i++) {
    line = dirtyHtmlArray[_i];
    linesArray.push(line.replace(leadingSpaces, ''));
  }
  return linesArray.join('').trim();
};
