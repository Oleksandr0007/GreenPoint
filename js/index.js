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





// window.onscroll = function() {myFunction()};

// var header = document.getElementById("myHeader");

// var sticky = header.offsetTop;

// function myFunction() {
//     if (window.pageYOffset > sticky) {
//       header.classList.add("header__top");
//     } else {
//       header.classList.remove("header__top");
//     }
// }