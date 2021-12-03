function iniciar() {
  let showFormularioFilme = mostrarEsconderFormulario("filme", false);
  let showFormularioLivro = mostrarEsconderFormulario("livro", false);
  let aguardaClick = aguardaClickIndicacao();

  /* Para ocultar as sections de filme e livro no carregamento */
  let escolhaFilme = document.getElementById('escolhaFilme');
  let mostrarSectionFilme = true;
  mostraEscondeSectionFilme();
  
  let escolhaLivro = document.getElementById('escolhaLivro');
  let mostrarSectionLivro = true;
  mostraEscondeSectionLivro();
  
  escolhaFilme.addEventListener("click", function() {
    mostraEscondeSectionFilme();
  });

  escolhaLivro.addEventListener("click", function() {
    mostraEscondeSectionLivro();
  });
  /* FIM - Para ocultar as sections de filme e livro no carregamento */

  function getFormsFilmes() {
    const filme = {
      nomeFilme: document.getElementById('inputNomeFilme').value,
      generoFilme: document.getElementById('inputGeneroFilme').value,
      descricaoFilme: document.getElementById('textAreaDescricaoFilme').value,
      notaFilme: document.getElementById('inputNotaFilme').value,
    }
    return filme;
  }

  function getFormsLivros() {
    const livro = {
      nomeLivro: document.getElementById('inputNomeLivro').value,
      generoLivro: document.getElementById('inputGeneroLivro').value,
      qtdPaginasLivro: document.getElementById('inputQtdPaginasLivro').value,
      descricaoLivro: document.getElementById('textAreaDescricaoLivro').value,
      notaLivro: document.getElementById('inputNotaLivro').value,
    }
    return livro;
  }

  function aguardaEventoFormulario() {
    let formularioFilme = document.getElementById('formIndicacaoFilme');
    formularioFilme.addEventListener("submit", function(event){
      event.preventDefault();
      console.log(getFormsFilmes());
    });

    let formularioLivro = document.getElementById('formIndicacaoLivro');
    formularioLivro.addEventListener("submit", function(event) {
      event.preventDefault();
      console.log(getFormsLivros());
    });
  }

  function mostrarEsconderFormulario(tipo, showFomulario) {
    if (tipo == "filme") {
      let formFilme = document.getElementById('formIndicacaoFilme');
      if (!showFomulario) {
        formFilme.style.display = 'none';
      }
      else {
        formFilme.style.display = 'block';
      } 
    }
    else if (tipo == "livro") {
      let formLivro = document.getElementById('formIndicacaoLivro');
      if (!showFomulario) {
        formLivro.style.display = 'none';
      }
      else {
        formLivro.style.display = 'block';
      }
    }
  }

  function aguardaClickIndicacao() {
    let indicarFilme = document.getElementById('botaoIndicarFilme');
    indicarFilme.addEventListener("click", function() {
      mostrarEsconderFormulario("filme", true);
    });

    let indicarLivro = document.getElementById('botaoIndicarLivro');
    indicarLivro.addEventListener("click", function() {
      mostrarEsconderFormulario("livro", true);
    });
  }

  function mostraEscondeSectionFilme() {
    let sectionFilme = document.getElementById('sectionFilme');
    mostrarSectionFilme = !mostrarSectionFilme;
    if (mostrarSectionFilme) {
      sectionFilme.style.display = 'block';
    }
    else {
      sectionFilme.style.display = 'none';
    }
  }

  function mostraEscondeSectionLivro() {
    let sectionLivro = document.getElementById('sectionLivro');
    mostrarSectionLivro = !mostrarSectionLivro;
    if (mostrarSectionLivro) {
      sectionLivro.style.display = 'block';
    }
    else {
      sectionLivro.style.display = 'none';
    }
  }
}



document.addEventListener("DOMContentLoaded", iniciar);