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
        // center: true,
        // items:2,
        // loop:true,
        // margin:20,
        // responsive:{
        //     768:{
        //         items:4
        //     }
        // }
        stagePadding: 200,
        loop:true,
        margin:20,
        nav:false,
        items:1,
        nav:true,
        responsive:{
            0:{
                items:1,
                stagePadding: 40
            },
            600:{
                items:1,
                stagePadding: 100
            },
            1000:{
                items:1,
                stagePadding: 200
            },
            1200:{
                items:1,
                stagePadding: 250
            },
            1400:{
                items:1,
                stagePadding: 300
            },
            1600:{
                items:1,
                stagePadding: 350
            },
            1800:{
                items:1,
                stagePadding: 400
            }
        }
    })
    })

});