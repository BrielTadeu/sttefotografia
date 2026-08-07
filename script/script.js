/* botão para o topo */
const btn = document.getElementById("btnTopo");

// Mostrar botão quando rolar a página
window.onscroll = function () {
    if (btn) {
        if (document.documentElement.scrollTop > 300) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    }
};

// Voltar ao topo
if (btn) {
    btn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

/* Comportamento do menu ao rolar (Sumiço dinâmico) */
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop <= 10) {
        header.classList.remove("header-hidden");
        header.classList.add("header-show");
    } else {
        header.classList.add("header-hidden");
        header.classList.remove("header-show");
    }
}, { passive: true });

/* pop-up */
const popup = document.getElementById("popupSucesso");
const fecharPopup = document.getElementById("fecharPopup");

if (popup && fecharPopup) {
    const params = new URLSearchParams(window.location.search);

    if (params.get("enviado") === "1") {
        popup.showModal();
    }

    fecharPopup.addEventListener("click", () => {
        popup.close();
        window.location.href = "https://brieltadeu.github.io/sttefotografia/contato.html";
    });
}