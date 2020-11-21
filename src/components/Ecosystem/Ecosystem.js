import React from "react";
import "./Ecosystem.css"
import BrandCircle from "./BrandCircle/BrandCircle";
import tmpImage from "../../assets/images/TempImage.png";

export default function Ecosystem() {
    return <div>
        <div className={"ecosystemTitle"}>
            <h2>An All-in-one Creative Ecosystem</h2>
            <h3>Detect, decode, and transform nuances in your creatives to widen its impact with the next-gen Pyxis
                creative intelligence.
            </h3>
        </div>
        <div className={"ecoDiagramContainer"}>
            <img src={tmpImage} alt={"temp"}/>
        </div>
    </div>
}
