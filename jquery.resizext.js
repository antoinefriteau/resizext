/*!
 * Resizext v1.0.1
 * https://github.com/antoinefriteau/resizext
 * MIT licensed
 *
 * Copyright (c) 2013 Antoine FRITEAU, antoinfriteau.fr
 */

(function( $ ) {
    "use strict";

    $.fn.resizext = function( options ) {

        var opts, resizableElements, actualFontSizeValue, newFontSizeValue, newFontSizeInPixel;

        opts = $.extend({}, $.fn.resizext.defaults, options); // extends options

        // TODO : check the resizable elements validity

        resizableElements = this;

        if(opts.animate) {
            $(resizableElements).css('-webkit-transition', 'all linear .' + opts.duration + 's');
            $(resizableElements).css('-moz-transition', 'all linear .' + opts.duration + 's');
            $(resizableElements).css('-o-transition', 'all linear .' + opts.duration + 's');
            $(resizableElements).css('transition', 'all linear .' + opts.duration + 's');
        }

        // TODO : check the increase and decrease button validity

        opts.increaseButton.click(function() {
            increaseText(resizableElements);
            //console.log('increase');
        });

        opts.decreaseButton.click(function() {
            decreaseText(resizableElements);
            //console.log('decrease');
        });

        function increaseText(elements) {
            elements.each(function() {

                // TOOD : check font-size extension to assign to (px | % | em | pt)

                actualFontSizeValue = parseInt($(this).css('font-size'));
                newFontSizeValue = actualFontSizeValue + 0.2*actualFontSizeValue;
                newFontSizeInPixel = newFontSizeValue + 'px';
                // Assign font-size new value
                $(this).css('font-size', newFontSizeInPixel);
            });
        }

        function decreaseText(elements) {
            elements.each(function() {

                // TOOD : check font-size extension to assign to (px | % | em | pt)

                actualFontSizeValue = parseInt($(this).css('font-size'));
                newFontSizeValue = actualFontSizeValue - 0.2*actualFontSizeValue;
                newFontSizeInPixel = newFontSizeValue + 'px';
                // Assign font-size new value
                $(this).css('font-size', newFontSizeInPixel);
            });
        }

    };

    $.fn.resizext.defaults = {
        increaseButton: null,
        decreaseButton: null,
        maxValue: null, // let user choose a max value  // check extension (px | % | em | pt)
        minValue: null, // let user choose a min value  // check extension (px | % | em | pt)
        animate: false, // true for text resize animation
        duration: 4, // in second
    };

}(jQuery))