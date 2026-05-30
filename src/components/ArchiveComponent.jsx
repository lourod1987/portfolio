import { useState } from 'react';
import speedTestPreview from '../assets/typingSpeedTestPreview.jpg';
import finalFrontierPreview from '../assets/finalFrontierPreview.jpg';
import mythicPreview from '../assets/mythicPreview.jpg';
import pixelPreview from '../assets/pixelArtPreview.jpg';
import techAggPreview from '../assets/techAggPreview.jpg';
import askLibbiePreview from '../assets/Ask-Libbie-App-preview.png';
import myReadsPreview from '../assets/Book-Reads-App.png';

function ArchiveComponent () {
  const [opacity, setOpacity] = useState([0, 0, 0]);

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
    const newArray = [0, 0, 0];
    newArray[arrayPosition] = 1;
    console.log(`NEW ARRAY: ${newArray}`);
    setOpacity(newArray);
  };

  const handleMouseLeave = (arrayPosition) => {
    const newArray = [0, 0, 0];
    newArray[arrayPosition] = 0;
    console.log(`NEW ARRAY: ${newArray}`);
    setOpacity(newArray);
  };

  return (
    <main className="whole-body sm:min-h-[600px] min-h-[1200px]">
      <h2 className="intro-text">
        <strong>Archived Projects</strong>
      </h2>
      <section className="skillset">
      <div className="skill-jquery p-10!">
          <h2 className='font-bold underline text-xl'>React</h2>
          <ul className="projects">
            <li>
              <a
                href="https://ask-libbie.netlify.app/"
                title="Link to Ask Libbie React App"
                onMouseEnter={() => handleMouseEnter(0)}
                onMouseLeave={() => handleMouseLeave(0)}
              >
                <div className='relative'>
                  <img className='block m-auto!' src={askLibbiePreview} alt="Preview of Ask Libbie App"/>
                  <div className='overlay' style={{...overlay, opacity: opacity[0]}}>Click to View Project</div>
                </div>
              </a>
              <span className="project-label">Ask&nbsp;Libbie&nbsp;App</span>
              <span className="repo-link"><a href="https://github.com/lourod1987/ask-libbie-frontend" target="_blank">Github Repository</a></span>
            </li>
            <li>
              <a
                href="https://myreadsapp.netlify.app/"
                title="Link to My Reads React App"
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={() => handleMouseLeave(1)}
              >
                <div className='relative'>
                  <img className='block m-auto!' src={myReadsPreview} alt="Preview of My Reads App"/>
                  <div className='overlay' style={{...overlay, opacity: opacity[1]}}>Click to View Project</div>
                </div>
              </a>
              <span className="project-label">My&nbsp;Reads&nbsp;App</span>
              <span className="repo-link"><a href="https://github.com/lourod1987/MyReads" target="_blank">Github Repository</a></span>
            </li>
          </ul>
        </div>
        <div className="skill-js p-10!">
          <h2 className='font-bold underline text-xl'>JavaScript</h2>
          <ul className="projects">
            <li>
              <a
                href="https://lourod1987.github.io/pixelart/"
                title="Link to Pixel Art Project made with jQuery"
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={() => handleMouseLeave(2)}
              >
                <div className='relative'>
                  <img className='block m-auto!' src={pixelPreview} alt="Preview of Pixel Art Maker project"/>
                  <div className='overlay' style={{...overlay, opacity: opacity[2]}}>Click to View Project</div>
                </div>
              </a>
              <span className="project-label">Pixel&nbsp;Art&nbsp;Project</span>
              <span className="repo-link"><a href="https://github.com/lourod1987/pixelart" target="_blank">Github Repository</a></span>
            </li>
          </ul>
        </div>    
      </section>
    </main>
  );
}

export default ArchiveComponent;