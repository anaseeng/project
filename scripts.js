document.addEventListener("DOMContentLoaded", () => {
    // Event listeners for navigation buttons
    const createDocBtn = document.getElementById("create-doc-btn");
    const backToTasksBtn = document.getElementById("back-to-tasks-btn");

    if (createDocBtn) {
        createDocBtn.addEventListener("click", () => {
            window.location.href = "createNewDoc.html";
        });
    }

    if (backToTasksBtn) {
        backToTasksBtn.addEventListener("click", () => {
            window.location.href = "tasksmanager.html";
        });
    }

    // Form handling for register and login
    const registerForm = document.getElementById("register-form");
    const loginForm = document.getElementById("login-form");

    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("User already exists!");
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            window.location.href = "tasksmanager.html";
        });
    }
    function switchBackground() {
        const body = document.body;
        if (body.style.backgroundColor === "brown") {
            body.style.backgroundColor = "#4E342E"; // Dark Brown
        } else {
            body.style.backgroundColor = "brown";
        }
    }
    
});
