import React from "react";
import "./Radio.css";

const Radio = (props) => {
    const { onClick, size = "size", name = "id", selected = "" } = props;
    return (

        <li id={size} onClick={() => onClick(size)}>
            <input type="radio" name="clocksize" value={size} checked={selected == size} />
            <label htmlFor={size}>{size}</label>
            <div className="check"><div className="inside"></div></div>
        </li >

    );
}

export default Radio;