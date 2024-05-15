
(function ($) {
    "use strict"; // Start of use strict
    var date = new Date();
    document.getElementById("footer-CC").innerHTML = "© " + date.getFullYear() + " Jonathan Wang";

    // Select all links that are intended to control GIF animations
    document.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('mouseenter', function() {
            // Find the GIF within this link and handle it
            var gif = link.querySelector('.gif-image');
            var staticImage = link.querySelector('.static-image');
            if(gif != null && staticImage != null) {
                gif.style.display = 'block';
                var gifSrc = gif.src;
                gif.src = ''; // Clear the src
                gif.src = gifSrc; // Reassign the src to restart the GIF
                staticImage.style.display = 'none';
            }
        });

        link.addEventListener('mouseleave', function() {
            var gif = link.querySelector('.gif-image');
            var staticImage = link.querySelector('.static-image');
            if(gif != null && staticImage != null) {
                gif.style.display = 'none';
                staticImage.style.display = 'block';
            }
        });
    });
})(jQuery); // End of use strict