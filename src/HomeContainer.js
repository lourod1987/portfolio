import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
// import speedTestPreview from './img/typingSpeedTestPreview.jpg';
import finalFrontierPreview from './img/finalFrontierPreview.jpg';
import mythicPreview from './img/mythicPreview.jpg';
import pixelPreview from './img/pixelArtPreview.jpg';
import techAggPreview from './img/techAggPreview.jpg';
import askLibbiePreview from './img/Ask-Libbie-App-preview.png';
import myReadsPreview from './img/Book-Reads-App.png';

class HomeContainer extends Component {
    state = {
        myState: ''
    }

    rand = () => { 
        this.setState( {myState: 'hello'} )
        console.log('cur state: ' + this.state.myState)
    }

    render() {
        return (
            <>
                <HeaderComponent />
                <main className="whole-body">
                    <h2 className="intro-text">
                        <strong>Welcome</strong>
                    </h2>
                    <h2 id="leadin">Proficiencies in:</h2>
                    <ul className="skill-shields">
                    {/*
                        Icons thanks to Font Awesome https://github.com/FortAwesome/Font-Awesome 
                    */}
                        <li><i className="fab fa-html5 html5"></i></li>
                        <li><i className="fab fa-css3-alt css"></i></li>
                        <li><i className="fab fa-js-square js"></i></li>
                    </ul>
                    <section className="skillset">
                        <div className="skill-js">
                            <h2>JavaScript</h2>
                            <ul className="projects">
                                <li>
                                    <a href="https://lourod1987.github.io/Final-Frontierv2/" title="Link to Final Frontier made with OO JS">
                                        <img src={finalFrontierPreview} alt="Preview of Final Frontier game"/>
                                    </a>
                                    <span class="project-label">Final&nbsp;Frontier</span>
                                    <span class="repo-link"><a href="https://github.com/lourod1987/Final-Frontierv2">Github Repository</a></span>
                                </li>
                                <li>
                                    <h2>jQuery</h2>
                                    <a href="https://lourod1987.github.io/mythic-concentration/" title="Link to Matching Game">
                                        <img src={mythicPreview} alt="Preview of Pixel Art Maker project"/>
                                    </a>
                                    <span class="project-label">Mythic&nbsp;Matching&nbsp;Game</span>
                                    <span class="repo-link"><a href="https://github.com/lourod1987/mythic-concentration">Github Repository</a></span>
                                </li>
                                <li>
                                    <a href="https://lourod1987.github.io/pixelart/" title="Link to Pixel Art Project made with jQuery">
                                        <img src={pixelPreview} alt="Preview of Pixel Art Maker project"/>
                                    </a>
                                    <span class="project-label">Pixel&nbsp;Art&nbsp;Project</span>
                                    <span class="repo-link"><a href="https://github.com/lourod1987/pixelart">Github Repository</a></span>
                                </li>
                            </ul>
                        </div>
                        <div className="skill-jquery">
                            <ul className="projects">
                                <h2>React + Redux</h2>
                                <li>
                                    <span role="img" aria-label="Fix in progress">🔧 Fix in Progress 🔧</span>
                                    <a href="https://techagg.netlify.app/" title="Link to TechAgg React + Redux App">
                                        <img src={techAggPreview} alt="Preview of TechAgg App"/>
                                    </a>
                                    <span class="project-label">TechAgg</span>
                                    <span class="repo-link"><a href="https://github.com/lourod1987/techagg">Github Repository</a></span>
                                </li>
                                <h2>React</h2>
                                <li>
                                    <a href="https://ask-libbie.netlify.app/" title="Link to Ask Libbie React App">
                                        <img src={askLibbiePreview} alt="Preview of Ask Libbie App"/>
                                    </a>
                                    <span class="project-label">Ask&nbsp;Libbie&nbsp;App</span>
                                    <span class="repo-link"><a href="https://github.com/lourod1987/ask-libbie-frontend">Github Repository</a></span>
                                </li>
                                <li>
                                    <a href="https://myreadsapp.netlify.app/" title="Link to My Reads React App">
                                        <img src={myReadsPreview} alt="Preview of My Reads App"/>
                                    </a>
                                    <span class="project-label">My&nbsp;Reads&nbsp;App</span>
                                    <span class="repo-link"><a href="https://github.com/lourod1987/MyReads">Github Repository</a></span>
                                </li>
                            </ul>
                        </div>
                        </section>
                </main>
                <FooterComponent />
            </>
        )
    }
}

export default HomeContainer;