import React from "react";
import "./search.css";

export const EndYear = props => (
    <div className="input-field">
        <input
            type="text"
            id="end-year"
            {...props}
        />
        <label htmlFor="end-year">End Year</label>
    </div>
);