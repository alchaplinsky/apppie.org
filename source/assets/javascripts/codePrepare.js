codePrepare = function(el) {
  if (!(el.is("[class*='language-']"))) el.addClass("language-markup");
  $(el, "pre").html(codeClean(el.html()));
}
