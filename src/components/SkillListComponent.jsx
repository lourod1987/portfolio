function SkillListComponent(props) {
  const { skills } = props;

  const skillList = skills.map((skill, i) => {
    return (
      <li key={`skill-${i}`} className='ring-4 ring-[#e63946] m-3 rounded-md bg-[#e3def4]'>
        <a href={skill.skillDoc} target='_blank' rel="noopener noreferrer">
          <div className='size-16 bg-radial-[at_75%_15%] from-[#fbdcf1] to-transparent to-55% relative left-6 top-0 rounded-md -mb-16'></div>
          <img className='size-16 m-3' src={skill.skillLink} alt={skill.skillAlt} loading='lazy' title={skill.skillName} />
        </a>
      </li>
    );
  });

  return (
    <>
      <ul className="skill-shields mb-10 sm:mx-auto mt-10 m-8">
        <p class='block w-full pl-12 p-4 font-bold text-xl'>Frameworks, Languages, and Tools I use:</p>
        { skillList }
      </ul>
    </>
  );
}

export default SkillListComponent;
