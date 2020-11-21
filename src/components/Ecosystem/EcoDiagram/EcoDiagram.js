import React from "react";
import "./BrandCircle.css"

export default function EdoDiagram() {
    return <div className="ecoContainer">
        <div className="sideElems">
            <div className="circle">
                <div className="firstC"></div>
            </div>
            <div className="smallCircle"></div>
            <div className="smallCircle"></div>
        </div>
        <div className="mainCircle"></div>
        <div className="sideElems last">
            <div className="smallCircle"></div>
            <div className="smallCircle"></div>
            <div className="smallCircle"></div>
        </div>
    </div>
}
