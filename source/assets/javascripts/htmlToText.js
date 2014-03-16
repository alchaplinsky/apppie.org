htmlToText = function(el) {
  html = el.html().replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return html;
};
