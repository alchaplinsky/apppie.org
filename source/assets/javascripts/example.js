function Example() {
  _this = this
  $('.code-sample').each(function(i, el){
    _this.buildSample(el);
  });
};

Example.prototype.buildSample = function(el){
  text = this.htmlToText($(el).html());
  $(el) .html("<pre><code>"+text+"</code></pre>");
  return true;
}

Example.prototype.htmlToText = function(html) {
  text = html.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return text;
};
