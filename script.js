var catalogo = [];
function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;

  if (filmeFavorito.endsWith(".jpg") || filmeFavorito.endsWith(".jpeg")) {
    listarFilmesNaTela(filmeFavorito);
  } else {
    console.error("Endereço de Filme Inválido");
  }
  document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filme) {
  catalogo.push(filme);
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML = "";
  for (let i = 0; i < catalogo.length; i++) {
    var elementoFilmeFavorito = "<img src=" + catalogo[i] + ">";
    elementoListaFilmes.innerHTML =
      elementoListaFilmes.innerHTML + elementoFilmeFavorito;
  }
}

function excluirFilme() {
  let item = catalogo.length - 1;
  catalogo.pop();
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML = "";
  for (let i = 0; i < catalogo.length; i++) {
    var elementoFilmeFavorito = "<img src=" + catalogo[i] + ">";
    elementoListaFilmes.innerHTML =
      elementoListaFilmes.innerHTML + elementoFilmeFavorito;
  }
}

function excluirFilmeLista() {
  var filmeFavorito = document.getElementById("filme").value;
  //catalogo.push(filmeFavorito);
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML = "";
  var filmeExcluido = false;
  for (let i = 0; i < catalogo.length; i++) {
    if (filmeFavorito == catalogo[i]) {
      catalogo.splice(i, 1);
      filmeExcluido = true;
    }
    if (catalogo.length > 0) {
      var elementoFilmeFavorito = "<img src=" + catalogo[i] + ">";
      console.log(i);
      elementoListaFilmes.innerHTML =
        elementoListaFilmes.innerHTML + elementoFilmeFavorito;
    }
  }
  if (filmeExcluido == false) {
    console.log("filme não consta na lista");
  }
  document.getElementById("filme").value = "";
}