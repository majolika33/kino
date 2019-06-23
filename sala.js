// OTWARCIE SALI KINOWEJ PER WYBRANE MIASTO


// function openIt () { open( "poznan.html", "_blank"); }

// document .getElementById("sala-poznan").addEventListener( "click", openIt, false);


///SALA KINOWA, TABLICA DWUWYMIAROWA
//appendChild wsadza coś tylko na koniec
//https://codepen.io/anon/pen/OGRywJ




for(let j=0;j<10;j++){
  let para_parent = document.createElement("div");
  for(let i=0;i<10;i++){
      let para = document.createElement("span");
      // let node = document.createTextNode("rz" + j  + "m" + i + " ");
    let node = document.createElement("img");
      node.width = 40;
		node.height = 40;
		node.src = "img/sofa.png"
      para.appendChild(node);
      para_parent.appendChild(para);
  }
  var element = document.getElementById("divoz");
  element.appendChild(para_parent);


// function changeTextColor(el){
// 	el.style.color = 'blue';
//   console.log('test');
// }
var sum=0;
var elements = document.querySelectorAll('div span');
elements.forEach((element) => {
element.addEventListener('click', () =>{
  if (element.style.background == 'red')   

  {element.style.background = 'none'; sum = sum - 15; 
  document.getElementById("cena").innerHTML = sum + "zł"}
  else {element.style.background = 'red'; sum = sum + 15; 
  document.getElementById("cena").innerHTML = sum + "zł";  }

      
});
});;
}
