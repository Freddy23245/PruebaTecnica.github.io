var contador2 = 0;
var contador4 = 0;
function Visita2(){
    contador2++;
    console.log(contador2);
    return document.getElementById("Visitas102").textContent = contador2;
}
function Visita4(){
    contador4++;
    document.getElementById("Visitas04").textContent = contador4
}
var imagen1 = document.getElementsByClassName("imagen-modal");
console.log(imagen1);
var modal = document.getElementById("modal01");
var modalImagen = document.getElementsByClassName("imagen-modal-modal")[0];

for (let i = 0; i < imagen1.length; i++) {
   
   imagen1[i].onclick = function(){
    var id= imagen1[i].getAttribute('id');
    console.log(imagen1);
    console.log(id);
    if(id === "par2")
     {
      Visita2();
     }else if(id === "par4")
     {
        Visita4();
     }
    modal.style.display = "block";
    modalImagen.src= this.src;
    
   }
    
}
var cerrarBtn = document.getElementsByClassName("cerrar-modal")[0];

cerrarBtn.onclick = function(){
    modal.style.display = "none";
}