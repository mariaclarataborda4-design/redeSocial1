document.addEventListener("DOMContentLoaded", () => {
  const likeBtn = document.querySelector(".like-btn");
  const postMedia = document.querySelector(".post-media");
  const bookmarkBtn = document.querySelector(".bookmark-btn");

  if (!likeBtn) return;

  const likesCountSpan = likeBtn.querySelector(".like-count");

  // Zera as variáveis de controle ao carregar/atualizar a página
  let baseLikes = 0;
  let isLiked = false;

  // Função para formatar números grandes (ex: 1200 vira 1.2K)
  function formatLikes(count) {
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + "K";
    }
    return count;
  }

  // Função para adicionar a curtida
  function addLike() {
    baseLikes++;
    isLiked = true;

    likeBtn.classList.add("liked");

    if (likesCountSpan) {
      likesCountSpan.textContent = formatLikes(baseLikes);
    }

    // Animação de expansão (bounce)
    const svg = likeBtn.querySelector("svg");
    if (svg) {
      svg.style.transform = "scale(1.4)";
      setTimeout(() => {
        svg.style.transform = "scale(1)";
      }, 150);
    }
  }

  // Clique no BOTÃO DE CORAÇÃO (Alterna entre curtir e descurtir)
  likeBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    if (isLiked) {
      // Se já estava curtido, descurte (-1)
      isLiked = false;
      baseLikes = Math.max(0, baseLikes - 1);
      likeBtn.classList.remove("liked");
      if (likesCountSpan) {
        likesCountSpan.textContent = formatLikes(baseLikes);
      }
    } else {
      // Se não estava curtido, adiciona curtida
      addLike();
    }
  });

  // Clique na FOTO/TELA (Sempre soma +1 curtida)
  if (postMedia) {
    postMedia.addEventListener("click", (e) => {
      e.stopPropagation();
      addLike();
    });
  }

  // Botão de Salvar (Bookmark)
  if (bookmarkBtn) {
    let isBookmarked = false;
    bookmarkBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      isBookmarked = !isBookmarked;
      bookmarkBtn.classList.toggle("bookmarked", isBookmarked);

      const svg = bookmarkBtn.querySelector("svg");
      if (svg) {
        svg.style.transform = "scale(1.2)";
        setTimeout(() => {
          svg.style.transform = "scale(1)";
        }, 150);
      }
    });
  }
});