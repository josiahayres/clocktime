
import React from "react";
import "./RadioGroup.css";

const RadioGroup = (props) => {
    const { children } = props;
    return (
        <div className="container">
            <ul>
                {children}
            </ul>
        </div>

    );
}

export default RadioGroup;