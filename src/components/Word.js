import React, { Component } from "react";
import fetchRandomWord from "../api/getWords.js";

import "./Word.css";

export default class Word extends Component {
    constructor(props) {
        super(props);
        this.state = { word: null };
    }

    async componentDidMount() {
        const word = await fetchRandomWord();
        this.setState({ word });
    }

    render() {
        if (!this.state.word) return <h1>Loading...</h1>;
        return (
        <div className="card">
            {/* <img src={this.state.pokemon.sprites.front_default} alt="" /> */}
            <div className="container">
                <h1>{this.state.word.word}</h1>
            </div>
        </div>
        );
    }
}
