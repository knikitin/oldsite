$.get( "parts/header.html").done(function( data ) {
    $('.pbheader').append( data );
});

$.get( "parts/menu.html").done(function( data ) {
    $('.pbmenu').append( data );
});

$.get( "parts/footer.html").done(function( data ) {
    $('.pbfooter').append( data );
});


