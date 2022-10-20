function incrementValue()
    {
        var value = parseInt(document.getElementById('number').value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        document.getElementById('number').value = value;
    }

function downValue()
    {
        var value = parseInt(document.getElementById('number').value, 10);
        value = isNaN(value) ? 0 : value;
        if (value >= 1) {
            value--;
        }
        document.getElementById('number').value = value;
    }


var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    //scrol up
    if ( prevScrollpos > currentScrollPos ) {
        document.getElementById("asd").style.top = "0";
        document.getElementById("asd").style.backgroundColor = "#494B4B";
        
        // if on start page
        if ( window.scrollY < window.innerHeight ) {
            //change color text on header      
            var link = document.querySelectorAll(".main__link")
            link.forEach(link => {
                link.style.color = "#000";
            });
            document.getElementById("asd").style.backgroundColor = "#fff";

            //chenge color header
            document.getElementById("img_col").style.stroke = "#000";
            document.getElementById("img_col1").style.fill = "#000";

        } 
    //scroll down
    } else {
    document.getElementById("asd").style.top = "-70px";
    document.getElementById("asd").style.backgroundColor = "#494B4B";
    document.getElementById("img_col").style.stroke = "#fff";
    document.getElementById("img_col1").style.fill = "#fff";
    
    //change color text on header to wite if scrol down
    var link = document.querySelectorAll(".main__link")
    link.forEach(link => {
        link.style.color = "#fff";
    }
    );


    // if on start page
    if ( window.scrollY < window.innerHeight ) {
            //change color text on header to black if is uper than titel
            var link = document.querySelectorAll(".main__link")
            link.forEach(link => {
                link.style.color = "#000";
            }
            );


            //chenge color header
            document.getElementById("asd").style.top = "0";
            document.getElementById("asd").style.backgroundColor = "#fff";
            document.getElementById("img_col").style.stroke = "#000";
            document.getElementById("img_col1").style.fill = "#000";
        } 
    }
    prevScrollpos = currentScrollPos;
}
