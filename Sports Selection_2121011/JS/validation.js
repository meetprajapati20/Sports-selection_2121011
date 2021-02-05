function check() {
	if(document.form.name.value == ""){
	   alert( "Please provide your name!" );
            document.form.name.focus() ;
            return false;	
	    }
	if( document.form.email.value == "" ) {
            alert( "Please provide your Email!" );
            document.form.email.focus() ;
            return false;
         }
         var emailID = document.form.email.value;
         atpos = emailID.indexOf("@");
         dotpos = emailID.lastIndexOf(".");
         
         if (atpos < 1 || ( dotpos - atpos < 2 )) {
            alert("Please enter correct email ID")
            document.form.email.focus() ;
            return false;
         }
    if( document.form.pass.value == "" ) {
            alert( "Please provide password" );
            document.form.pass.focus() ;
            return false;
         }
    if( document.form.cpass.value == "" ) {
            alert( "Please confirm your password" );
            document.form.cpass.focus() ;
            return false;
         }
    var a = document.form.pass.value;
    var b = document.form.cpass.value;
    if(a!=b){
    	alert("confirmation password not match with password");
    }
    var c= document.form.tel.value;
    var len = parseInt(c.length);
    if (!(len==0 || len==10)){
    	alert("Enter correct contact format.");
    	return false;
    }
    if (document.form.acard.value=="") {
    	alert("hhgfh");
    	return false;
    }
    if (document.form.p.value=="") {
    	alert("hhgfh");
    	return false;
    }
    if (document.form.bncert.value=="") {
    	alert("hhgfh");
    	return false;
    }
    if (document.form.bcert.value=="") {
    	alert("hhgfh");
    	return false;
    }
    alert("Successfully Submited.");

}