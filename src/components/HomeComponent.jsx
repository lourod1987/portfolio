import ListComponent from './ListComponent';
import { homePageProjectsCol1, homePageProjectsCol2 } from '../utils/projectsData';

function HomeComponent() {

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
          <ListComponent projects={homePageProjectsCol1} />
        </div>
        <div className="skill-js p-10!">
          <ListComponent projects={homePageProjectsCol2} />
        </div>
      </section>
    </main>
  );
}

export default HomeComponent;