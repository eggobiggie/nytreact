import React from "react";
import "./search.css";

export const StartYear = props => (
    <div className="input-field">
        <input
            type="text"
            id="start-year"
            {...props}
        />
        <label htmlFor="start-year">Start Year</label>
    </div>
);
