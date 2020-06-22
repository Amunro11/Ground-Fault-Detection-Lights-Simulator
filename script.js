var radio = document.getElementsByName("switch");
var radioValue;

//Grab all of the elipse tags in the DOM. Stored in a nodeList object. Can access with index numbers.
var bulbs = document.getElementsByTagName("ellipse");  
//Grab all of the text tags in the dom. Stored in a nodeList object. Can access with index numbers.
var text= document.getElementsByTagName("text");


function clearSelection() {
    //Uncheck radio button
    for(let i=0;i<radio.length;i++) {
        radio[i].checked = false;
    }
    //Return bulbs to default brightness
    bulbs[0].style.fillOpacity = ".3";                         
    bulbs[1].style.fillOpacity = ".3";       
    bulbs[2].style.fillOpacity = ".3";       
    text[6].innerHTML = "dim"       
    text[7].innerHTML = "dim"       
    text[8].innerHTML = "dim"        
    text[6].setAttribute("x", "65")
    text[7].setAttribute("x", "250")    
    text[8].setAttribute("x", "440")  
}   

function selection() {
    //Get radio button value
    for (i = 0; i < radio.length; i++) { 
        if (radio[i].checked) 
        radioValue = radio[i].value;
    }
    brighntess();
}

function brighntess() {
    //Select correct tag from array and manipulate opacity and fill colour to simulate being on or off and different brightness levels. Also align varying text to center.
    switch(radioValue) {
        case "1":
            bulbs[0].style.fillOpacity = "0";
            bulbs[1].style.fillOpacity = "1";
            bulbs[2].style.fillOpacity = "1";
            text[6].innerHTML = "off"
            text[7].innerHTML = "bright"
            text[8].innerHTML = "bright" 
            text[6].setAttribute("x", "65")
            text[7].setAttribute("x", "215")    
            text[8].setAttribute("x", "405")      
            break;

        case "2":
            bulbs[0].style.fillOpacity = "1";
            bulbs[1].style.fillOpacity = "0";
            bulbs[2].style.fillOpacity = "1";
            text[6].innerHTML = "bright"
            text[7].innerHTML = "off"
            text[8].innerHTML = "bright"
            text[6].setAttribute("x", "30")
            text[7].setAttribute("x", "250")    
            text[8].setAttribute("x", "405")   
            break;

        case "3":
            bulbs[0].style.fillOpacity = "1";
            bulbs[1].style.fillOpacity = "1";
            bulbs[2].style.fillOpacity = "0";
            text[6].innerHTML = "bright"
            text[7].innerHTML = "bright"
            text[8].innerHTML = "off"
            text[6].setAttribute("x", "30")
            text[7].setAttribute("x", "215")    
            text[8].setAttribute("x", "440") 
    }    
}






