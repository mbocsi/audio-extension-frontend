import logo from "./logo.svg";
import "./App.css";
import Loading from "./components/Loading";
import Beginning from "./components/Beginning";
import Main from "./components/Main";
import { useState } from "react";
function App() {
    return (
        <div className="App">
            <Main></Main>
            <Loading></Loading>
            <Beginning></Beginning>
        </div>
    );
}

export default App;
