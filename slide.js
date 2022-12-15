function slide1(){
    document.getElementById('id').src="img/logo.jpg";
    setTimeout("slide2()", 3000)
    }
    
    function slide2(){
    document.getElementById('id').src="img/logo.jpg";
    setTimeout("slide3()", 3000)
    }
    
    function slide3(){
    document.getElementById('id').src="img/logo.jpg";
    setTimeout("slide1()", 3000)
    }