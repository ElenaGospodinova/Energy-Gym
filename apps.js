/*HEADER */
(function($) { 
  $(function() { 

    //  open and close nav 
    $('#navbar-toggle').click(function() {
      $('nav ul').slideToggle();
    });


    // Hamburger toggle
    $('#navbar-toggle').on('click', function() {
      this.classList.toggle('active');
    });


    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.navbar-dropdown').slideToggle("slow");

      // Close dropdown when select another dropdown
      $('.navbar-dropdown').not($(this).siblings()).hide("slow");
      e.stopPropagation();
    });


    // Click outside the dropdown will remove the dropdown class
    $('html').click(function() {
      $('.navbar-dropdown').hide();
    });
  }); 
})(jQuery); 





// $(document).ready(function() {
//   var clickhamb = 0;

//   $("#hamburger").click(function() {
//     clickhamb = 1;
//     var header = $("#myTopnav");
//     if (header.hasClass("responsive")) {
//       $(".navlist").css("transform", "translateX(-500px)");
//       header.removeClass("responsive");
//       $(".navlist a:not(.icon)").css("display", "none");
//     } else {
//       header.addClass("responsive");
//       $(".navlist").css("display", "block");
//       $(".navlist").css("transform", "translateX(0)");
//     }
//   });

//   $(window).on('resize', function() {
//     if ($(window).width() > 600 && clickhamb == 1) {
//       $("#myTopnav").removeClass("responsive");
//       $(".navlist a:not(.icon)").css("display", "block");
//       $(".navlist").css("transform", "translateX(0)");
//     }
//   });
// });


//about page



$(document).ready(function() {
  $('.faq-item .question').click(function() {
    $(this).siblings('.answer').slideToggle();
  });
});



$(document).ready(function() {
    var clickhamb = 0;
  
    $("#hamburger").click(function() {
      clickhamb = 1;
      var header = $("#myTopnav");
      if (header.hasClass("responsive")) {
        $(".navlist a:not(.icon)").css("transform", "translateX(600px)");
        header.height(48);
        setTimeout(function() {
          header.removeClass("responsive");
          header.height(48);
          $(".navlist a:not(.icon)").css("display", "none");
        }, 1600);
      } else {
        header.addClass("responsive");
        $("header").height((opcionesnav + 1) * 48);
        $(".navlist a:not(.icon)").css("display", "block");
        setTimeout(function() {
          $(".navlist a:not(.icon)").css("transform", "translateX(0px)");
        }, 50);
      }
    });
  
    $(window).on('resize', function() {
      if ($(window).width() > 600 && clickhamb == 1) {
        $("#myTopnav").height(48);
        $(".navlist a:not(.icon)").css("display", "block");
        setTimeout(function() {
          $(".navlist a:not(.icon)").css("transform", "translateX(0px)");
        }, 500);
      }
    });
  });
  