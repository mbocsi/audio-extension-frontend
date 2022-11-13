/*global chrome*/


import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

import Loading from './components/Loading';
import Beginning from './components/Beginning';
import Main from './components/Main'
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
      <Main></Main>
      <Loading></Loading>
      <Beginning></Beginning>
    </div>
  );
}

export default App;
