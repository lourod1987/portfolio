import gmail from '../assets/logo_gmail_48px.png'
import github from '../assets/GitHub-Mark-48px.png'
import linkedin from '../assets/In-2C-48px-R.png'
import twitter from '../assets/Twitter_Social_Icon_Circle_Color_48px.png'

function FooterComponent() {
  return (
    <footer>
      <h2>Keep in Contact</h2>
      <div id="footer-imgs">
      {/*Images courtesy of their respective entities (Gmail, Github, LinkedIn, and Twitter)*/}
        <a href="mailto:luisrodrigueziii.dev@gmail.com">
          <img src={gmail} alt="Gmail logo"/>
        </a>
        <a href="https://github.com/lourod1987" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub logo"/>
        </a>
        <a href="https://www.linkedin.com/in/luisriii/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn logo"/>
        </a>
        <a href="https://twitter.com/LuisARIII" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="Twitter logo"/>
        </a>  
      </div>
      <p>Made with &hearts; by Luis Rodriguez III</p>
    </footer>
  );
}

export default FooterComponent;