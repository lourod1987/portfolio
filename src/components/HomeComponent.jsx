import ListComponent from './ListComponent';
import SkillListComponent from './SkillListComponent';
import { homePageProjectsCol1, homePageProjectsCol2 } from '../utils/projectsData';
import { skills } from '../utils/skillsData';

function HomeComponent() {

  return (
    <main className="whole-body sm:min-h-[600px] min-h-[1600px]">
      <section>
        {/* <h2 className="intro-text text-left w-2/3">
          <strong>Welcome</strong>
        </h2> */}
        {/* <h2 id="leadin">Proficiencies in:</h2> */}
        <div className='h-10'></div>
        <SkillListComponent skills={skills} />
      </section>
      <section className="skillset">
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

/* New colors: forBG: #000814 */
// 576px - 832px screen sizes need layout to be fixed for

export default HomeComponent;
