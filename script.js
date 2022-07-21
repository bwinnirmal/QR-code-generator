// genrate qr function start

function QRgenerate(){

    var input = document.getElementById('input-main');
    var image = document.getElementById('qr-src');


    if(input.value ==""){
        document.getElementById('error').style.display="block";
        document.getElementById('error').innerHTML="<center><b>" + "Please Enter Value First" + "</center></b>";
        return false;   
    }
    else{
        var qr = `https://api.qrserver.com/v1/create-qr-code/?size=100%x100%&data=${input.value}`;
        document.getElementById('error').style.display="none";
        
        // show image and download button 
        document.getElementById("qr-img").style.display="block";
        image.src= qr;
        
        if(image.src==""){
            document.getElementById("qr-download").style.display="none";
        }
        else{
            document.getElementById("qr-download").style.display="block";
        }
    }

};

// download image function start required filesaver.js

function qrdownload(){
    var img = document.getElementById('qr-src').src;
    var filename= img.split("=").pop().split(".")[0];
    saveAs(img, filename);
};