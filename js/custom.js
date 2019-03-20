jQuery(document).ready(function() {

    // Remove empty P tags created by WP inside of Accordion and Orbit
    jQuery('.accordion p:empty, .orbit p:empty').remove();

    // Makes sure last grid item floats left
    jQuery('.archive-grid .columns').last().addClass( 'end' );

    // Adds Flex Video to YouTube and Vimeo Embeds
    jQuery('iframe[src*="youtube.com"], iframe[src*="vimeo.com"]').each(function() {
        if ( jQuery(this).innerWidth() / jQuery(this).innerHeight() > 1.5 ) {
            jQuery(this).wrap("<div class='responsive-embed widescreen'/>");
        } else {
            jQuery(this).wrap("<div class='responsive-embed'/>");
        }
    });


    jQuery('.owl-carousel').owlCarousel({
        stagePadding: 50,
        items:2,
        loop:true,
        margin:20,
        navigation: true,
        responsive:{
            768:{
                items:4,
                nav:true
            }
        }
    })

});