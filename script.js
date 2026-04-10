// 1. Seleção dos elementos
const botaoTema = document.getElementById("botaoTema");
const iconeSol = document.querySelector(".claro");
const iconeLua = document.querySelector(".escuro");

// 2. Função Central de Aplicação (Evita repetição de código)
function aplicarTema(tema) {
    if (tema === "dark") {
        document.body.classList.add("dark-mode");
        // Troca visual dos ícones
        iconeSol.style.display = "none";
        iconeLua.style.display = "block";
    } else {
        document.body.classList.remove("dark-mode");
        // Troca visual dos ícones
        iconeSol.style.display = "block";
        iconeLua.style.display = "none";
    }
}

// 3. PASSO CRUCIAL: Verificar e aplicar o tema assim que o script rodar
// Isso evita que a página carregue no claro se o usuário prefere o escuro
const temaSalvo = localStorage.getItem("tema") || "light";
aplicarTema(temaSalvo);

// 4. Evento de clique para alternar entre os temas
botaoTema.addEventListener("click", () => {
    // Pega o tema atual salvo (ou assume light)
    const temaAtual = localStorage.getItem("tema") || "light";
    
    // Inverte o valor
    const novoTema = temaAtual === "dark" ? "light" : "dark";

    // Aplica as mudanças no HTML e Salva no navegador
    aplicarTema(novoTema);
    localStorage.setItem("tema", novoTema);
});
