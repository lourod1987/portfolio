import React, { Component } from 'react';
import gmail from './img/logo_gmail_48px.png'
import github from './img/GitHub-Mark-48px.png'
import linkedin from './img/In-2C-48px-R.png'
import twitter from './img/Twitter_Social_Icon_Circle_Color_48px.png'

class FooterComponent extends Component {
    render() {
        return (
            <footer>
                <h2>Keep in Contact</h2>
                <div id="footer-imgs">
                {/*
                Images courtesy of their respective entities (Gmail, Github, LinkedIn, and Twitter)
                */}
                    <a href="mailto:louart87@gmail.com">
                        <img src={gmail} alt="Gmail logo"/>
                    </a>
                    <a href="https://github.com/lourod1987" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="GitHub logo"/>
                    </a>
                    <a href="https://www.linkedin.com/in/lourod1987/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn logo"/>
                    </a>
                    <a href="https://twitter.com/LuisARIII" target="_blank" rel="noopener noreferrer">
                        <img src={twitter} alt="Twitter logo"/>
                    </a>  
                </div>
                <p>Made with &hearts; by Luis Rodriguez III</p>
            </footer>
        )
    }
}

export default FooterComponent;