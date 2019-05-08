import React, { Component } from 'react';
import HeaderNav from './HeaderNav';
import Footer from './Footer';
import collabPreview from '../../img/GwGPreview.jpg';
import speedTestPreview from '../../img/typingSpeedTestPreview.jpg';
import finalFrontierPreview from '../../img/finalFrontierPreview.jpg';
import mythicPreview from '../../img/mythicPreview.jpg';
import pixelPreview from '../../img/pixelArtPreview.jpg';
import techAggPreview from '../../img/techAggPreview.jpg';
import askLibbiePreview from '../../img/Ask-Libbie-App-preview.png';
import myReadsPreview from '../../img/Book-Reads-App.png';

class HomePage extends Component {
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
        <HeaderNav />
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
            <div className="skill-html">
                <h2>Collaboration</h2>
                <ul className="projects">
                  <li>
                    <a href="https://goo.gl/tiUrxH" title="Link to Collaboration project" target="_blank" rel="noopener noreferrer">
                      <img src={collabPreview} alt="Preview of Collaboration project"/>
                    </a>Grow with Google Scholar Project
                  </li>
                </ul>
            </div>
            <div className="skill-js">
              <h2>JavaScript</h2>
              <ul className="projects">
                <li>*New*
                  <a href="https://lourod1987.github.io/Final-Frontierv2/" title="Link to Final Frontier made with OO JS">
                    <img src={finalFrontierPreview} alt="Preview of Final Frontier game"/>
                  </a>Final&nbsp;Frontier
                </li>
                <li>
                  <h2>jQuery</h2>
                  <a href="https://lourod1987.github.io/mythic-concentration/" title="Link to Matching Game">
                    <img src={mythicPreview} alt="Preview of Pixel Art Maker project"/>
                  </a>Mythic&nbsp;Matching&nbsp;Game
                </li>
                <li>
                  <a href="https://lourod1987.github.io/pixelart/" title="Link to Pixel Art Project made with jQuery">
                    <img src={pixelPreview} alt="Preview of Pixel Art Maker project"/>
                  </a>Pixel&nbsp;Art&nbsp;Project
                </li>
              </ul>
            </div>
            <div className="skill-jquery">
              <ul className="projects">
                <h2>React + Redux</h2>
                <li>*New*
                  <a href="https://techagg.netlify.com/" title="Link to TechAgg React + Redux App">
                    <img src={techAggPreview} alt="Preview of TechAgg App"/>
                  </a>TechAgg
                </li>
                <h2>React</h2>
                <li>
                  <a href="https://ask-libbie.netlify.com/" title="Link to Ask Libbie React App">
                    <img src={askLibbiePreview} alt="Preview of Ask Libbie App"/>
                  </a>Ask&nbsp;Libbie&nbsp;App
                </li>
                <li>
                  <a href="https://myreadsapp.netlify.com/" title="Link to My Reads React App">
                    <img src={myReadsPreview} alt="Preview of My Reads App"/>
                  </a>My&nbsp;Reads&nbsp;App
                </li>
              </ul>
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }
}

export default HomePage;