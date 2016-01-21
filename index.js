$(document).ready(function(){
	var ghor = prompt('please enter a number');
	var anghor = +ghor;	
	
	var whole= function(){
		for(var i = 1; i <= anghor;  i++){
		
			if((i % 3 == 0) && (i % 5 == 0)){document.write (' Fizz Buzz ');}
        	else if( i% 3 == 0){document.write (' Fizz ');}
        	else if(i % 5 == 0){document.write (' Buzz ');}
   			else {document.write ( i );}

		}
	};

 		if(isNaN(anghor)){prompt('please enter a number');}
 		else if(anghor % 1 !==0){prompt('please enter a whole number');}
 		else{whole();}


});