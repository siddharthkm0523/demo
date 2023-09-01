
$('.banner-slider').slick({
    slidesToShow:1,
    slidesToScroll: 1,
    autoplay:true,
    fade:true,
    infinite: true,
    arrows:false,
    pauseOnHover:false,
     dots:false,
    navFor:'.banner-slider-sub',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:1,
          slidesToScroll:1,         
          dots: false,
        }
      },
    ]
});

$('.banner-slider-sub').slick({
    slidesToShow:1,
    slidesToScroll: 1,
    autoplay:true,
    infinite: true,
    dots:false,
    fade:true,
    pauseOnHover:false,
    arrows:false,
    navFor:'.banner-slider',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:1,
          slidesToScroll:1,         
          dots: false,
        }
      },
    ]
});

$(function(){
    $('nav ul li').click(function(){
        $('ul li.active').removeClass('active');
        $(this).addClass('active');
    });
});

$('.galler-slick').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots:false,
  fade:true,
  asNavFor: '.galler-sub-slick',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow:1,
        slidesToScroll:1,         
        
      }
    },
  ]
});
$('.galler-sub-slick').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.galler-slick',
  dots: false,
  // variableHeight:true,
  arrows:false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow:4,
        slidesToScroll:1,         
        
      }
    },
  ]
});

// $(document).ready(function () {
//   $(".accordion-items").on("click", ".accordion-heading", function () {
//   $(this).toggleClass("active").next().slideToggle();
//   $(".accordion-content").not($(this).next()).slideUp(300);
//   $(this).siblings().removeClass("active");
//   });
// });


// when accordion altered use this script

$(document).ready(function() {
  $(".accordion-heading").click(function() {
    // Toggle the active class on the clicked heading
    $(this).toggleClass("active");

    // Find the corresponding content and slide it up or down
    var accordionContent = $(this).next(".accordion-content");
    accordionContent.slideToggle();

    // Slide up any other open content and remove the active class
    $(".accordion-content").not(accordionContent).slideUp();
    $(".accordion-heading").not($(this)).removeClass("active");
  });
});

// when accordion altered use this script


$('.hideorshow').click(function() {
  $('#hide').slideToggle(3000);
});


$(".btn-style-one").click(function () {
  var form = $("#eform");
  form.validate({
    errorElement: 'span',
    errorClass: 'help-block',
    highlight: function (element, errorClass, validClass) {
      $(element).closest('.form-group').addClass("has-error");

    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).closest('.form-group').removeClass("has-error");
      $(element).closest('.form-group').addClass("has-success");
    },
    rules: {
      name: {
        required:true,
        minlength:3,
      },
      
      email: {
        required: true,
      },
      phone: {
        required: true,
      },

      intrestedin:{
        required:true,
      }
    },
    messages: {
      name: {
        required: 'Please enter your name.',
        minlength: 'Your name must be at least 3 characters long.',
      },
      
      email: {
        required: "Please enter e-mail",
      },
      phone:  {
        required: "Please enter Number",
      },
      select: {
        required: "Please select",
      },
    },
    
  
  });
});

$(".btn-style-one2").click(function () {
  var form = $("#eform2");
  form.validate({
    errorElement: 'span',
    errorClass: 'help-block',
    highlight: function (element, errorClass, validClass) {
      $(element).closest('.form-group').addClass("has-error");

    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).closest('.form-group').removeClass("has-error");
      $(element).closest('.form-group').addClass("has-success");
    },
    rules: {
      name: {
        required:true,
        minlength:3,
      },
      
      email: {
        required: true,
      },
      phone: {
        required: true,
      },

      intrestedin:{
        required:true,
      }
    },
    messages: {
      name: {
        required: 'Please enter your name.',
        minlength: 'Your name must be at least 3 characters long.',
      },
      
      email: {
        required: "Please enter e-mail",
      },
      phone:  {
        required: "Please enter Number",
      },
      select: {
        required: "Please select",
      },
    },
    
  
  });
});

$(".btn-style-one3").click(function () {
  var form = $("#eform3");
  form.validate({
    errorElement: 'span',
    errorClass: 'help-block',
    highlight: function (element, errorClass, validClass) {
      $(element).closest('.form-group').addClass("has-error");

    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).closest('.form-group').removeClass("has-error");
      $(element).closest('.form-group').addClass("has-success");
    },
    rules: {
      name: {
        required:true,
        minlength:3,
      },
      
      email: {
        required: true,
      },
      phone: {
        required: true,
      },

      intrestedin:{
        required:true,
      }
    },
    messages: {
      name: {
        required: 'Please enter your name.',
        minlength: 'Your name must be at least 3 characters long.',
      },
      
      email: {
        required: "Please enter e-mail",
      },
      phone:  {
        required: "Please enter Number",
      },
      select: {
        required: "Please select",
      },
    },
    
  
  });
});


// first letter space restriction
$("input").on("keypress", function(e) {
  if (e.which === 32 && !this.value.length)
      e.preventDefault();
});

// First name special character restrictions
$(".name").keypress(function(event) {
var character = String.fromCharCode(event.keyCode);
return isValid(character);     
}); 
function isValid(str) {
return !/[~`@@!#$%\^&*()+=\-\[\]\\';,/{}|\\":<>\? ^a-zA-Z ]/g.test(str);
}

// special character restriction for emails
$(".email").keypress(function(event) {
var character = String.fromCharCode(event.keyCode);
return isValid(character);     
});
function isValid(str) {
return !/[~`!#$%\^&*()+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
}

//alphabet restriction for firstname
function restrictAlphabets(e) {
  var x = e.which || e.keycode;
  if ((x >= 48 && x <= 57))
      return true;
  else
      return false;
}


$(document).ready(function() {
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    },1000);
  });
});

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 20) {
      $("header").addClass("navbar-reduce");
  } else {
      $("header").removeClass("navbar-reduce");
  }
});

$(".nav-link").click(function(){
  $(".navbar-toggler").addClass("collapsed");
  $(".navbar-collapse").removeClass("show");
});


!(function (e) {
  e(".tabs-box").length &&
      e(".tabs-box .tab-buttons .tab-btn").click( function (a) {
          a.preventDefault();
          var i = e(e(this).attr("data-tab"));
          if (e(i).is(":visible")) return !1;
          i.parents(".tabs-box").find(".tab-buttons").find(".tab-btn").removeClass("active-btn"),
              e(this).addClass("active-btn"),
              i.parents(".tabs-box").find(".tabs-content").find(".tab").fadeOut(0),
              i.parents(".tabs-box").find(".tabs-content").find(".tab").removeClass("active-tab animated fadeIn"),
              e(i).fadeIn(300),
              e(i).addClass("active-tab animated fadeIn");
      });
})(jQuery);





