import { useState } from 'react';

function ProjectListComponent(props) {
  const { projects } = props;
  // const projectsArrLength = new Array(projects[0].projects.length).fill(0);
  const [opacity, setOpacity] = useState(new Array(projects[0].projects.length).fill(0));

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
    const newArray = new Array(projects[0].projects.length).fill(0);
    newArray[arrayPosition] = 1;
    setOpacity(newArray);
  };

  const handleMouseLeave = () => {
    const newArray = new Array(projects[0].projects.length).fill(0);
    setOpacity(newArray);
  };

  const projectList = projects[0].projects.map((project, i) => {
    return (
      <li key={`project-${i}`} className='text-center'>
        <span>{project.projectTag}</span>
        <h3>{project.projectSubtitle}</h3>
        <a
          href={project.projectLink.url}
          title={project.projectLink.linkTitle}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <div className='relative transition delay-200 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>
            <img className='block min-w-50 lg:max-w-[300px] m-auto! shadow-[-4px_4px_12px_#e3def4] rounded-[17%] transition delay-150 duration-200 ease-in-out hover:shadow-[-4px_4px_20px_#e3def4]' src={project.projectLink.img} alt={project.projectLink.imgAlt} />
            <div className='overlay' style={{...overlay, opacity: opacity[i]}}>Click to View Project</div>
          </div>
      </a>
      <span className="project-label">{project.projectTitle}</span>
      <span className="repo-link"><a href={project.repoLink} target="_blank">Github Repository</a></span>
    </li>
    );
  });
    
    
  return (
    <>
      <h2 className='font-bold underline text-xl text-center'>{projects[0].projectType}</h2>    
      <ul className="projects">
        { projectList }
      </ul>
    </>
  );
}

export default ProjectListComponent;
