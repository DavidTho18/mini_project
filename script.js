function validate() {
    if( document.myForm.name.value == "" ) {
    alert( "Nama anda kosong" );
    document.myForm.name.focus() ;
    return false;
    }
    if( document.myForm.mail.value == "" ) {
    alert( "email anda kosong" );
    document.myForm.mail.focus() ;
    return false;
    }
    return( true );
}

$('.nav-item a').click(function(event) {
    
})