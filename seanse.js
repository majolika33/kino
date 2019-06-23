window.onscroll = function () {

    "use strict";

    // Vars

    var winScrollTop = window.pageYOffset,
        navBar = document.getElementById("nav"),
        theAboutSec = document.getElementById("about"),
        theSkillsSec = document.getElementById("skills"),
        theWorksSec = document.getElementById("works"),
        theDesignSec = document.getElementById("design"),
        theContactSec = document.getElementById("contact"),
        theLIst = document.getElementById("list_ul"),
        goUp = document.getElementById("goup");

    // Nav fixed to scroll and sscroll to fixed

    if (winScrollTop > 0) {
        navBar.classList.remove("fixed");
        navBar.classList.add("scroll");
    } else {
        navBar.classList.remove("scroll");
        navBar.classList.add("fixed");
    }


    // Show and hide the Go Up button

    if (winScrollTop > theWorksSec.offsetTop) {
        goUp.style.display = "block";
    } else {
        goUp.style.display = "none";
    }
};

// function to scroll to the sections

function scroll(toElement, speed) {

    "use strict";

    var winObject = window,
        windowTopScroll = winObject.pageYOffset,
        pointer = toElement.getAttribute('href').slice(1),
        elem = document.getElementById(pointer),
        elemOffset = elem.offsetTop,
        counter = setInterval(function () {

            windowTopScroll;
            // From button to top
            if (windowTopScroll > elemOffset) {
                winObject.scrollTo(0, windowTopScroll);
                windowTopScroll -= speed;
                if (windowTopScroll <= elemOffset) {
                    clearInterval(counter);
                    winObject.scrollTo(0, elemOffset);
                }
                // From top to button
            } else {
                winObject.scrollTo(0, windowTopScroll);
                windowTopScroll += speed;
                if (windowTopScroll >= elemOffset) {
                    clearInterval(counter);
                    winObject.scrollTo(0, elemOffset);
                }
            }
        }, 7);
}

var links = document.querySelectorAll("a[data-scroll]"),
    i;

for (i = 0; i < links.length; i = i + 1) {
    links[i].onclick = function (e) {

        "use strict";
        scroll(this, 28);
        e.preventDefault();
    };
}

// Responsive Navbar button

var navButton = document.getElementById("nav_button");
navButton.onclick = function () {
    "use strict";
    var listDiv = document.getElementById("main_list");
    listDiv.classList.toggle("show");
    navButton.classList.toggle("active");
};



function cityPoz() {

    var mydata = JSON.parse(filmPoz);


    var liczba = Object.keys(mydata).length
    var img1 = "<img src=img/avengers.jpg>"
    var img2 = "<img src=img/topielisko.jpg>"
    var img3 = "<img src=img/kraina_cudow.jpg>"
    var img4 = "<img src=img/dumbo.jpg>"
    var img5 = "<img src=img/niedobrani.jpg>"



    for (var i = 0; i < liczba; i++) {
        if (mydata[i].city == 'Poznań') {


            var li = document.createElement('span');
            var button = document.querySelector('#jeden');
            button.appendChild(li);

            document.getElementById('avengers').innerHTML = img1
            document.getElementById('topielisko').innerHTML = img2
            document.getElementById('kraina_cudow').innerHTML = img3
            document.getElementById('dumbo').innerHTML = img4
            document.getElementById('niedobrani').innerHTML = img5
        }

    }


}

function cityWaw() {

    var mydata = JSON.parse(filmPoz);


    var liczba = Object.keys(mydata).length
    var img1 = "<img src=img/avengers.jpg>"
    var img2 = "<img src=img/topielisko.jpg>"
    var img3 = "<img src=img/kraina_cudow.jpg>"
    var img4 = "<img src=img/dumbo.jpg>"
    var img5 = "<img src=img/niedobrani.jpg>"
    var img6 = "<img src=img/slodki_koniec.jpg>"
    var img7 = "<img src=img/praziomek.jpg>"




    for (var i = 0; i < liczba; i++) {
        if (mydata[i].city == 'Warszawa') {


            var li = document.createElement('span');
            var button = document.querySelector('#jeden');
            button.appendChild(li);


            document.getElementById('avengers').innerHTML = img1
            document.getElementById('topielisko').innerHTML = img2
            document.getElementById('kraina_cudow').innerHTML = img3
            document.getElementById('dumbo').innerHTML = img4
            document.getElementById('niedobrani').innerHTML = img5
            document.getElementById('slodki-koniec').innerHTML = img6
            document.getElementById('praziomek').innerHTML = img7
        }

    }


}

function cityGda() {

    var mydata = JSON.parse(filmPoz);


    var liczba = Object.keys(mydata).length
    var img1 = "<img src=img/kraina_cudow.jpg>"
    var img2 = "<img src=img/podly.jpg>"
    var img3 = "<img src=img/dumbo.jpg>"
    var img4 = "<img src=img/slodki_koniec.jpg>"


    for (var i = 0; i < liczba; i++) {
        if (mydata[i].city == 'Gdańsk') {


            var li = document.createElement('span');
            var button = document.querySelector('#jeden');
            button.appendChild(li);


            document.getElementById('kraina_cudow').innerHTML = img1
            document.getElementById('podly').innerHTML = img2
            document.getElementById('dumbo').innerHTML = img3
            document.getElementById('slodki-koniec').innerHTML = img4

        }

    }


}



