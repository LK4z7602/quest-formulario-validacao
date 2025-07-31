const inputsTexto = document.querySelectorAll(".input");
const spans = document.querySelectorAll("span");
const itens = document.querySelectorAll(".item");
const botao = document.getElementById("enviar");

botao.addEventListener("click", function () {
  inputsTexto.forEach((input, idx) => {
    const temTexto = input.value.trim() !== "";

    if (temTexto) {
      input.classList.remove("incorreto");
      input.classList.add("correto");
      spans[idx].classList.remove("ativo");
    } else {
      input.classList.remove("correto");
      input.classList.add("incorreto");
      spans[idx].classList.add("ativo");
    }
  });
});
