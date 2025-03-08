if (window.screen.width <= 1130) {
    function removeall() {
        $(".cir_border").css("border", "none");
    }

    $(".cir_border").on("click", function () {
        removeall();
        $(this).css({
            "border": "2px solid whitesmoke",
            "border-radius": "20px"
        });
    });
}

// Navbar Hover Effect
$("#about").on("mouseover", function () {
    introAboutLogoTransition();
});

// Light/Dark Mode Toggle
document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.getElementById("checkbox");

    function introAboutLogoTransition() {
        if (typeof $ !== "undefined") {
            $("#about-quad").css({
                top: "70%",
                opacity: "1",
            });
        } else {
            console.error("jQuery is not loaded.");
        }
    }

    function checkDarkMode() {
        if (localStorage.getItem("tourism_website_darkmode") === "true") {
            document.body.classList.add("dark");
            if (checkbox) checkbox.checked = true;
        }
    }
    checkDarkMode();

    if (checkbox) {
        checkbox.addEventListener("change", () => {
            document.body.classList.toggle("dark");
            localStorage.setItem(
                "tourism_website_darkmode",
                document.body.classList.contains("dark")
            );
        });
    } else {
        console.error("Checkbox element not found.");
    }
});

// Scroll-to-Top Button
let mybutton = document.getElementById("upbtn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (mybutton) { // Ensuring mybutton exists before modifying
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Update Navbar While Scrolling
function updateNav() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links li a");

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        
        if (window.screen.width <= 425) {
            if (rect.top <= 1300 && navLinks[index]) {
                navLinks.forEach(navLink => navLink.classList.remove("active"));
                navLinks[index].classList.add("active");
            }
        } else if (window.screen.width >= 425 && window.screen.width <= 768) {
            if (rect.top <= 1250 && navLinks[index]) {
                navLinks.forEach(navLink => navLink.classList.remove("active"));
                navLinks[index].classList.add("active");
            }
        } else {
            if (rect.top <= 1000 && navLinks[index]) {
                navLinks.forEach(navLink => navLink.classList.remove("active"));
                navLinks[index].classList.add("active");
            }
        }
    });
}

window.addEventListener("scroll", updateNav);
