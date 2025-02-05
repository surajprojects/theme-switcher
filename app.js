const btnSwitch = document.querySelector("#btnSwitch");
const mainBody = document.querySelector("#mainBody");

let day = true;

function restoreTheme() {
    if (localStorage.getItem("dayTheme") === "true") {
        mainBody.className = "dayBody";
        btnSwitch.className = "dayBtnSwitch";
        btnSwitch.textContent = "Night";
    }
    else {
        mainBody.className = "nightBody";
        btnSwitch.className = "nightBtnSwitch";
        btnSwitch.textContent = "Day";
        day = false;
    }
};

restoreTheme();

function toggleTheme() {
    if (day) {
        mainBody.className = "nightBody";
        btnSwitch.className = "nightBtnSwitch";
        btnSwitch.textContent = "Day";
        day = false;
    }
    else {
        mainBody.className = "dayBody";
        btnSwitch.className = "dayBtnSwitch";
        btnSwitch.textContent = "Night";
        day = true;
    }
};

btnSwitch.addEventListener("click", function () {
    toggleTheme();
    localStorage.setItem("dayTheme", day);
});