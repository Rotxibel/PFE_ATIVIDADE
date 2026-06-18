let contador = 0;
let total = 0;

const contadorCarrinho = document.getElementById("contador");
const totalCarrinho = document.getElementById("total");

const botoes = document.querySelectorAll("button");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {

        contador++;
        contadorCarrinho.textContent = contador;

        const preco = Number(botao.dataset.preco);
        total += preco;

        totalCarrinho.textContent = total.toFixed(2);

        alert("Produto adicionado!");

        botao.textContent = "✔ Adicionado";
        botao.style.background = "#28a745";

        setTimeout(() => {
            botao.textContent = "Adicionar ao Carrinho";
            botao.style.background = "#007bff";
        }, 800);

    });
});