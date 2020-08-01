(function(){

  var doc = document.documentElement;
  var w = window;

  var prevScroll = w.scrollY || doc.scrollTop;
  var curScroll;
  var direction = 0;
  var prevDirection = 0;

  var header = document.getElementById('site-header');
  console.log (header);
  var checkScroll = function() {

    /*
    ** Find the direction of scroll
    ** 0 - initial, 1 - up, 2 - down
    */

    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) { 
      //scrolled up
      direction = 2;
    }
    else if (curScroll < prevScroll) { 
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }
    if (window.scrollY <= 48) {
      header.classList.remove('bg');
    }
    if (window.scrollY >= 120) {
      header.classList.add('bg');
    }
    prevScroll = curScroll;
  };

  var toggleHeader = function(direction, curScroll) {
    if (direction === 2 && curScroll > 48) { 
      header.classList.add('hide');
      prevDirection = direction;
    }
    else if (direction === 1) {
      header.classList.remove('hide');
      prevDirection = direction;
    }
  };
  
  window.addEventListener('scroll', checkScroll);





  document.querySelector('.js-menu').addEventListener('click', function(e) {
    if (document.querySelector('.header ').classList.contains('open')) {
      document.querySelector('.header').classList.remove('open')
    } else {
      document.querySelector('.header').className += ' open'
    }
    if (document.querySelector('.bg ').classList.contains('open')) {
      document.querySelector('.bg').classList.remove('open')
    } else {
      document.querySelector('.bg').className += ' open'
    }
  });

})();