/*global chrome*/

import "./App.css";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

import Loading from "./components/Loading";
import Beginning from "./components/Beginning";
import Main from "./components/Main";

function App() {
    var socket = null;
    useEffect(() => {
        socket = io("https://cheesehacks-backend.herokuapp.com/");
        socket.on("session", ({ sessionID }) => {
            localStorage.setItem("sessionID", sessionID);
        });
    }, []);
    const Stages = {
        Beginning: "Beginning",
        Loading: "Loading",
        Fading: "Fading",
        Done: "Done",
    };
    const [response, setResponse] = useState("");
    const [stage, setStage] = useState(Stages.Beginning);
    const showStage = (stage) => {
        if (stage === Stages.Beginning) {
            return (
                <Beginning
                    sendMessage={() => {
                        switchState(stage);
                        sendTestMessage();
                    }}
                />
            );
        } else if (stage === Stages.Fading) {
            return <Loading fading={true} />;
        } else if (stage === Stages.Done) {
            return <Main />;
        }

        return <Loading fading={false} />;
    };
    const switchState = (stage) => {
        if (stage === Stages.Beginning) {
            setStage(Stages.Loading);
        } else if (stage === Stages.Loading) {
            setStage(Stages.Fading);
            setTimeout(() => setStage(Stages.Done), 1200);
        } else if (stage === Stages.Fading) {
            setStage(Stages.Done);
        } else {
            setStage(Stages.Beginning);
        }
    };
    function sendTestMessage() {
        chrome.tabs.query(
            { active: true, currentWindow: true },
            function (tabs) {
                console.log(tabs);
                let port = chrome.tabs.connect(tabs[0].id, { name: "stream" });
                chrome.tabCapture.getMediaStreamId(
                    { consumerTabId: tabs[0].id },
                    (capid) => {
                        port.postMessage({
                            command: "capture",
                            streamId: capid,
                        });
                    }
                );
                port.onMessage.removeListener();
                port.onMessage.addListener((msg) => {
                    setStage(Stages.Loading);
                    //setSocket(io("http://localhost/"));
                    console.log(msg);
                    socket.send(msg);
                });
            }
        );
    }

    return (
        <div className="App">
            <button
                onClick={() => {
                    switchState(stage);
                }}
                style={{ zIndex: 10 }}
            >
                {" "}
                Transition{" "}
            </button>
            <div>S.P.E.D.</div>
            {showStage(stage)}
        </div>
    );
}

export default App;
