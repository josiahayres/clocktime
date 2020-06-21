import React from "react";
import "./Toggle.css";

const Toggle = (props) => {
    const { onClick, label = "", checked = false } = props;
    return (
        <div className="toggleContainer">
            <p>{label}</p>
            <label className="switch" >
                <input type="checkbox" checked={checked} onChange={onClick} />
                <span className="slider round"></span>
            </label>
        </div>);
}

export default Toggle;