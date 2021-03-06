(function ($) {
    'use strict';
    // Preloader
    jQuery(window).on('load', function () {
        jQuery("#preloader").delay(500).fadeOut(500);
        jQuery(".loader-wrap").fadeOut(500);
    });
    
    // Restrict Inspect
    document.onkeydown = function (e) {
        if (e.ctrlKey &&
            (e.keyCode === 67 ||
                e.keyCode === 86 ||
                e.keyCode === 85 ||
                e.keyCode === 117)) {
            return false;
        } else {
            return true;
        }
    };
    $(document).keypress("u", function (e) {
        if (e.ctrlKey) {
            return false;
        } else {
            return true;
        }
    });
})(jQuery);