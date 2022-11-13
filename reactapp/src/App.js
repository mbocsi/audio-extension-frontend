/*global chrome*/

import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import io from 'socket.io-client';

import Loading from "./components/Loading";
import Beginning from "./components/Beginning";
import Main from "./components/Main";
function App() {
  
    var socket = io("https://cheesehacks-backend.herokuapp.com/");
    function openConnection() {
        chrome.tabs.query(
            { active: true, currentWindow : true },
            function (tabs) {
              console.log(tabs);
              let port =  chrome.tabs.connect(tabs[0].id, {name:"stream"});
              chrome.tabCapture.getMediaStreamId({consumerTabId : tabs[0].id} , (capid)=>{
                port.postMessage({command: "capture", streamId: capid});
              })
              port.onMessage.addListener((msg) => {
                 
                  //setSocket(io("http://localhost/"));
                  console.log(msg);
                  socket.send(msg);
              });
          
            }
        );
    }

    return (
        <div className="App">

                      <button onClick={openConnection}>HELLO</button>
{/* 
            <Main></Main>
            <Loading></Loading>
            <Beginning></Beginning> */}
        </div>
    );
}

export default App;
