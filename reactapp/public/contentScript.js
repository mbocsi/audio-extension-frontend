

chrome.runtime.onConnect.addListener((port) =>{
    var disconnected = false;
    port.onDisconnect.addListener(()=>{ disconnected = true;})
    port.onMessage.addListener((message)=>{
    if(message.command === "capture"){
        console.log(message);
        navigator.mediaDevices.getUserMedia(
            {audio: true,
                audio: {
                    mandatory : {
                        chromeMediaSource: 'tab',
                        chromeMediaSourceId: message.streamId
                    }

                }
            
            
            }).then(
        (stream)=>{
          new Audio().srcObject = stream;

            

                const recorder = new MediaRecorder(stream);
                recorder.ondataavailable = (event) => {
                    const blob = event.data;  
                    console.log({data: blob});
                    if(!disconnected){
                        var reader = new FileReader();
                        reader.readAsDataURL(blob); 
                        reader.onloadend = function() {
                            var base64data = reader.result;                
                            port.postMessage({data: base64data});
                        }
                    }
                    else{
                        recorder.stop();
                    }
                };
                recorder.start(500);
            }
          )
    }
});

});
