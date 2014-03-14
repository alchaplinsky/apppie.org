codeClean = function(code) {
  var dirtyCodeArray, leadingSpaces, line, linesArray, _i, _len;
  code = code.replace(/(\r\n|\n|\r)/, '');
  leadingSpaces = code.substr(0, code.search(/\S/));
  dirtyCodeArray = code.split(/(\r\n|\n|\r)/g);
  linesArray = [];
  for (_i = 0, _len = dirtyCodeArray.length; _i < _len; _i++) {
    line = dirtyCodeArray[_i];
    linesArray.push(line.replace(leadingSpaces, ''));
  }
  return linesArray.join('').trim();
};
