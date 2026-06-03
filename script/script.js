/* botão para o topo */
const btn = document.getElementById("btnTopo");

    // Mostrar botão quando rolar a página
    window.onscroll = function () {
        if (document.documentElement.scrollTop > 300) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    };

    // Voltar ao topo
    btn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
});
/* barra até o banner */
const header = document.querySelector("header");
const banner = document.querySelector(".banner");

window.addEventListener("scroll", () => {
    const bannerBottom = banner.offsetTop + banner.offsetHeight;

    if(window.scrollY > bannerBottom){
        header.classList.add("header-hidden");
        header.classList.remove("header-show");
    }else{
        header.classList.add("header-show");
        header.classList.remove("header-hidden");
    }

});
/* pop-up */
const popup = document.getElementById("popupSucesso");
const fecharPopup = document.getElementById("fecharPopup");

const params = new URLSearchParams(window.location.search);

if (params.get("enviado") === "1") {
    popup.showModal();
}

fecharPopup.addEventListener("click", () => {
    popup.close();

    window.location.href =
    "https://brieltadeu.github.io/sttefotografia/contato.html";
});
