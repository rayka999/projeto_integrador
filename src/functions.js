// Ativa tooltips do Bootstrap
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
[...tooltipTriggerList].map(el => new bootstrap.Tooltip(el));

// Quiz interativo
document.querySelectorAll(".quiz-option").forEach(btn => {
  btn.addEventListener("click", function() {
    const parent = btn.closest(".carousel-item");
    const explanationBox = parent.querySelector(".explanation");

    // Desativa todos os botões da pergunta
    parent.querySelectorAll(".quiz-option").forEach(opt => {
      opt.disabled = true;

      // Remove classes anteriores
      opt.classList.remove("correct", "wrong");
    });

    // Aplica cor correta ou incorreta
    if (btn.dataset.correct === "true") {
      btn.classList.add("correct");
    } else {
      btn.classList.add("wrong");
    }

    // Mostra explicação
    explanationBox.textContent = btn.dataset.explain;
    explanationBox.classList.add("show");
  });
});