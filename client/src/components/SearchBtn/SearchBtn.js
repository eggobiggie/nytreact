import React from "react";
import "./SearchBtn.css";

const SearchBtn = props => (
    <div className="center">
         <button className="btn waves-efftct search-button" {...props}><span className="search-button-text">Search</span></button>
    </div>
);

export default SearchBtn;