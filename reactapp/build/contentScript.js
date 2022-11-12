(() => {
    let test;
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type, value, videoId } = obj;
        console.log(videoId);
        console.log(test);
    });
})();
