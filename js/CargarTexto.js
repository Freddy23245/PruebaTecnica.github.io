function CargarTexto() {
    fetch('js/home.json')
      .then(response => response.json()) 
      .then(data => {
        var textarea = document.getElementById('my-textarea');
        textarea.value = data.texto;
      })
      .catch(error => console.error(error)); 
  }