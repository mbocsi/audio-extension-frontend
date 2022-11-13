/*global chrome*/

import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

import Loading from "./components/Loading";
import Beginning from "./components/Beginning";
import Main from "./components/Main";

function App() {
    const [response, setResponse] = useState("");
    const [stage, setStage] = useState("");
    const showStage = (stage) => {
        if (stage == "beginning") {
            return <Beginning sendMessage={sendTestMessage} />;
        } else if (stage == "main") {
            return <Main />;
        }

        return <Loading />;
    };
    const switchState = (stage) => {
        if (stage == "beginning") {
            return "loading";
        } else if (stage == "loading") {
            return "main";
        } else {
            return "beginning";
        }
    };
    function sendTestMessage() {
        chrome.tabs.query(
            { active: true, currentWindow: true },
            function (tabs) {
                console.log(tabs);
                chrome.tabs.sendMessage(
                    tabs[0].id,
                    { greeting: "hello" },
                    function (response) {
                        console.log(response);
                        setResponse(response);
                    }
                );
            }
        );
    }

    return (
        <div className="App">
            <button
                onClick={() => {
                    console.log(switchState(stage));
                    setStage(switchState(stage));
                }}
                style={{ zIndex: 10 }}
            >
                {" "}
                Here I am{" "}
            </button>
            {showStage(stage)}
        </div>
    );
}

export default App;
