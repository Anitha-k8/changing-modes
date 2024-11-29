$( ".light" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
     $( "body" ).removeClass( "dark" );
     $( ".light" ).text( "OFF" );
   } else {
   $( "body" ).addClass( "dark" );
   $( ".light" ).text( "ON" );
   }
 });