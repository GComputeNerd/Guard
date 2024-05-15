console.log('Extension is running');

scan_btn = document.querySelector(".scanButton");
live_det = false;

toggleMain = document.querySelector(".toggle");
toggleElements = document.querySelectorAll(".toggle *");

offColor = "#546E7A"
onColor = "#42A5F5"

function test() {
    alert("Hi");
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

scan_btn.onclick = test;   
toggleMain.onclick = toggle;