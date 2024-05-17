chrome.storage.sync.get(["live_detection", "manual_sensitivity", "live_sensitivity"], function(item) {
    live_det = item.live_detection;
    manual_sens = item.manual_sensitivity;
    live_sens = item.live_sensitivity;

    if (live_det == 1) {
        setTimeout(()=> {
            checkPercentage();
        }, 3000);
    }
});

function getReading() {
    if ((manual_sens == 1) && (live_sens == 2)) {
        return Math.floor(Math.random()*10) + 90;
    } else if ((manual_sens == 1) && (live_sens == 3)) {
        return Math.floor(Math.random()*10) + 5;
    } else {
        return Math.floor(Math.random()*100);
    }
}

function checkPercentage() {
    const flashDiv = document.createElement("div");

    fetch(chrome.runtime.getURL("static/flash.txt"))
        .then((res) => res.text())
        .then((text) => {
            flashHtml = text;
            img = chrome.runtime.getURL("res/Guard_Text.png");
            console.log(flashHtml);
            console.log("Hi");
            console.log(img);
            flashHtml = flashHtml.replace("$#$", getReading());
            flashHtml = flashHtml.replace("$IMG$", img);
            console.log(flashHtml);
            flashDiv.innerHTML = flashHtml;
            flashDiv.onclick = () => {
                flashDiv.remove();
            };
            document.body.appendChild(flashDiv);
        });
}