console.log('Extension is running');

scan_btn = document.querySelector(".scanButton");
live_det = false;

toggleMain = document.querySelector(".toggle");
toggleElements = document.querySelectorAll(".toggle *");

offColor = "#546E7A";
onColor = "#42A5F5";

scanMain = document.querySelector(".scanButton img");
scanButton = document.querySelector(".scanButton");
scanHint = document.querySelector(".scanHint");
resultText = document.querySelector(".resultText");

function scan() {
    resultText.innerHTML = "";
    scanMain.src = "res/loading-1.gif";
    scanButton.style.opacity = 0.75;
    scanMain.style.display = 'block';
    scanHint.innerHTML = "Scanning..";

    setTimeout(() => {
        result = Math.floor(Math.random() * 100);
        console.log(result);
        scanMain.style.display = 'None';
        resultText.innerHTML = result + '%';
        scanButton.style.opacity = 1;
        scanHint.innerHTML = "Press To Scan";
    },4000);
}


function toggle() {
    if (!live_det) {
        for (et of toggleElements) {
            et.style.transform = "translateX(2em)";
            toggleMain.style.backgroundColor = onColor
        }
    } else {
        for (et of toggleElements) {
            et.style.transform = "translateX(-0.5em)";
            toggleMain.style.backgroundColor = offColor
        }
    }
    live_det = !live_det;
}

scan_btn.onclick = scan;   
toggleMain.onclick = toggle;