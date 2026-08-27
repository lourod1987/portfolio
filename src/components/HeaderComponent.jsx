import { NavLink } from 'react-router';
// import logo from '../assets/dev-logo_2026.png';

function HeaderComponent() {
  return (
    <div className='bg-[#000814] grid grid-cols-[1fr_1fr_1fr] text-[#e3def4] pb-4'>
      <header className='header text-[0.6em]! col-span-2 sm:text-xs! md:col-span-1 md:col-start-2 lg:text-base!'>
        {/* <NavLink to="/">
            <img src={logo} alt="Luis Rodriguez Fire Breathing Dragon site logo" id="logo"/>
        </NavLink> */}
        <h1 className='mt-4 pl-2 md:pl-0 md:text-center'>Luis A. Rodriguez III</h1>
        <h2 className='pl-2 md:pl-0 md:text-center '>Software Engineer</h2>
      </header>
      <nav className='justify-self-end mt-4 mr-2 sm:mt-20 sm:mr-10 font-["Pridi"]'>
        <ul className='block text-left sm:inline-grid grid-cols-3 gap-3'>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/archive">Archive</NavLink>
          </li>
        </ul>
      </nav>  
    </div>
  );
}

export default HeaderComponent;