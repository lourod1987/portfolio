import ListComponent from './ListComponent';
import { archivePageProjectsCol1, archivePageProjectsCol2 } from '../utils/projectsData';

function ArchiveComponent () {

  return (
    <main className="whole-body sm:min-h-[600px] min-h-[1200px]">
      <h2 className="intro-text text-left w-2/3">
        <strong>Archived Projects</strong>
      </h2>
      <section className="skillset">
        <div className="skill-jquery p-10!">
          <ListComponent projects={archivePageProjectsCol1} />
        </div>
        <div className="skill-js p-10!">
          <ListComponent projects={archivePageProjectsCol2} />
        </div>   
      </section>
    </main>
  );
}

export default ArchiveComponent;