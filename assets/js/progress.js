const progress = document.querySelector(".progress-ring.circle"),
    radius = progress.r.baseVal.value,
    circumference = radius * 2 * Math.PI;

progress.style.strokeDasharray = circumference;
progress.style.strokeDashoffset = circumference;

function setProgress(percent) {
    const offset = circumference - (percent / 100) * circumference;
    progress.style.strokeDashoffset = offset;
}