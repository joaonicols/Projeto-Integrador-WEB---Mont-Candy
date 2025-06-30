const conteiner = document.querySelector('.carretel-imagens')
const imagens = document.querySelectorAll('.carretel-imagens img')

let index = 0;

function getImagemLargura() {
    return imagens[0].clientWidth;
  }

  setInterval(() => {
      index = (index + 1) % imagens.length;
      const deslocamento = index * getImagemLargura();
      conteiner.style.transform = `translateX(-${deslocamento}px)`;
    }, 5000); 