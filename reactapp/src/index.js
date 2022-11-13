<<<<<<< HEAD
/*global chrome*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <App />
);

=======
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ChakraProvider>
        <App />
    </ChakraProvider>
);
>>>>>>> 80a2cb2a2235da23fd56a3cc7e992ffa59586e5f
