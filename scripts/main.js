console.log('Extension is running');
console.log(localStorage);

if (localStorage.getItem('isSetup') === null) {
    localStorage.setItem('live_detection', -1);
    live_det = -1;
    localStorage.setItem('isSetup', 1);
} else {
    live_det = localStorage.getItem('live_detection');
}

scan_btn = document.querySelector(".scanButton");

toggleMain = document.querySelector(".toggle");
toggleElements = document.querySelectorAll(".toggle *");

offColor = "#546E7A";
onColor = "#42A5F5";

scanMain = document.querySelector(".scanButton img");
scanButton = document.querySelector(".scanButton");
scanHint = document.querySelector(".scanHint");
resultText = document.querySelector(".resultText");

mainScanBox = document.querySelector(".mainScanBox");
settingsBox = document.querySelector(".settingsBox");
tlIcon = document.querySelector(".tlIcon");

if (live_det == 1) {
    live_det = -1;
    toggle();
}

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
    console.log(live_det);
    if (live_det == -1) {
        console.log("A");
        for (et of toggleElements) {
            et.style.transform = "translateX(2em)";
            toggleMain.style.backgroundColor = onColor
        }
    } else {
        console.log("HI");
        for (et of toggleElements) {
            et.style.transform = "translateX(-0.5em)";
            toggleMain.style.backgroundColor = offColor
        }
    }
    live_det = -1*live_det;
    console.log(live_det);
    localStorage.setItem('live_detection', live_det);
}

function openSettings() {
    mainScanBox.style.display = 'None';
    settingsBox.style.display = 'flex';
    tlIcon.src = 'res/close.png';
    tlIcon.onclick = closeSettings;
}

function closeSettings() {
    mainScanBox.style.display = 'flex';
    settingsBox.style.display = 'None';
    tlIcon.src = 'res/settings.png';
    tlIcon.onclick = openSettings;
}

scan_btn.onclick = scan;   
toggleMain.onclick = toggle;
tlIcon.onclick = openSettings;