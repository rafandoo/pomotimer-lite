const progress = document.querySelector(".progress-ring.circle"),
    radius = progress.r.baseVal.value,
    circumference = radius * 2 * Math.PI;

progress.style.strokeDasharray = circumference;
progress.style.strokeDashoffset = circumference;

/**
 * The function takes a percentage as an argument and sets the stroke-dashoffset of the progress circle
 * to the circumference of the circle minus the percentage of the circumference.
 * @param percent - The percentage of the circle that should be filled.
 */
function setProgress(percent) {
    const offset = circumference - (percent / 100) * circumference;
    progress.style.strokeDashoffset = offset;
}