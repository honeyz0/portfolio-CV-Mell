function mostrarSessao(id) {
  // Esconder todas as sessões dentro do main
  document.querySelectorAll("main section").forEach(sec => {
    sec.classList.remove("ativa");
  });

  // Mostrar a sessão clicada
  const sessao = document.getElementById(id);
  if (sessao) {
    sessao.classList.add("ativa");
  }
}

document.querySelector('.menu-logo').addEventListener('click', function(e) {
    e.preventDefault();
    const nav = document.querySelector('.nav-header');
    nav.style.display = nav.style.display === 'none' ? 'flex' : 'none';
});
