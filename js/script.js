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


    $('.pbslider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1        
    });
});

$.get( "parts/footer.html").done(function( data ) {
    $('.pbfooter').append( data );
});


