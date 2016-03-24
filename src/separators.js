'use strict';

function thousands_separators(n) {
  // x = x.toString();
  // var pattern = /(-?\d+)(\d{3})/;
  // while (pattern.test(x))
  //     x = x.replace(pattern, "$1,$2");
  var parts=n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "c" + parts[1] : "");
}

module.exports = thousands_separators;
