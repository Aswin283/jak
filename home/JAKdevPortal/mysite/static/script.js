const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");
      const mode=sessionStorage.getItem("logged_in");


let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
        updateLogo("light"); // Update the logo for dark mode
    } else {
        localStorage.setItem("mode", "light");
        updateLogo("dark"); // Update the logo for light mode
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
})

function updateLogo(mode) {
    const logoImage = document.getElementById("image");
    
    if (mode === "dark") {
        logoImage.src = "/static/Images/logomain.png"; // Replace with your dark mode logo path
    } else {
        logoImage.src = "/static/Images/logomainlight.png"; // Replace with your light mode logo path
    }
}
