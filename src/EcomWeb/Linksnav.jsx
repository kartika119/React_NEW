import React from 'react';
import './Linksnav.css';
export default class Linknav extends React.Component {

    on() {
        document.getElementById("overlay").style.display = "block";
    }

    off() {
        document.getElementById("overlay").style.display = "none";
    }l
   
    show(){
        console.log('helloooooooooooooooo')
    }

    render() {



        return (
            <>
                <div className="main-nav">
                    <div className="fixx second-nav">
                        
                        <div className="wrapper">
                            <ul id="otis">
                                <li >
                                    <a href="/"   onClick={this.on} >Mobile&More</a>
                                    <div id="overlay" onClick={this.off}>
                                        <div id="text">Overlay Text</div>
                                    </div>
                                </li>

                                <li>
                                    <a href="/"   onClick={this.show}>Mens</a>
                                </li>
                                <li>
                                    <a href="/">Home Decore</a>
                                </li>
                                <li>
                                    <a href="/">Womens</a>
                                </li>
                                <li>
                                    <a href="/">Childrens</a>
                                </li>
                                <li>
                                    <a href="/">Sports</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                {/* 
                <div id="overlay" onClick={this.off}>
                    <div id="text">Overlay Text</div>
                </div> */}

            </>
        )
    }
}