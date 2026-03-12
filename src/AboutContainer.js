import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import profilePic from './img/professional_profile.jpeg';

class AboutContainer extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <main>
          <div class="about-me-text">
            <figure>
              <img id="loupic" src={profilePic} alt="Professional headeshot of Luis"/>
            </figure>
            <section class="who-i-am">
              <h2>Who I Am</h2>
              <p>
                I've studied game design, art, and programming. I love all three of those knowledge bases. I am passionate about learning, I am ever curious, constantly looking for ways to improve the world around me, and I find joy in the simplest of things. Some of my favorite things to do are read books, play video games, watch anime and movies of all kinds, draw, write, and in general create. I enjoy problem solving and creative solutions which is why this site even came to be in the first place. If you are looking for a creative web developer, designer with technical aptitude, and or an artist that understands technical requirements reach out to me and we'll collaborate to achieve the solutions your business needs.
              </p>
            </section>
            <section class="workexp">
              <h2>Work Experience</h2>
              <h3>Software Engineer II</h3>
              <p>Trader Interactive</p>
              <p>September 2020 - February 2026</p>
              <p>
                <ul>
                  <li>
                    Architected and maintained frontend features for high-traffic vehicle marketplaces serving 13 million unique monthly users.
                  </li>
                  <li>
                    Collaborated in a large-scale Agile environment to execute major product pivots, UI overhauls across multiple domains, and participated
                    in cross-functional code reviews to ensure high-quality, scalable code.
                  </li>
                  <li>
                    Reduced technical debt by identifying and resolving critical frontend
                    and backend errors, improving site reliability and performance metrics.
                  </li>
                </ul>
              </p>
              <h3>Web Developer</h3>
              <p>Bigeye</p>
              <p>July 2019 - April 2020</p>
              <p>
                <ul>
                  <li>
                    Directed the full-cycle web development for an award-winning advertising agency.
                  </li>
                  <li>
                    Successfully launched 6 production websites from concept to deployment within a 9-month period.
                  </li>
                  <li>
                    Managed end-to-end troubleshooting for dozens of client sites, ensuring 99.9% uptime and optimal cross-browser performance.
                  </li>
                </ul>
              </p>
              <h3>Stability Analyst</h3>
              <p>EA Tiburon</p>
              <p>February 2016 - February 2017</p>
              <p>
              I worked with my team to ensure that the codebase for Madden 2018 was stable as features were added and fixes checked in. This involved reviewing bot and automation results which were tests for primary player paths. Reporting test results, analyzing issues, documenting bugs, assigning bugs to developers, and working in tandem to assist developers with bug diagnosis and fixes were some of my daily tasks.
              </p>
              <h3>Quality Assurance</h3>
              <p>21st Century Learning Solutions</p>
              <p>September 2015 - December 2015</p>
              <p>
              Together a team and I collaborated to update outdated html code and test functionality for courses for a large scale online university. This involved using dreamweaver documenting errors and correct outdated html code to be inline with HTML5 standards.
              </p>
              <h3>Media Specialist</h3>
              <p>Raytheon</p>
              <p>March 2013 - February 2014</p>
              <p>
              Worked with a team to provide imagery for courses based on the requirements set out by course instructors. Using photoshop to output clean and crisp imagery.
              </p>
            </section>
            <section class="education">
              <h2>Education</h2>
              <h3>Udacity - Mountain View, CA</h3>
              <p>Front-End Web Developer Nanodegree, 2018</p>
              <p>Coursework took me from a basic understanding of HTML, CSS, and JavaScript to a mastery of the topics. I learned about best coding practices, OOP principles, responsive design, accessibility, and SEO.</p>
              <h3>University of Central Florida - Orlando, FL</h3>
              <p>Bachelor of Arts in Digital Media - Game Design, 2016</p>
              <p>
                Coursework was intensive and invovled three compentencies; Art, design, and programming. I focused on art but the program instructs all students with expectation that you learn and have at least an intermediate mastery and understanding of all three areas.
              </p>
              <h3>Valencia College - Kissimmee, FL</h3>
              <p>General A.A. (art focus), 2012</p>
              <p>
                General education for college course requirements. Classes ranged from Humanities courses to College Algebra. To be noted I particularly focused on art courses in order to further develop my skills in art and design knowledge and practical application.
              </p>
            </section>
          </div>
        </main>
        <FooterComponent />
      </div>
    )
  }
}

export default AboutContainer;