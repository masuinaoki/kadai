let clickCount = 0;
const maxClicks = 10;

document.getElementById("crackButton").addEventListener("click", function () {
    clickCount++;
    if (clickCount >= maxClicks) {
        document.getElementById("egg").style.backgroundImage = "url('broken_egg.png')"; 
    }
});
