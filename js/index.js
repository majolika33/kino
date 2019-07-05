// REPERTUARY
document.getElementById("wybor").addEventListener("change",function(){
    var selObj = document.getElementById("wybor");
    var selValue = selObj.options[selObj.selectedIndex].value;
    
    if (selValue == "poznan"){
    document.getElementById("kino_poznan").classList.remove("ukryj");
    document.getElementById("kino_warszawa").classList.add("ukryj");
    document.getElementById("kino_gdansk").classList.add("ukryj");
    document.getElementById("gallery").style.visibility = 'hidden';

    }

    if (selValue == "warszawa"){
     document.getElementById("kino_warszawa").classList.remove("ukryj");
     document.getElementById("kino_poznan").classList.add("ukryj");
     document.getElementById("kino_gdansk").classList.add("ukryj");
     document.getElementById("gallery").style.visibility = 'hidden';

    }
  

    if (selValue == "gdansk"){
    document.getElementById("kino_gdansk").classList.remove("ukryj");
    document.getElementById("kino_poznan").classList.add("ukryj");
    document.getElementById("kino_warszawa").classList.add("ukryj");
    document.getElementById("gallery").style.visibility = 'hidden';

   }

  
 }
  )

  // function callInfo() {
  //   var citys = document.getElementsByName('City');
  //   var select;
  
  //   for(var i=0; i<citys.length; i++)
  //     if(citys[i].checked){
  //       select = citys[i].value;
  //       break;
  //     }
  
  //   for(var i=0; i<mydb.City.length; i++) {
  //     if(mydb.City[i].miasto == select) {
  //       select = i;
  //       break;
  //     }
  //   }
  
  //   var miasto = mydb.City[select].miasto;
  //   var movies = mydb.City[select].movies;
  
  //   document.getElementById('miasto').textContent = miasto;
  //   document.getElementById('movies').textContent = movies;
  // }

  // var items= document.querySelectorAll("#repertuar-items li");
  // for (var i=0; i < items.length; i++)
  // {
  //   items[i].onclick = function(){
  //     document.getElementById("text").value = this.innerHTML;
  //   };
  // }
 
//LOGOWANIE

// var jsonUsers = '{"users": [{"id": 0, "name": "monika1", "password": "Vincent2016"}, {"id": 1, "name": "monika2", "password": "Ellen2019"}]}  ' 

// var jsonObj = JSON.parse(jsonUsers);

// function check() {
  
// }



