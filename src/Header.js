import React from 'react';
import TitleImage from './assets/TitleImage.png'
import "./Header.css";

function Header() {
    return (
            <div className="score-board">
                <div className="title">
                    <img src={TitleImage} alt="title" />
                </div>
                <div className="score">
                    <p>SCORE</p>
                    <h1>0</h1>
                </div>
            </div>
    )
}

export default Header;
