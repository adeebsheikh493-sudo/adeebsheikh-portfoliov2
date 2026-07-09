const modal = document.getElementById("videoModal");
const player = document.getElementById("portfolioPlayer");
const closeBtn = document.getElementById("closeVideo");

// ---------- Fullscreen Video ----------

document.querySelectorAll(".card").forEach((card) => {

    const preview = card.querySelector(".projectVideo");

    // Hover preview
    card.addEventListener("mouseenter", () => {

        preview.currentTime = 0;
        preview.play();

    });

    card.addEventListener("mouseleave", () => {

        preview.pause();
        preview.currentTime = 0;

    });

    // Fullscreen player
    card.addEventListener("click", () => {

        player.src = card.dataset.video;

        modal.style.display = "flex";

        player.play();

    });

});

// Close button

closeBtn.onclick = () => {

    player.pause();

    player.src = "";

    modal.style.display = "none";

};

// Click outside

modal.onclick = (e) => {

    if (e.target === modal) {

        player.pause();

        player.src = "";

        modal.style.display = "none";

    }

};

// ESC key

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        player.pause();

        player.src = "";

        modal.style.display = "none";

    }

});