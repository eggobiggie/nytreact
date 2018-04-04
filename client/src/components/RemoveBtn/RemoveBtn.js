import React from "react";
import "./RemoveBtn.css";

const RemoveBtn = props => (
    <button className="btn remove-button right" {...props}>
        <span className="remove-button-text">Remove</span>
    </button>
);

export default RemoveBtn;
