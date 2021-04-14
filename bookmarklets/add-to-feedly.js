javascript: (function () {
  var linkElementCollection = document.getElementsByTagName("link");
  var potentialMatches = [];
  Array.from(linkElementCollection).forEach((linkElement) => {
    if (linkElement.rel == "alternate") {
      typeAttribute = linkElement.getAttribute("type");
      if (typeAttribute?.match(/application\/rss\+xml|atom|text\/xml/)) {
        potentialMatches.push(linkElement.href);
      }
    }
  });
  if (potentialMatches.length > 1) {
    potentialMatches.forEach((potentialMatch) =>
      window.open(
        "https://feedly.com/i/discover/sources/search/feed/" +
          encodeURIComponent(potentialMatch),
        "_blank"
      )
    );
  } else if (potentialMatches.length == 1) {
    void (location.href =
      "https://feedly.com/i/discover/sources/search/feed/" +
      encodeURIComponent(potentialMatches[0]));
  } else {
    void (location.href =
      "https://feedly.com/i/discover/sources/search/feed/" +
      encodeURIComponent(location.host));
  }
})();
