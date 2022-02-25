import React, { Component } from 'react';
import '../css/Board.css';
import Note from './note';
class Board extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="div-board">
                    <div className="row">
                    </div>
                    <Note title="yo" body="sup"/>
                    <Note title="hey" body="hi"/>
                    <Note title="hello" body="hola"/>
                </div>
                <div>
                    <button className="btn btn-success add-button">Add</button>
                </div>
            </div>
        )
    }
}

export default Board;