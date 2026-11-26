/* =================================
   DIP ACHARJEE - PORTFOLIO JAVASCRIPT
================================= */

// 1. Light and Dark Mode

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            themeBtn.innerHTML = "🌙 Dark Mode";

        } else {

            themeBtn.innerHTML = "☀️ Light Mode";

        }

    });

}


// 2. Welcome Message

function showMessage() {

    alert(
        "Welcome to Dip Acharjee's Portfolio! 🚀\n\nThank you for visiting my website.\nHave a wonderful day!"
    );

}


// 3. Smooth Navigation

document.querySelectorAll('a[href^="#"]').forEach(function(link) {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


