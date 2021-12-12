function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("foto");
  var data = new Date();
  var hora = data.getHours();
  var minuto = data.getMinutes();
  msg.innerHTML = `<strong>Agora são exatas ${hora} horas e ${minuto} minutos.</strong>`;

  if (hora >= 4 && hora < 13) {
    img.src = "Imagens/manha.png";
    document.body.style.background =
      "linear-gradient(to right, #BBD3DD, #EDDAC2)";
    document.body.style.color = "black";
  } else if (hora >= 13 && hora < 19) {
    img.src = "Imagens/tarde.png";
    document.body.style.background =
      "linear-gradient(to right, #9A0E00, #FE7200)";
  } else {
    img.src = "Imagens/noite.png";
    document.body.style.background =
      "linear-gradient(to right, #12171D, #1D363D)";
  }
}
