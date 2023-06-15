
var contador1 = 0;
var contador3 = 0;
var contador5=0;
function Visita1(){
    contador1++;
    document.getElementById("Visitas01").textContent = contador1
}
function Visita3(){
    contador3++;
    document.getElementById("Visitas03").textContent = contador3
}
function Visita5(){
    contador5++;
    document.getElementById("Visitas05").textContent = contador5
}
var imagen = document.getElementsByClassName("imagen-impar");

function openPopup(title, imageUrl,id) {
    var w = 800;
    var h = 400;
    var left = (screen.width / 2) - (w / 2);
    var top = (screen.height / 2) - (h / 2);
    var popupWindow = window.open('', title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
  

    var img = document.createElement('img');
    img.src = imageUrl;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'contain';
    popupWindow.document.body.appendChild(img);
  
    var okButton = document.createElement('button');
    okButton.innerText = 'OK';
    okButton.onclick = function() {

            if(id === "impar1")
            {
               Visita1();
            }else if(id === "impar3")
            {
               Visita3();
            }else if(id === "impar5")
            {
                Visita5();
            }
  
    }
    popupWindow.document.body.appendChild(okButton);
  
    var closeButton = document.createElement('button');
    closeButton.innerText = 'Cerrar';
    closeButton.onclick = function() {
      popupWindow.close();
    }
    popupWindow.document.body.appendChild(closeButton);
  }