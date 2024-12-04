// script.js

function openModal(imgElement) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = imgElement.src; // Define a imagem do modal
    captionText.innerHTML = imgElement.alt; // Define a legenda da imagem
}

function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";

    // Ajustar tamanho da fonte
function adjustFontSize(action) {
  const body = document.body;
  const currentSize = parseFloat(window.getComputedStyle(body).fontSize);
  if (action === 'increase') {
    body.style.fontSize = (currentSize + 2) + 'px';
  } else if (action === 'decrease') {
    body.style.fontSize = (currentSize - 2) + 'px';
  }
}

// Alterar contraste
function toggleContrast() {
  const body = document.body;
  body.classList.toggle('high-contrast');
}

// Ocultar/Mostrar texto
function toggleText() {
  const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach(p => {
    p.style.display = p.style.display === 'none' ? 'block' : 'none';
  });
}

// Adicionar contraste alto ao CSS
document.head.insertAdjacentHTML(
  'beforeend',
  `<style>
    body.high-contrast {
      background-color: black;
      color: yellow;
    }
  </style>`
);
}
