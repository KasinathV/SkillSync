/* =========================
   POPUP
========================= */
function openPopup() {
    const popup = document.getElementById("popup");
    if (popup) popup.style.display = "flex";
}

function closePopup() {
    const popup = document.getElementById("popup");
    if (popup) popup.style.display = "none";
}

window.addEventListener("click", function (e) {
    const popup = document.getElementById("popup");
    if (popup && e.target === popup) closePopup();
});

/* =========================
   MATCHMAKING
========================= */
function startMatchmaking() {
    closePopup();

    const loader = document.getElementById("loadingScreen");

    if (loader) {
        loader.style.display = "flex";

        setTimeout(() => {
            window.location.href = "games.html";
        }, 2200);
    }
}

/* =========================
   LOGIN STORAGE
========================= */
function saveLogin(type, username) {
    let history = JSON.parse(localStorage.getItem("loginHistory")) || [];
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const record = {
        type: type,
        username: username,
        time: new Date().toLocaleString()
    };

    history.unshift(record);

    if (!users.find(user => user.username === username)) {
        users.push({
            username: username,
            rank: "ROOKIE"
        });
    }

    localStorage.setItem("loginHistory", JSON.stringify(history));
    localStorage.setItem("users", JSON.stringify(users));
}

/* =========================
   USER LOGIN
========================= */
function userLogin() {
    const username = document.getElementById("username")?.value;

    if (!username || username.trim() === "") {
        alert("Please enter username");
        return;
    }

    localStorage.removeItem("isAdmin");
    localStorage.setItem("currentUser", username);

    saveLogin("User", username);

    alert("Login successful. Redirecting to home page...");

    setTimeout(() => {
        window.location.href = "index.html";
    }, 1200);
}

/* =========================
   ADMIN LOGIN
========================= */
function adminLogin() {
    const username = document.getElementById("username")?.value;
    const password = document.getElementById("password")?.value;

    if (username === "admin" && password === "admin123") {
        localStorage.setItem("isAdmin", "true");
        localStorage.setItem("currentUser", "Admin");

        saveLogin("Admin", username);

        alert("Admin login successful");

        setTimeout(() => {
            window.location.href = "admin.html";
        }, 1000);

    } else {
        alert("Invalid admin credentials");
    }
}

/* =========================
   OAUTH DEMO
========================= */
function oauthLogin(provider) {
    localStorage.removeItem("isAdmin");
    localStorage.setItem("currentUser", provider + " User");

    saveLogin(provider, provider + "_user");

    alert(provider + " login successful");

    setTimeout(() => {
        window.location.href = "index.html";
    }, 1000);
}

/* =========================
   ADMIN PROTECTION
========================= */
function protectAdminPage() {
    if (window.location.pathname.includes("admin.html")) {
        const isAdmin = localStorage.getItem("isAdmin");

        if (isAdmin !== "true") {
            alert("Admin access only");
            window.location.href = "login.html";
        }
    }
}

/* =========================
   HIDE ADMIN NAV
========================= */
function controlAdminButton() {
    const adminLink = document.querySelector('a[href="admin.html"]');
    const isAdmin = localStorage.getItem("isAdmin");

    if (adminLink && isAdmin !== "true") {
        adminLink.parentElement.style.display = "none";
    }
}

/* =========================
   USERNAME IN NAVBAR
========================= */
function updateNavbarUser() {
    const loginNav = document.getElementById("loginNav");
    const currentUser = localStorage.getItem("currentUser");

    if (loginNav && currentUser) {
        loginNav.textContent = currentUser;
    }
}

/* =========================
   ADMIN DASHBOARD
========================= */
function loadAdminData() {
    const userTable = document.getElementById("userTable");
    const historyTable = document.getElementById("historyTable");
    const totalUsers = document.getElementById("totalUsers");
    const totalLogins = document.getElementById("totalLogins");
    const topRank = document.getElementById("topRank");

    if (!userTable || !historyTable) return;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let history = JSON.parse(localStorage.getItem("loginHistory")) || [];

    userTable.innerHTML = "";
    historyTable.innerHTML = "";

    users.forEach((user, index) => {
        userTable.innerHTML += `
            <div class="table-row">
                <span>${user.username}</span>

                <select onchange="updateRank(${index}, this.value)">
                    <option ${user.rank === "ROOKIE" ? "selected" : ""}>ROOKIE</option>
                    <option ${user.rank === "GOLD" ? "selected" : ""}>GOLD</option>
                    <option ${user.rank === "DIAMOND" ? "selected" : ""}>DIAMOND</option>
                    <option ${user.rank === "MASTER" ? "selected" : ""}>MASTER</option>
                    <option ${user.rank === "TITAN" ? "selected" : ""}>TITAN</option>
                </select>
            </div>
        `;
    });

    history.forEach(item => {
        historyTable.innerHTML += `
            <div class="table-row">
                <span>${item.username} (${item.type})</span>
                <span>${item.time}</span>
            </div>
        `;
    });

    if (totalUsers) totalUsers.textContent = users.length;
    if (totalLogins) totalLogins.textContent = history.length;
    if (topRank) topRank.textContent = "TITAN";
}

/* =========================
   UPDATE RANK
========================= */
function updateRank(index, rank) {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    users[index].rank = rank;

    localStorage.setItem("users", JSON.stringify(users));

    loadAdminData();
}

/* =========================
   REVEAL
========================= */
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(item => {
        const top = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 80) {
            item.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

/* =========================
   HERO TYPING
========================= */
function typeHeroText() {
    const target = document.getElementById("typingText");
    if (!target) return;

    const text = "GLOBAL SKILL RANKING";
    let i = 0;

    target.textContent = "";

    function type() {
        if (i < text.length) {
            target.textContent += text.charAt(i);
            i++;
            setTimeout(type, 80);
        }
    }

    type();
}

/* =========================
   CUSTOM CURSOR
========================= */
function initCursor() {
    const cursor = document.createElement("div");
    cursor.classList.add("cursor-glow");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });
}

/* =========================
   INIT
========================= */
window.addEventListener("load", function () {
    protectAdminPage();
    controlAdminButton();
    updateNavbarUser();
    loadAdminData();
    revealOnScroll();
    typeHeroText();
    initCursor();
});

/* =========================
   game launching simulation
========================= */
function launchGame(gameName) {
    const loader = document.getElementById("loadingScreen");

    if (loader) {
        loader.style.display = "flex";

        const loadingText = loader.querySelector("h2");

        if (loadingText) {
            loadingText.textContent = "Launching " + gameName + "...";
        }

        setTimeout(() => {
            if (loadingText) {
                loadingText.textContent = "Connecting to competitive servers...";
            }
        }, 1500);

        setTimeout(() => {
            if (loadingText) {
                loadingText.textContent = "Matchmaking ready.";
            }
        }, 3000);

        setTimeout(() => {
            loader.style.display = "none";

            if (loadingText) {
                loadingText.textContent = "Finding Competitive Match...";
            }
        }, 4500);
    }
}
VanillaTilt.init(document.querySelectorAll(".premium-card, .esport-card, .stat-box, .player-card"), {
    max: 10,
    speed: 400,
    glare: true,
    "max-glare": 0.2
});
/* =========================
   Node JS
========================= */
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, () => {
    console.log("SkillSync running on http://localhost:3000");
});