import speedTestPreview from '../assets/typingSpeedTestPreview.jpg';
import finalFrontierPreview from '../assets/finalFrontierPreview.jpg';
import mythicPreview from '../assets/mythicPreview.jpg';
import pixelPreview from '../assets/pixelArtPreview.jpg';
import techAggPreview from '../assets/techAggPreview.jpg';
import askLibbiePreview from '../assets/Ask-Libbie-App-preview.png';
import myReadsPreview from '../assets/Book-Reads-App.png';

function ArchiveComponent () {
  return (
    <main className="whole-body sm:min-h-[600px] min-h-[1200px]">
      <h2 className="intro-text">
        <strong>Archived Projects</strong>
      </h2>
      <section className="skillset">
      <div className="skill-jquery">
          <ul className="projects">
            <h2 className='font-bold'>React</h2>
            <li>
              <a href="https://ask-libbie.netlify.app/" title="Link to Ask Libbie React App">
                <img src={askLibbiePreview} alt="Preview of Ask Libbie App"/>
              </a>
              <span class="project-label">Ask&nbsp;Libbie&nbsp;App</span>
              <span class="repo-link"><a href="https://github.com/lourod1987/ask-libbie-frontend" target="_blank">Github Repository</a></span>
            </li>
            <li>
              <a href="https://myreadsapp.netlify.app/" title="Link to My Reads React App">
                <img src={myReadsPreview} alt="Preview of My Reads App"/>
              </a>
              <span class="project-label">My&nbsp;Reads&nbsp;App</span>
              <span class="repo-link"><a href="https://github.com/lourod1987/MyReads" target="_blank">Github Repository</a></span>
            </li>
          </ul>
        </div>
        <div className="skill-js">
          <h2 className='font-bold'>JavaScript</h2>
          <ul className="projects">
            <li>
              <a href="https://lourod1987.github.io/pixelart/" title="Link to Pixel Art Project made with jQuery">
                <img src={pixelPreview} alt="Preview of Pixel Art Maker project"/>
              </a>
              <span class="project-label">Pixel&nbsp;Art&nbsp;Project</span>
              <span class="repo-link"><a href="https://github.com/lourod1987/pixelart" target="_blank">Github Repository</a></span>
            </li>
          </ul>
        </div>    
      </section>
    </main>
  );
}

export default ArchiveComponent;