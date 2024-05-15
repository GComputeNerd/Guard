chrome.storage.sync.get('live_detection', function(item) {
    live_det = item.live_detection;

    if (live_det == 1) {
        alert("Live Detection")
    }
});