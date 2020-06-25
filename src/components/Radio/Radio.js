import React from "react";
import "./Radio.css";

const Radio = (props) => {
    const { onClick, size = "size", name = "id", selected = "" } = props;
    return (
        <>
            <input type="radio" id={size} name="clocksize" value={size} onClick={(e) => { onClick(e) }} checked={selected == size} />
            <label for="small">{size}</label>
        </>);
}

export default Radio;