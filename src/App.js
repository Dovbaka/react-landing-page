import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Ecosystem from "./components/Ecosystem/Ecosystem";
import ResizingEditor from "./components/ResizingEditor/ResizingEditor";
import SecretWeapon from "./components/SecretWeapon/SecretWeapon";
import ImageCropping from "./components/ImageCropping/ImageCropping";
import SecondImageCropping from "./components/SecondImageCropping/SecondImageCropping";

function App() {
    return (
        <div className={"app-wrapper"}>
            <Header/>
            <Ecosystem/>
            <ResizingEditor/>
            <SecretWeapon shadowBox={false}/>
            <ImageCropping/>
            <SecretWeapon shadowBox={true}/>
            <SecondImageCropping/>
        </div>
    );
}

export default App;