function avengers() {
    document.getElementById('wybranyfilm').innerHTML = " Wybrałeś film: Avengers"
    document.getElementById('avengers').style.opacity = "1"

    document.getElementById('topielisko').style.display = "none"
    document.getElementById('kraina_cudow').style.display = "none"
    document.getElementById('dumbo').style.display = "none"
    document.getElementById('niedobrani').style.display = "none"
    document.getElementById('slodki-koniec').style.display = "none"
    document.getElementById('praziomek').style.display = "none"

    document.getElementById('krok3').style.overflow = "visible"

}

function dumbo() {
    document.getElementById('wybranyfilm').innerHTML = " Wybrałeś film: Dumbo"
    document.getElementById('dumbo').style.opacity = "1"
    document.getElementById('avengers').style.display = "none"
    document.getElementById('kraina_cudow').style.display = "none"
    document.getElementById('niedobrani').style.display = "none"
    document.getElementById('topielisko').style.display = "none"
    document.getElementById('slodki-koniec').style.display = "none"
    document.getElementById('praziomek').style.display = "none"
    document.getElementById('podly').style.display = "none"

    document.getElementById('krok3').style.overflow = "visible"

}

function kraina_cudow() {
    document.getElementById('wybranyfilm').innerHTML = "Wybrałeś film: Kraina cudów"
    document.getElementById('kraina_cudow').style.opacity = "1"
    document.getElementById('avengers').style.display = "none"
    document.getElementById('dumbo').style.display = "none"
    document.getElementById('niedobrani').style.display = "none"
    document.getElementById('topielisko').style.display = "none"
    document.getElementById('slodki-koniec').style.display = "none"
    document.getElementById('praziomek').style.display = "none"
    document.getElementById('krok3').style.overflow = "visible"

   
}



function topielisko() {
    document.getElementById('wybranyfilm').innerHTML = "Wybrałeś film: Topielisko"
    document.getElementById('topielisko').style.opacity = "1"
    document.getElementById('avengers').style.display = "none"
    document.getElementById('dumbo').style.display = "none"
    document.getElementById('niedobrani').style.display = "none"
    document.getElementById('kraina_cudow').style.display = "none"
    document.getElementById('slodki-koniec').style.display = "none"
    document.getElementById('praziomek').style.display = "none"
    document.getElementById('krok3').style.overflow = "visible"


}

function niedobrani() {
    document.getElementById('wybranyfilm').innerHTML = "Wybrałeś film: Niedobrani"
    document.getElementById('niedobrani').style.opacity = "1"
    document.getElementById('avengers').style.display = "none"
    document.getElementById('dumbo').style.display = "none"
    document.getElementById('topielisko').style.display = "none"
    document.getElementById('kraina_cudow').style.display = "none"
    document.getElementById('slodki-koniec').style.display = "none"
    document.getElementById('praziomek').style.display = "none"
    document.getElementById('krok3').style.overflow = "visible"

  }

function slodki_koniec() {
    document.getElementById('wybranyfilm').innerHTML = "Wybrałeś film: Słodki Koniec Dnia"
    document.getElementById('slodki-koniec').style.opacity = "1"
    document.getElementById('avengers').style.display = "none"
    document.getElementById('dumbo').style.display = "none"
    document.getElementById('niedobrani').style.display = "none"
    document.getElementById('kraina_cudow').style.display = "none"
    document.getElementById('topielisko').style.display = "none"
    document.getElementById('praziomek').style.display = "none"
    document.getElementById('krok3').style.overflow = "visible"

    
}

function praziomek() {
    document.getElementById('wybranyfilm').innerHTML = "Wybrałeś film: Praziomek"
    document.getElementById('praziomek').style.opacity = "1"
    document.getElementById('avengers').style.display = "none"
    document.getElementById('dumbo').style.display = "none"
    document.getElementById('niedobrani').style.display = "none"
    document.getElementById('kraina_cudow').style.display = "none"
    document.getElementById('slodki-koniec').style.display = "none"
    document.getElementById('topielisko').style.display = "none"
    document.getElementById('krok3').style.overflow = "visible"

   
}

function podly() {
    document.getElementById('wybranyfilm').innerHTML = "Wybrałeś film: Podły, okrutny, zły"
    document.getElementById('podly').style.opacity = "1"
    document.getElementById('dumbo').style.display = "none"
    document.getElementById('kraina_cudow').style.display = "none"
    document.getElementById('slodki-koniec').style.display = "none"
    document.getElementById('krok3').style.overflow = "visible"

   }

function kraina_cudow1() {
    document.getElementById('wybranyfilm').innerHTML = "Wybrałeś film: Kraina cudów"
    document.getElementById('kraina_cudow').style.opacity = "1"
    document.getElementById('dumbo').style.display = "none"
   document.getElementById('slodki-koniec').style.display = "none"
    document.getElementById('podly').style.display = "none"
    document.getElementById('krok3').style.overflow = "visible"

   
}

function dumbo1() {
    document.getElementById('wybranyfilm').innerHTML = "Wybrałeś film: Dumbo"
    document.getElementById('dumbo').style.opacity = "1"
    document.getElementById('kraina_cudow').style.display = "none"
   document.getElementById('slodki-koniec').style.display = "none"
    document.getElementById('podly').style.display = "none"
    document.getElementById('krok3').style.overflow = "visible"

   
}

function slodki_koniec1() {
    document.getElementById('wybranyfilm').innerHTML = "Wybrałeś film: Słodki koniec"
    document.getElementById('slodki-koniec').style.opacity = "1"
    document.getElementById('kraina_cudow').style.display = "none"
   document.getElementById('dumbo').style.display = "none"
    document.getElementById('podly').style.display = "none"
    document.getElementById('krok3').style.overflow = "visible"

   
}




