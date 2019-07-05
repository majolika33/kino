function validate() {

     var mydata = JSON.parse(users);
         var liczba = Object.keys(mydata).length
         for (var i = 0; i < liczba; i++) {

             var name = document.getElementById('email').value
    
             var text = 'Wpisz poprawną nazwę użytkownika';
             var text1 = '';
             var check = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;
    
             if (check.test(name)) {
                 document.getElementById('test').innerHTML = text1;
    
             } else  {
                 document.getElementById('test').innerHTML = text;
                 return false;
             }


       var haslo = document.getElementById('haslo').value
    
            var text = 'Wpisz poprawne hasło';
            var text1 = 'Witaj!';
            var check = /^(?=.*\d)(?=.*[a-z])(?=.*[\!\@\#\$\%\^\&\*\(\)\_\+\-\=])(?=.*[A-Z])(?!.*\s).{8,}$/;
    
    
            if (check.test(haslo)) {
    
                document.getElementById('test').innerHTML = text1;
                
            } else {
                document.getElementById('test').innerHTML = text;
                console.log('hasło nie spełnia wymagań');
                document.querySelector('.niezalogowany').style.visibility = 'hidden';
                    
                return false;
    
            }
    
               
    
    
            if (mydata[i].password == haslo && mydata[i].mail == name) {

                //  var imie =  ;   
                // document.location.href = "kup_bilet.html";
                // window.open('kup_bilet.html','_blank');
                // document.getElementById("form-wrapper").hidden=true;

                var text= "Witaj " + mydata[i].nam + "! " + "<br></br>" + " Zapraszamy i życzymy udanego seansu";
                document.getElementById('test').innerHTML = text;

                document.getElementById("form-wrapper").style.visibility = 'hidden';
                document.getElementById('zalogowany').style.visibility = 'visible';
                // document.getElementById('zalogowany').innerHTML = img4 + " <br>" + " cdn..."
                //  document.getElementById('zalogowany').style.fontSize='38px';
            
               
               
                // document.getElementById('welcome').style.visibility = 'hidden'
                // document.getElementById('tlo').style.display = 'none'
    
    
    
                // document.getElementById('all').style.visibility = 'visible'
    
            }
            else{
                var text= "Niepoprawny login lub hasło!";
                document.getElementById('test').innerHTML = text;
                console.log('Niepoprawny login lub haslo!');
            }
    
        }
     }