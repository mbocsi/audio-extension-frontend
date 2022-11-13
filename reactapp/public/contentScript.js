
const messagesFromReact = (message,sender,response) => {
    response('Hello from content.js');


}

chrome.runtime.onMessage.addListener(messagesFromReact);
