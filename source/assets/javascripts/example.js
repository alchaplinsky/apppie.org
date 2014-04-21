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

Example = function(component) {
  this.component = component;
  this.buildSample();
};

Example.prototype.buildSample = function(){
  exampleEl = $(this.component).find('.example');
  codeEl = $(this.component).find('pre code');
  code = this.htmlToText($(exampleEl).html());
  $(codeEl).html(codeClean(code));
  return true;
};

Example.prototype.htmlToText = function(html) {
  text = html.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return text;
};
