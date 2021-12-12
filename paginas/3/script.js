function contar() {
  var txt_inicio = window.document.getElementById("txt_inicio");
  var inicio = Number(txt_inicio.value);

  var txt_fim = window.document.getElementById("txt_fim");
  var fim = Number(txt_fim.value);

  var txt_passo = window.document.getElementById("txt_passo");
  var passo = Number(txt_passo.value);

  var res = window.document.getElementById("res");

  if (
    txt_passo.value.length == 0 ||
    txt_inicio.value.length == 0 ||
    txt_fim.value.length == 0
  ) {
    alert("Preencha os dados corretamente e tente novamente.");
  } else {
    //===================================================================//

    if (passo <= 0) {
      alert("Passo invalido, considerando passo 1.");
      passo = 1;
    }

    if (inicio < fim) {
      for (conta = inicio; conta <= fim; conta += passo) {
        res.innerHTML += `${conta} &rarr; `;
      }
    } else {
      for (conta = inicio; conta >= fim; conta -= passo) {
        res.innerHTML += `${conta} &rarr; `;
      }
    }
  }
}
