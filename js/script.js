document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       IMAGE MODAL
    ========================= */

    const image = document.getElementById("profileImage");
    const modal = document.getElementById("modal");
    const closeBtn = document.getElementById("closeBtn");

    if (image && modal && closeBtn) {

        image.addEventListener("click", function () {
            modal.classList.add("show");
        });

        closeBtn.addEventListener("click", function () {
            modal.classList.remove("show");
        });
    }


    /* =========================
       CONTACT FORM
    ========================= */

    const form = document.getElementById("contactForm");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const confirmSubmit = confirm(
                "Are you sure you want to submit this form?"
            );

            if (confirmSubmit) {
                alert("Message sent successfully!");
                form.reset();
            }

        });
    }

});