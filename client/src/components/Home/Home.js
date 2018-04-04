import React, { Component } from 'react';
import API from "../../utils/API";
import "./Home.css"

// Home - contains all of the JSX to be rendered on the homepage. This component may contain other smaller components or JSX that renders plain HTML elements. This component should be able to query the NYT API for articles. It displays the results from the API search in a rendered list that displays the article title, publication date, and allows the user to visit an article's url or save the article to the MongoDB.

class Home extends Component {
    
    // state = {
    //     articles: [],
    //     title: "",
    //     date: "",
    //     url: ""
    // };

    // componentDidMount() {
    //     this.handleInputChange();
    // }

    // loadArticles = () => {
    //     API.getArticles()
    //         .then(res => 
    //             this.setState({ articles: res.data, title: "", date: "", url:"" })
    //         )
    //         .catch(err => console.log(err));
    // };

    // handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    // };

    // handleFormSubmit = event => {
    //     event.preventDefault();

    //     API.getArticles()
    //         .then(res => 
    //             this.setState({ articles: res.data, title: "", date: "", url:"" })
    //         )
    //         .catch(err => console.log(err));
    // };

    render() {
        return (
            <div className="top-information">
                <div className="col s12">
                    <div className="header">
                        <h1 className="header-text center-align">New York Times Scrubber</h1>
                    </div>
                </div>
                <div className="col s12">
                    <div className="divider-panel">
                        <div className="divider"></div>
                        <div className="divider-text center-align">Search for and annotate articles from the internet</div>
                        <div className="divider"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s10 offset-s1">
                        <div className="card">
                            <div className="search-panel z-depth-4">
                                <h3 className="search-text center-align card-title">Search</h3>
                                <div className="search-inputs">
                                    <div className="input-field">
                                    {/* if it's a capital letter, it's a custom component */}
                                        <input type="text" id="topic"/>
                                        <label htmlFor="topic">Topic</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="text" id="start-year"/>
                                        <label htmlFor="start-year">Start Year</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="text" id="end-year"/>
                                        <label htmlFor="end-year">End Year</label>
                                    </div>
                                    <div className="center">
                                        <button onClick={this.handleFormSubmit} className="btn waves-efftct search-button"><span className="search-button-text">Search</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;