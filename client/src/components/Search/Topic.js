import React from "react";
import "./search.css";

export const Topic = props => (
    <div className="input-field">
        <input
            type="text"
            id="topic"
            {...props}
        />
        <label htmlFor="topic">Topic</label>
    </div>

);
