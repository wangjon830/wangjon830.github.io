
(function($) {
  "use strict"; // Start of use strict
  var date = new Date();
  document.getElementById("CCyear").innerHTML = "© " +  date.getFullYear() + " Jonathan Wang";
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {

        $('html, body').animate({
          scrollTop: (target.offset().top - 52)
        }, 1000, "easeInOutQuart");

        return false;
      }
    }

  });
           $('.navbar-pointer').each( function(i){
            var top_of_object = $(this).offset().top;
            var top_of_window = $(window).scrollTop();
            
            /* If the object is completely visible in the window, fade it in */
            if( top_of_window > top_of_object){ 
                    $('#navbar').addClass('navbar-side-sticky');
                    $('#navbar').removeClass('navbar-side-side');
            } else {
                    $('#navbar').addClass('navbar-side');
                    $('#navbar').removeClass('navbar-side-sticky');
            }
           });
          $(window).scroll(function() {
                   $('.navbar-pointer').each( function(i){
                    var top_of_object = $(this).offset().top;
                    var top_of_window = $(window).scrollTop();

                    /* If the object is completely visible in the window, fade it in */
                    if( top_of_window > top_of_object){ 
                            $('#navbar').addClass('navbar-side-sticky');
                            $('#navbar').removeClass('navbar-side-side');
                    } else {
                            $('#navbar').addClass('navbar-side');
                            $('#navbar').removeClass('navbar-side-sticky');
                    }
                   });
          });
  //Pagination tabs on Projects/Internship/Work
   $("#project-experience").click(function() {
    $("#project-experience").addClass('active')
    $("#project-work").removeClass('active');
   $("#project-projects").removeClass('active');   
    var x = document.getElementById("project-section-projects");
    var y = document.getElementById("project-section-experience");
    var z = document.getElementById("project-section-work");

        y.style.display = "block"; 
        z.style.display = "none";
       x.style.display = "none";

      setTimeout(runDelay,40);
    function runDelay(){
        var child1 = document.getElementById("child1");
        var child2 = document.getElementById("child2");
        var child3 = document.getElementById("child3");
        child2.classList.add("clicked");
       child3.classList.remove("clicked");
        child1.classList.remove("clicked");
    }
  });
  $("#project-work").click(function() {
    $("#project-work").addClass('active');
    $("#project-experience").removeClass('active');
   $("#project-projects").removeClass('active');
    var x = document.getElementById("project-section-projects");
    var y = document.getElementById("project-section-experience");
    var z = document.getElementById("project-section-work");

        y.style.display = "none"; 
        z.style.display = "block";
       x.style.display = "none";

       setTimeout(runDelay,40);
    function runDelay(){
        var child1 = document.getElementById("child1");
        var child2 = document.getElementById("child2");
        var child3 = document.getElementById("child3");
       child2.classList.remove("clicked");
       child3.classList.add("clicked");
        child1.classList.remove("clicked");
    }
  });
  $("#project-projects").click(function() {
   $("#project-projects").addClass('active');
    $("#project-work").removeClass('active');
    $("#project-experience").removeClass('active');
    var x = document.getElementById("project-section-projects");
    var y = document.getElementById("project-section-experience");
    var z = document.getElementById("project-section-work");

        x.style.display = "block"; 
        y.style.display = "none"; 
        z.style.display = "none";

       setTimeout(runDelay,40);
    function runDelay(){
        var child1 = document.getElementById("child1");
        var child2 = document.getElementById("child2");
        var child3 = document.getElementById("child3");
       child2.classList.remove("clicked");
       child3.classList.remove("clicked");
        child1.classList.add("clicked");
    }
  });
    /* Every time the window is scrolled check hideme ... */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1','bottom':'0px'},0);

            }
            
        }); 
        /* Check the location of each desired element */
        $('.slideInPagination').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},2000);
                $(this).addClass("slideIn");
                    
            }
            
        }); 
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1','bottom':'0px'},700);

            }
            
        }); 
            /* Check the location of each desired element */
        $('.slideInPagination').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},2000);
                $(this).addClass("slideIn");
                    
            }
            
        }); 
    });
    /* Change Navbar Active On scroll ... */
        $('#header').each( function(i){
            var bottom_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > bottom_of_object ){
                $('.nav-home').addClass("nav-active");
                $('.nav-about').removeClass("nav-active");
                $('.nav-experience').removeClass("nav-active");
                $('.nav-contact').removeClass("nav-active");
            }
            
        }); 
        $('#about').each( function(i){
            var bottom_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > bottom_of_object ){
                $('.nav-about').addClass("nav-active");
                $('.nav-home').removeClass("nav-active");
                $('.nav-experience').removeClass("nav-active");
                $('.nav-contact').removeClass("nav-active");
            }
            
        });
        $('#projects').each( function(i){
            var bottom_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > bottom_of_object ){
                $('.nav-experience').addClass("nav-active");
                $('.nav-about').removeClass("nav-active");
                $('.nav-home').removeClass("nav-active");
                $('.nav-contact').removeClass("nav-active");
            }
            
        });
        $('#contact').each( function(i){
            var bottom_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > bottom_of_object ){
                $('.nav-contact').addClass("nav-active");
                $('.nav-about').removeClass("nav-active");
                $('.nav-experience').removeClass("nav-active");
                $('.nav-home').removeClass("nav-active");
            }
            
        });
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('#header').each( function(i){
            var bottom_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > bottom_of_object ){
                $('.nav-home').addClass("nav-active");
                $('.nav-about').removeClass("nav-active");
                $('.nav-experience').removeClass("nav-active");
                $('.nav-contact').removeClass("nav-active");
            }
            
        }); 
        $('#about').each( function(i){
            var bottom_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > bottom_of_object ){
                $('.nav-about').addClass("nav-active");
                $('.nav-home').removeClass("nav-active");
                $('.nav-experience').removeClass("nav-active");
                $('.nav-contact').removeClass("nav-active");
            }
            
        });
        $('#projects').each( function(i){
            var bottom_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > bottom_of_object ){
                $('.nav-experience').addClass("nav-active");
                $('.nav-about').removeClass("nav-active");
                $('.nav-home').removeClass("nav-active");
                $('.nav-contact').removeClass("nav-active");
            }
            
        });
        $('#contact').each( function(i){
            var bottom_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > bottom_of_object ){
                $('.nav-contact').addClass("nav-active");
                $('.nav-about').removeClass("nav-active");
                $('.nav-experience').removeClass("nav-active");
                $('.nav-home').removeClass("nav-active");
            }
            
        });
    });
    
  $('.child').click(function(){
    $(this).addClass("clicked");
  });

})(jQuery); // End of use strict

