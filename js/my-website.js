
(function ($) {
    "use strict"; // Start of use strict
    var date = new Date();
    document.getElementById("CCyear").innerHTML = "© " + date.getFullYear() + " Jonathan Wang";
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
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
    $('.navbar-pointer').each(function (i) {
        var top_of_object = $(this).offset().top;
        var top_of_window = $(window).scrollTop();

        /* If the object is completely visible in the window, fade it in */
        if (top_of_window > top_of_object) {
            $('#navbar').addClass('navbar-side-sticky');
            $('#navbar').removeClass('navbar-side-side');
        } else {
            $('#navbar').addClass('navbar-side');
            $('#navbar').removeClass('navbar-side-sticky');
        }
    });
    $(window).scroll(function () {
        $('.navbar-pointer').each(function (i) {
            var top_of_object = $(this).offset().top;
            var top_of_window = $(window).scrollTop();

            /* If the object is completely visible in the window, fade it in */
            if (top_of_window > top_of_object) {
                $('#navbar').addClass('navbar-side-sticky');
                $('#navbar').removeClass('navbar-side-side');
            } else {
                $('#navbar').addClass('navbar-side');
                $('#navbar').removeClass('navbar-side-sticky');
            }
        });
    });
    //Pagination tabs on Projects/Internship/Work
    $("#project-work-past").click(function () {
        $("#project-work-past").addClass('active');
        $("#project-work-present").removeClass('active');

        var research_section = document.getElementById("project-section-research");
        var work_section = document.getElementById("project-section-work");

        research_section.style.display = "block";
        work_section.style.display = "none";

        $("#timeline-point-lfw").removeClass('grow-point');
        $("#timeline-point-amazonads").removeClass('grow-point');
        $("#timeline-point-amazonfire").removeClass('grow-point');
        $("#timeline-point-coa").addClass('grow-point');
        $("#timeline-point-winlab").addClass('grow-point');

        $("#timeline-lfw-cover").removeClass('fade-work');
        $("#timeline-amazonads-cover1").removeClass('fade-work');
        $("#timeline-amazonads-cover2").removeClass('fade-work');
        $("#timeline-amazonfire-cover1").removeClass('fade-work');
        $("#timeline-amazonfire-cover2").removeClass('fade-work');
        $("#timeline-coa-cover1").addClass('fade-work');
        $("#timeline-coa-cover2").addClass('fade-work');
        $("#timeline-winlab-cover1").addClass('fade-work');
        $("#timeline-winlab-cover2").addClass('fade-work');
    });
    $("#project-work-present").click(function () {
        $("#project-work-present").addClass('active');
        $("#project-work-past").removeClass('active');
        var research_section = document.getElementById("project-section-research");
        var work_section = document.getElementById("project-section-work");

        research_section.style.display = "none";
        work_section.style.display = "block";

        $("#timeline-point-lfw").addClass('grow-point');
        $("#timeline-point-amazonads").addClass('grow-point');
        $("#timeline-point-amazonfire").addClass('grow-point');
        $("#timeline-point-coa").removeClass('grow-point');
        $("#timeline-point-winlab").removeClass('grow-point');

        $("#timeline-lfw-cover").addClass('fade-work');
        $("#timeline-amazonads-cover1").addClass('fade-work');
        $("#timeline-amazonads-cover2").addClass('fade-work');
        $("#timeline-amazonfire-cover1").addClass('fade-work');
        $("#timeline-amazonfire-cover2").addClass('fade-work');
        $("#timeline-coa-cover1").removeClass('fade-work');
        $("#timeline-coa-cover2").removeClass('fade-work');
        $("#timeline-winlab-cover1").removeClass('fade-work');
        $("#timeline-winlab-cover2").removeClass('fade-work');
    });
    /* When loading page check hideme */
    $('.hideme').each(function (i) {

        var bottom_of_object = $(this).offset().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it in */
        if (bottom_of_window > bottom_of_object) {
            $(this).animate({ 'opacity': '1', 'bottom': '0px' }, 700);

        }

    });

    /* Every time the window is scrolled check hideme */
    $(window).scroll(function () {

        /* Check the location of each desired element */
        $('.hideme').each(function (i) {

            var bottom_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it in */
            if (bottom_of_window > bottom_of_object) {
                $(this).animate({ 'opacity': '1', 'bottom': '0px' }, 700);

            }

        });
    });
    /* Change Navbar Active On scroll ... */
    $('#header').each(function (i) {
        var bottom_of_object = $(this).offset().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it in */
        if (bottom_of_window > bottom_of_object) {
            $('.nav-home').addClass("nav-active");
            $('.nav-about').removeClass("nav-active");
            $('.nav-experience').removeClass("nav-active");
            $('.nav-contact').removeClass("nav-active");
        }

    });
    $('#about').each(function (i) {
        var bottom_of_object = $(this).offset().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it in */
        if (bottom_of_window > bottom_of_object) {
            $('.nav-about').addClass("nav-active");
            $('.nav-home').removeClass("nav-active");
            $('.nav-experience').removeClass("nav-active");
            $('.nav-contact').removeClass("nav-active");
        }

    });
    $('#experience').each(function (i) {
        var bottom_of_object = $(this).offset().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it in */
        if (bottom_of_window > bottom_of_object) {
            $('.nav-experience').addClass("nav-active");
            $('.nav-about').removeClass("nav-active");
            $('.nav-home').removeClass("nav-active");
            $('.nav-contact').removeClass("nav-active");
        }

    });
    $('#contact').each(function (i) {
        var bottom_of_object = $(this).offset().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it in */
        if (bottom_of_window > bottom_of_object) {
            $('.nav-contact').addClass("nav-active");
            $('.nav-about').removeClass("nav-active");
            $('.nav-experience').removeClass("nav-active");
            $('.nav-home').removeClass("nav-active");
        }

    });

    $(window).scroll(function () {

        /* Check the location of each desired element */
        $('#header').each(function (i) {
            var bottom_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it in */
            if (bottom_of_window > bottom_of_object) {
                $('.nav-home').addClass("nav-active");
                $('.nav-about').removeClass("nav-active");
                $('.nav-experience').removeClass("nav-active");
                $('.nav-contact').removeClass("nav-active");
            }

        });
        $('#about').each(function (i) {
            var bottom_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it in */
            if (bottom_of_window > bottom_of_object) {
                $('.nav-about').addClass("nav-active");
                $('.nav-home').removeClass("nav-active");
                $('.nav-experience').removeClass("nav-active");
                $('.nav-contact').removeClass("nav-active");
            }

        });
        $('#experience').each(function (i) {
            var bottom_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it in */
            if (bottom_of_window > bottom_of_object) {
                $('.nav-experience').addClass("nav-active");
                $('.nav-about').removeClass("nav-active");
                $('.nav-home').removeClass("nav-active");
                $('.nav-contact').removeClass("nav-active");
            }

        });
        $('#contact').each(function (i) {
            var bottom_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it in */
            if (bottom_of_window > bottom_of_object) {
                $('.nav-contact').addClass("nav-active");
                $('.nav-about').removeClass("nav-active");
                $('.nav-experience').removeClass("nav-active");
                $('.nav-home').removeClass("nav-active");
            }

        });
    });

    $('.child').click(function () {
        $(this).addClass("clicked");
    });

})(jQuery); // End of use strict

