// Device and Helper Utilities
window.isiOS = false;
if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
  window.isiOS = true;
}
window.isiOSVersion = '';
if (window.isiOS) {
  var version = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
  if (version !== null) {
    window.isiOSVersion = [parseInt(version[1], 10), parseInt(version[2], 10), parseInt(version[3] || 0, 10)];
  }
}

function t_throttle(fn, threshhold, scope) {
  var last;
  var deferTimer;
  threshhold || (threshhold = 250);
  return function () {
    var context = scope || this;
    var now = +new Date();
    var args = arguments;
    if (last && now < last + threshhold) {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}
