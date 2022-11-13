/*global chrome*/


import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [response,setResponse] = useState("");

   function sendTestMessage(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      console.log(tabs);
      chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
        console.log(response);
        setResponse(response);
      });
    });
  }
    



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
     
          Learn React
          <button onClick={sendTestMessage}>test</button>
          {response}

      </header>
    </div>
  );
}

export default App;
