var actionBtn = document.querySelector("#actionBtn"),
    actionIcon = document.querySelector("#actionIcon");

function changeBtn() {
    console.log("changeBtn");
    if (actionIcon.classList.contains("fa-play")) {
        actionIcon.classList.remove("fa-play");
        actionIcon.classList.add("fa-pause");
    } else {
        actionIcon.classList.remove("fa-pause");
        actionIcon.classList.add("fa-play");
    }
}

actionBtn.addEventListener("click", changeBtn);