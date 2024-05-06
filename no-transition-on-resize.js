// From: https://stackoverflow.com/questions/38526764/disable-css-transitions-on-window-resize


(function() {
  const classes = document.body.classList;
  let timer = 0;
  window.addEventListener('resize', () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    else {
      classes.add('stop-transitions');
    }

    timer = setTimeout(() => {
      classes.remove('stop-transitions');
      timer = null;
    }, 100);
  });
})();


