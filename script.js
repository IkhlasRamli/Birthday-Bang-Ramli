function bukaUcapan() {

    konfeti();

    const musik = document.getElementById("musikUlangTahun");

    musik.play();

    document.getElementById("ucapan").scrollIntoView({
        behavior: "smooth"
    });

}


// Membuka foto dalam ukuran besar
function bukaFoto(gambar) {
    const modal = document.getElementById("photoModal");
    const fotoBesar = document.getElementById("fotoBesar");

    fotoBesar.src = gambar.src;
    modal.classList.add("active");
}

// Menutup foto besar
function tutupFoto() {
    const modal = document.getElementById("photoModal");

    modal.classList.remove("active");
}


// Membuat semua foto bisa diklik
document.querySelectorAll(".gallery img").forEach(function(foto) {

    foto.addEventListener("click", function(event) {
        event.stopPropagation();
        bukaFoto(this);
    });

});
// =========================
// EFEK KONFETI ULANG TAHUN
// =========================

function konfeti() {

    const jumlah = 80;

    for (let i = 0; i < jumlah; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML = "✦";

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize = (Math.random() * 15 + 10) + "px";
        confetti.style.color =
            ["#d6b56a", "#ffffff", "#f5d98b", "#ff8fa3"][Math.floor(Math.random() * 4)];

        confetti.style.zIndex = "10000";
        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const durasi = Math.random() * 3 + 2;

        confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(110vh) rotate(${Math.random() * 720}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: durasi * 1000,
                easing: "ease-out"
            }
        );

        setTimeout(function () {
            confetti.remove();
        }, durasi * 1000);
    }
}
// =========================
// EFEK KETIK PESAN PEMBUKA
// =========================

const pesanPembuka = document.querySelector(".message");

if (pesanPembuka) {

    const teksAsli = pesanPembuka.innerHTML;

    pesanPembuka.innerHTML = "";

    let i = 0;

    function ketikPesan() {

        if (i < teksAsli.length) {

            pesanPembuka.innerHTML += teksAsli.charAt(i);

            i++;

            setTimeout(ketikPesan, 45);

        }

    }

    ketikPesan();
}