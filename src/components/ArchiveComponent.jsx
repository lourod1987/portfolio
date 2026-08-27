import ProjectListComponent from './ProjectListComponent';
import { archivePageProjectsCol1, archivePageProjectsCol2 } from '../utils/projectsData';

function ArchiveComponent () {

  return (
    <main className='whole-body py-10!'>
      <section className='grid sm:grid-cols-2 bg-[#000814] rounded-4xl mx-4 lg:mx-auto xl:max-w-2/3'>
        {/* <h2 className="intro-text text-left w-2/3">
          <strong>Archived Projects</strong>
        </h2> */}
        <div className='p-6 lg:p-10!'>
          <ProjectListComponent projects={archivePageProjectsCol1} />
        </div>
        <div className='p-6 lg:p-10!'>
          <ProjectListComponent projects={archivePageProjectsCol2} />
        </div>   
      </section>
    </main>
  );
}

export default ArchiveComponent;