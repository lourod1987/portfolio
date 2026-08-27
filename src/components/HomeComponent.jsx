import ProjectListComponent from './ProjectListComponent';
import SkillListComponent from './SkillListComponent';
import { homePageProjectsCol1, homePageProjectsCol2 } from '../utils/projectsData';
import { skills } from '../utils/skillsData';

function HomeComponent() {

  return (
    <main className='whole-body py-10!'>
      <section>
        {/* <h2 className="intro-text text-left w-2/3">
          <strong>Welcome</strong>
        </h2> */}
        {/* <h2 id="leadin">Proficiencies in:</h2> */}
        <div className='h-10 sm:h-0'></div>
        <SkillListComponent skills={skills} />
      </section>
      <section className='grid sm:grid-cols-2 bg-[#000814] rounded-4xl mx-4 lg:mx-auto xl:max-w-2/3'>
        {/* <h2 className="intro-text text-left">
          <strong>Projects</strong>
        </h2> */}
        <div className='p-6 lg:p-10!'>
          <ProjectListComponent projects={homePageProjectsCol1} />
        </div>
        <div className='p-6 lg:p-10!'>
          <ProjectListComponent projects={homePageProjectsCol2} />
        </div>
      </section>
    </main>
  );
}

/* New colors: forBG: #000814 */
// 576px - 832px screen sizes need layout to be fixed for

export default HomeComponent;
