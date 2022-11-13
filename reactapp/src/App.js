/*global chrome*/


import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';

=======
import Loading from './components/Loading';
import Beginning from './components/Beginning';
>>>>>>> 80a2cb2a2235da23fd56a3cc7e992ffa59586e5f
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
<<<<<<< HEAD
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
     
          Learn React
          <button onClick={sendTestMessage}>test</button>
          {response}

      </header>
=======
      <Main></Main>
      <Loading></Loading>
      <Beginning></Beginning>
>>>>>>> 80a2cb2a2235da23fd56a3cc7e992ffa59586e5f
    </div>
  );
}

export default App;
