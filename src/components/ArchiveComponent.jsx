import ProjectListComponent from './ProjectListComponent';
import { archivePageProjectsCol1, archivePageProjectsCol2 } from '../utils/projectsData';

function ArchiveComponent () {

  return (
    <main className="whole-body sm:min-h-[600px] !pb-10">
      <h2 className="intro-text text-left w-2/3">
        <strong>Archived Projects</strong>
      </h2>
      <section className="skillset">
        <div className="skill-jquery sm:p-10!">
          <ProjectListComponent projects={archivePageProjectsCol1} />
        </div>
        <div className="skill-js sm:p-10!">
          <ProjectListComponent projects={archivePageProjectsCol2} />
        </div>   
      </section>
    </main>
  );
}

export default ArchiveComponent;