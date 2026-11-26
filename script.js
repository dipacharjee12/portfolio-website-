// Light and Dark Mode
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.innerHTML = "🌙";
    } else {
        themeBtn.innerHTML = "☀️";
    }

});

// Welcome Message
function showMessage() {
    alert("Welcome to my Portfolio Website! Thank you for visiting.");
}

