/*global chrome*/

import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

import Loading from "./components/Loading";
import Beginning from "./components/Beginning";
import Main from "./components/Main";
import Fading from "./components/Fading";

function App() {
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
                    changeState={() => {
                        setStage(switchState(stage));
                        console.log(stage);
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
            return Stages.Loading;
        } else if (stage === Stages.Loading) {
            return Stages.Fading;
        } else if (stage === Stages.Fading) {
            return Stages.Done;
        } else {
            return Stages.Beginning;
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
