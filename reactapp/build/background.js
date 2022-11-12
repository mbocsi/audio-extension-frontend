chrome.tabs.onUpdated.addListener((tabId, tab) => {
    console.log(tab);
    if (tab.url) {
        console.log(tab.url);

        chrome.tabs.sendMessage(tabId, {
            type: "NEW",
            videoId: "test",
        });
    }
});

chrome.action.onClicked.addListener(async (tab) => {});
