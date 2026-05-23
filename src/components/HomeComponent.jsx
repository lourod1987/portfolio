// import { useState } from 'react';
import finalFrontierPreview from '../assets/finalFrontierPreview.jpg';
import mythicPreview from '../assets/mythicPreview.jpg';
import techAggPreview from '../assets/techAggPreview.jpg';
import spotifyCreationPlaylistPreview from '../assets/spotifyCreationPlaylistPreview.png';

function HomeComponent() {


  return (
    <main className="whole-body sm:min-h-[600px] min-h-[1600px]">
      <div className='!pl-6 !pt-4'>
        <h2 className="intro-text">
          <strong>Welcome</strong>
        </h2>
        <h2 id="leadin">Proficiencies in:</h2>
        <ul className="skill-shields">
          {/*Icons thanks to Font Awesome https://github.com/FortAwesome/Font-Awesome*/}
          <li><i className="fab fa-html5 html5"></i></li>
          <li><i className="fab fa-css3-alt css"></i></li>
          <li><i className="fab fa-js-square js"></i></li>
        </ul>
      </div>
      <section className="!mb-4 skillset">
      <div className="skill-jquery">
          <ul className="projects">
          <h2 className='font-bold'>React</h2>
            <li>
              <span>⭐ New ⭐</span>
              <a href="https://spotify-playlist-creation.netlify.app/authorize" title="Link Spotify Playlist Creation React App">
                <img src={spotifyCreationPlaylistPreview} alt="Preview of Spotify Playlist Creation App"/>
              </a>
              <span class="project-label">Spotify&nbsp;Creation&nbsp;Playlist&nbsp;App</span>
              <span class="repo-link"><a href="https://github.com/lourod1987/jammming" target="_blank">Github Repository</a></span>
            </li>
            <h2 className='font-bold'>React + Redux</h2>
            <li>
              <span role="img" aria-label="Fix in progress">🔧 Improvements Incoming 🔧</span>
              <a href="https://techagg.netlify.app/" title="Link to TechAgg React + Redux App">
                <img src={techAggPreview} alt="Preview of TechAgg App"/>
              </a>
              <span class="project-label">TechAgg</span>
              <span class="repo-link"><a href="https://github.com/lourod1987/techagg" target="_blank">Github Repository</a></span>
            </li>
          </ul>
        </div>
        <div className="skill-js">
          <h2 className='font-bold'>JavaScript</h2>
          <ul className="projects">
            <li>
              <a href="https://lourod1987.github.io/Final-Frontierv2/" title="Link to Final Frontier made with OO JS">
                <img src={finalFrontierPreview} alt="Preview of Final Frontier game"/>
              </a>
              <span class="project-label">Final&nbsp;Frontier</span>
              <span class="repo-link"><a href="https://github.com/lourod1987/Final-Frontierv2" target="_blank">Github Repository</a></span>
            </li>
            <li>
              <h2>jQuery</h2>
              <a href="https://lourod1987.github.io/mythic-concentration/" title="Link to Matching Game">
                <img src={mythicPreview} alt="Preview of Pixel Art Maker project"/>
              </a>
              <span class="project-label">Mythic&nbsp;Matching&nbsp;Game</span>
              <span class="repo-link"><a href="https://github.com/lourod1987/mythic-concentration" target="_blank">Github Repository</a></span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default HomeComponent;