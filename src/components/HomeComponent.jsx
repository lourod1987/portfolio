import { useState } from 'react';
import finalFrontierPreview from '../assets/finalFrontierPreview.jpg';
import mythicPreview from '../assets/mythicPreview.jpg';
import techAggPreview from '../assets/techAggPreview.jpg';
import spotifyCreationPlaylistPreview from '../assets/spotifyCreationPlaylistPreview.png';

function HomeComponent() {
  const [opacity, setOpacity] = useState([0, 0, 0, 0]);

  const overlay = {
    position: 'absolute',
    bottom: 0,
    left: 16,
    background: 'rgba(0, 0, 0, 0.5)', /* Black see-through */
    color: '#f1f1f1',
    width: '90%',
    transition: '.5s ease',
    opacity: 0,
    fontSize: 18,
    padding: 20,
    textAlign: 'center',
    borderRadius: 50,
  };

  const handleMouseEnter = (arrayPosition) => {
    const newArray = [0, 0, 0, 0];
    newArray[arrayPosition] = 1;
    console.log(`NEW ARRAY: ${newArray}`);
    setOpacity(newArray);
  };

  const handleMouseLeave = (arrayPosition) => {
    const newArray = [0, 0, 0, 0];
    newArray[arrayPosition] = 0;
    console.log(`NEW ARRAY: ${newArray}`);
    setOpacity(newArray);
  };

  return (
    <main className="whole-body sm:min-h-[600px] min-h-[1600px]">
      <div className='pl-6! pt-4!'>
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
      <section className="mb-4! skillset">
      <div className="skill-jquery p-10!">
          <h2 className='font-bold underline text-xl'>React</h2>
          <ul className="projects">
            <li>
              <span>⭐ New ⭐</span>
              <a
                href="https://spotify-playlist-creation.netlify.app/authorize"
                title="Link Spotify Playlist Creation React App"
                onMouseEnter={() => handleMouseEnter(0)}
                onMouseLeave={() => handleMouseLeave(0)}
              >
                <div className='relative'>
                  <img className='block m-auto!' src={spotifyCreationPlaylistPreview} alt="Preview of Spotify Playlist Creation App"/>
                  <div className='overlay' style={{...overlay, opacity: opacity[0]}}>Click to View Project</div>
                </div>
              </a>
              <span className="project-label">Spotify&nbsp;Creation&nbsp;Playlist&nbsp;App</span>
              <span className="repo-link"><a href="https://github.com/lourod1987/jammming" target="_blank">Github Repository</a></span>
            </li>
            <h2 className='font-bold'>React + Redux</h2>
            <li>
              <span role="img" aria-label="Fix in progress">🔧 Improvements Incoming 🔧</span>
              <a
                href="https://techagg.netlify.app/"
                title="Link to TechAgg React + Redux App"
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={() => handleMouseLeave(1)}
              >
                <div className='relative'>
                  <img className='block m-auto!' src={techAggPreview} alt="Preview of TechAgg App"/>
                  <div className='overlay' style={{...overlay, opacity: opacity[1]}}>Click to View Project</div>
                </div>
              </a>
              <span className="project-label">TechAgg</span>
              <span className="repo-link"><a href="https://github.com/lourod1987/techagg" target="_blank">Github Repository</a></span>
            </li>
          </ul>
        </div>
        <div className="skill-js p-10!">
          <h2 className='font-bold underline text-xl'>JavaScript</h2>
          <ul className="projects">
            <li>
              <a
                href="https://lourod1987.github.io/Final-Frontierv2/"
                title="Link to Final Frontier made with OO JS"
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={() => handleMouseLeave(2)}
              >
                <div className='relative'>
                  <img className='block m-auto!' src={finalFrontierPreview} alt="Preview of Final Frontier game"/>
                  <div style={{...overlay, opacity: opacity[2]}}>Click to View Project</div>
                </div>
              </a>
              <span className="project-label">Final&nbsp;Frontier</span>
              <span className="repo-link"><a href="https://github.com/lourod1987/Final-Frontierv2" target="_blank">Github Repository</a></span>
            </li>
            <li>
              <h2>jQuery</h2>
              <a
                href="https://lourod1987.github.io/mythic-concentration/"
                title="Link to Matching Game"
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={() => handleMouseLeave(3)}
              >
                <div className='relative'>
                    <img className='block m-auto!' src={mythicPreview} alt="Preview of Pixel Art Maker project"/>
                    <div style={{...overlay, opacity: opacity[3]}}>Click to View Project</div>
                </div>
              </a>
              <span className="project-label">Mythic&nbsp;Matching&nbsp;Game</span>
              <span className="repo-link"><a href="https://github.com/lourod1987/mythic-concentration" target="_blank">Github Repository</a></span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default HomeComponent;