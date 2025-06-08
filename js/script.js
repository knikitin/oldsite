$.get( "parts/header.html").done(function( data ) {
    $('.pbheader').append( data );
});

$.get( "parts/menu.html").done(function( data ) {
    $('.pbmenu').append( data );

    // data = '<span class="sr-only">(текущая)</span>'
    // $('.pbheader').append( data );
    var pageType = $('meta[name=description]').attr('content');
    var menuId = "";
    if (pageType == "Main") menuId = "#menuMain";
    if (pageType == "Documents") menuId = "#menuDocuments";
    if (pageType == "Contacts") menuId = "#menuContacts";
    if (pageType == "Timetable") menuId = "#menuTimetable";
    if (menuId != "") $( menuId ).addClass( "active" );    

    // Initialize Slick slider with enhanced features
    $('.pbslider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        arrows: true,
        pauseOnHover: true,
        pauseOnFocus: true,
        swipe: true,
        touchThreshold: 10,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    // Add keyboard navigation
    $(document).on('keydown', function(e) {
        if (e.keyCode === 37) { // left arrow
            $('.pbslider').slick('slickPrev');
        }
        if (e.keyCode === 39) { // right arrow
            $('.pbslider').slick('slickNext');
        }
    });
});

$.get( "parts/footer.html").done(function( data ) {
    $('.pbfooter').append( data );
});


