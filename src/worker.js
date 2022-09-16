/** @format */

self.onmessage = function (e) {
  if (e.data !== undefined) {
    var total = e.data + "world";
    self.postMessage(total);
  }
};
