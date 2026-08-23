import { NavLink } from 'react-router';
// import logo from '../assets/dev-logo_2026.png';

function HeaderComponent() {
  return (
  <div className="for-bg">
    <header className="header">
      {/* <NavLink to="/">
          <img src={logo} alt="Luis Rodriguez Fire Breathing Dragon site logo" id="logo"/>
      </NavLink> */}
      <h1>Luis A. Rodriguez III</h1>
      <h2>Software Engineer</h2>
    </header>
    <div className="nav-bar">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/archive">Archive</NavLink>
          </li>
          {/* <li>
              <a href="portfolio-page.html" title="Link to Portfolio Examples page">Portfolio</a>
          </li> */}
        </ul>
      </nav>
    </div>   
  </div>
  );
}

export default HeaderComponent;