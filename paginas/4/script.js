function tabuada() {
  var num = document.getElementById("txt_n");
  var tab = document.getElementById("sel_tab");

  if (num.value.length == 0) {
    window.alert("Preencha os dados corretamente");
  } else {
    var n = Number(num.value);
    tab.innerHTML = "";

    for (c = 1; c < 11; c++) {
      var item = document.createElement("option");
      item.text = `${n} x ${c} = ${n * c}`;
      tab.appendChild(item);
    }
  }
}
