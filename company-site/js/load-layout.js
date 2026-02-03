(function () {
  var base = typeof window.PAGE_BASE !== "undefined" ? window.PAGE_BASE : "";
  var headerEl = document.getElementById("header-placeholder");
  var footerEl = document.getElementById("footer-placeholder");

  function replaceBase(html) {
    return html.replace(/\{\{BASE\}\}/g, base);
  }

  function inject(html, into) {
    if (!into) return;
    into.insertAdjacentHTML("afterend", html);
    into.parentNode.removeChild(into);
  }

  Promise.all([
    fetch(base + "partials/header.html").then(function (r) { return r.text(); }),
    fetch(base + "partials/footer.html").then(function (r) { return r.text(); })
  ]).then(function (results) {
    var headerHtml = replaceBase(results[0]);
    var footerHtml = replaceBase(results[1]);
    inject(headerHtml, headerEl);
    inject(footerHtml, footerEl);
    document.dispatchEvent(new CustomEvent("layoutReady"));
  }).catch(function (err) {
    console.error("Failed to load layout:", err);
    if (headerEl) headerEl.innerHTML = "<p class=\"muted\">导航加载失败</p>";
    if (footerEl) footerEl.innerHTML = "<p class=\"muted\">页脚加载失败</p>";
    document.dispatchEvent(new CustomEvent("layoutReady"));
  });
})();
