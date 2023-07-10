function menuMobile(){
  const btnMobile = document.getElementById('btn-mobile');

  function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
      event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
      event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
  }
  
  btnMobile.addEventListener('click', toggleMenu);
  btnMobile.addEventListener('touchstart', toggleMenu);
}
menuMobile()

function menuRoupas(){
  function alterarImagem(imagemElement, novaImagem) {
    // Armazena a imagem original
    const imagemOriginal = imagemElement.src;
  
    imagemElement.addEventListener('mouseenter', () => {
      imagemElement.src = novaImagem;
    });
  
    imagemElement.addEventListener('mouseout', () => {
      imagemElement.src = imagemOriginal;
    });
  }
  const card1Imagem = document.getElementById('img1');
  alterarImagem(card1Imagem, "./imgroupas/camisaC.jpeg");
  
  const card2Imagem = document.getElementById('img2');
  alterarImagem(card2Imagem, "./imgroupas/Laranjac.jpeg");
  
  const card3Imagem = document.getElementById('img3');
  alterarImagem(card3Imagem, "./imgroupas/ggc.jpeg");
  
  const card4Imagem = document.getElementById('img4');
  alterarImagem(card4Imagem, "./imgroupas/PretoC.jpeg");
  
  const card5Imagem = document.getElementById('img5');
  alterarImagem(card5Imagem, "./imgroupas/CostasR.jpeg");

}
menuRoupas()




// banner digitação

function digitarTexto(texto, elemento) {
  let i = 0;
  const velocidade = 50; // Velocidade de digitação em milissegundos

  function digitar() {
    if (i < texto.length) {
      elemento.textContent += texto.charAt(i);
      i++;
      setTimeout(digitar, velocidade);
    }
  }

  digitar();
}

const secao = document.getElementById('minha-secao');
const textoDigitado = document.getElementById('texto-digitado');
const textoCompleto = "Eleve o seu treino a um novo patamar com as roupas de alta performance da nossa academia! ";

digitarTexto(textoCompleto, textoDigitado);

