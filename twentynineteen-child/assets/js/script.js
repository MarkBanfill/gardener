jQuery(document).ready(function($) {

  $('#slideshow-container').css( "display", "block" );
  $('.loading-spinner').remove();
  $('.contactform').addClass('raised');
  $('.services-list .wp-block-column, body.parent-pageid-143 .wp-block-image figure, body.page-id-825 .wp-block-image figure, body.page-id-825 .blocks-gallery-item > figure').addClass('raised');

  // Add AOS
  $('blockquote').attr('data-aos', 'fade-left');
  $('.our-services .blocks-gallery-item').attr('data-aos', 'fade-up');


  //Initialise Animate On Scroll (http://michalsnik.github.io/aos/)
  AOS.init({
    offset: 0,
    duration: 500,
    easing: 'ease-out-back',
    delay: 350,
    once: false
  });

  // Read more buttons
  $(".sa_slide_link_icon").append("Read more");

  // Shrinking header
  $(window).scroll(function(){
    var scrollHeight = $(window).height();
  	var scrollPosition = $(window).scrollTop();
  	if (scrollPosition > 1) {
      $(".site-header").addClass("shrunk");
  	}
    else {
      $(".site-header").removeClass("shrunk");
    }
  });

  // Smooth scrolling down arrow
  var scrollLink = $('.scrolldown');
  var contentpos = $(window).height() - 100;
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: contentpos
    }, 800 );
  });

  var global = document.getElementById('typetura') || document.body;
  var el = document.querySelectorAll('.typetura');

  // Initialize width variable
  typeturaInit(global, el);

  // Typetura fluid typesetting
  function typeturaInit(global, el) {
    // Query the width of the typetura container
    function typetura() {
      document.body.style.setProperty('--tt-width', global.offsetWidth);
      el.forEach(element => {
        element.style.setProperty('--tt-bind', element.offsetWidth);
      });
    }
    typetura();

    // On resize recalculate width
    window.addEventListener('resize', typetura);

    // Create a stylesheet for typetura's custom properties
    var stylesheet = document.createElement('style');
    // Typetura's custom properties
    stylesheet.innerHTML =
      'body{--tt-ease:linear;--tt-max:1600;--tt-bind:var(--tt-width);}*{--tt-key:none;animation:var(--tt-key) 1s var(--tt-ease) 1 calc(-1s*var(--tt-bind)/var(--tt-max)) paused}';
    // Write typetura proprties to the top of the document head to avoid cascade conflicts
    document.head.insertBefore(stylesheet, document.head.firstChild);
  }

  // Slideshow first page animations
  $('#slideshow > div h3, #slideshow > div p:first-of-type, #slideshow > div p.readmore').hide();
  $('#slideshow > div h3').fadeIn(500,function(){
    $('#slideshow > div p:first-of-type').fadeIn(500,function(){
      $('#slideshow > div p.readmore').fadeIn(500);
    });
  });

  // About us animations
  $('.about-us li:nth-child(1)').fadeTo(400,1,function(){
    $('.about-us li:nth-child(2)').fadeTo(400,1,function(){
      $('.about-us li:nth-child(3)').fadeTo(400,1,function(){
        $('.about-us li:nth-child(4)').fadeTo(400,1);
      });
    });
  });

  // Individual service page animations
  $('.parent-pageid-143 article .entry-content p:nth-of-type(2)').fadeTo(400,1,function(){
    $('.parent-pageid-143 article .entry-content p:nth-of-type(3)').fadeTo(400,1,function(){
      $('.parent-pageid-143 article .entry-content p:nth-of-type(4)').fadeTo(400,1,function(){
        $('.parent-pageid-143 article .entry-content p:nth-of-type(5)').fadeTo(400,1,function(){
          $('.parent-pageid-143 article .entry-content p:nth-of-type(6)').fadeTo(400,1)
        });
      });
    });
  });

  // Slideshow
  $("#slideshow > div:gt(0)").hide();

  function showNextSlide() {
    $('#slideshow > div:first')
      .fadeOut(2000)
      .next()
      .fadeIn(2000)
      .end()
      .appendTo('#slideshow');
    $('#slideshow > div:first h3, #slideshow > div:first p').hide();
    $('#slideshow > div:first h3').delay(2000).fadeIn(500,function(){
      $('#slideshow > div:first p:first-of-type').fadeIn(500,function(){
        $('#slideshow > div:first p.readmore').fadeIn(500);
      });
    });
  };

  var interval;
  interval = setInterval(showNextSlide, 10000);

  $(".slideprev").click(function slidePrev() {
    clearInterval(interval);
    $('#slideshow > div:last').insertBefore('#slideshow > div:first');
    $('#slideshow > div:nth-of-type(2)').fadeOut(2000)
    $('#slideshow > div:first h3, #slideshow > div:first p').hide();
    $('#slideshow > div:first h3').delay(2000).fadeIn(500,function(){
      $('#slideshow > div:first p:first-of-type').fadeIn(500,function(){
        $('#slideshow > div:first p.readmore').fadeIn(500);
      });
    });
    $('#slideshow > div:first').fadeIn(2000)
    interval = setInterval(showNextSlide, 10000);
  });

  $(".slidenext").click(function slideNext() {
    clearInterval(interval);
    showNextSlide();
    interval = setInterval(showNextSlide, 10000);
  });

});
