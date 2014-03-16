makeComponent = function(el) {
  var code = el.find('pre code');
  var example = el.find('div.example');
  if (!code.length) {
    example.before("<pre><code></code></pre>")
    code = el.find('pre code');
  }
  $(code).html(htmlToText(example));
}