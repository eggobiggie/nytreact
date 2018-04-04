import React from "react";
import "./SaveBtn.css";

const SaveBtn = props => (
    <button className="btn save-button right"{...props}>
        <span className="save-button-text">Save</span>
    </button>
);

export default SaveBtn;