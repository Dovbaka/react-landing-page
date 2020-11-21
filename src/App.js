import React from "react";
import styles from './App.module.css';
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Ecosystem from "./components/Ecosystem/Ecosystem";

function App() {
    return (
        <div>
            <Header/>
            <Ecosystem/>
        </div>
    );
}

export default App;
