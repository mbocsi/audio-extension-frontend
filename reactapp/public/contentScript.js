chrome.runtime.onConnect.addListener((port) => {
    var disconnected = false;
    port.onDisconnect.addListener(() => {
        disconnected = true;
    });
    port.onMessage.addListener((message) => {
        if (message.command === "capture") {
            console.log(message);
            navigator.mediaDevices
                .getUserMedia({
                    audio: true,
                    audio: {
                        mandatory: {
                            chromeMediaSource: "tab",
                            chromeMediaSourceId: message.streamId,
                        },
                    },
                })
                .then((stream) => {
                    const recorder = new MediaRecorder(stream);
                    let chunks = [];
                    recorder.ondataavailable = (event) => {
                        chunks.push(event.data);
                        let blob = new Blob(chunks, {
                            type: "audio/webm; codecs=opus",
                        });
                        if (!disconnected) {
                            var reader = new FileReader();
                            reader.readAsDataURL(blob);
                            reader.onloadend = function () {
                                var base64data = reader.result;
                                port.postMessage({ data: base64data });
                            };
                        } else {
                            recorder.stop();
                        }
                    };
                    recorder.start(500);
                });
        }
    });
});
