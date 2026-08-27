import profilePic from '../assets/professional_profile.webp';

function AboutComponent() {
  return (
    <div>
      <main className='sm:min-h-[600px] !pb-10'>
        <div className="about-me-text">
          <figure>
            <img id="loupic" src={profilePic} alt="Professional headeshot of Luis" className='rounded-4xl ring-5 ring-[#e63946]' />
          </figure>
          <section className="who-i-am">
            <h2>About Me</h2>
            <p>
              I've studied game design, art, and programming. I love all three of those knowledge bases. I am passionate about learning, I am ever curious, constantly looking for ways to improve the world around me. Some of my favorite activites are hiking, kayaking, reading books, playing video games, watching anime and movies of all kinds. I draw, write, and in general create. I enjoy problem solving and creative solutions which is why I love software engineering. If you are looking for a creative problem solver, designer with technical aptitude, or a software developer that understands aesthetics matter for users and growth; reach out to me and we'll collaborate to achieve the solutions your business needs.
            </p>
          </section>
          <section className="workexp">
            <h2>Work Experience</h2>
            <h3>Software Engineer II</h3>
            <h4>Trader Interactive</h4>
            <p>September 2020 - February 2026</p>
            <div>
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
            </div>
            <h3>Software Engineer I</h3>
            <h4>Bigeye</h4>
            <p>July 2019 - April 2020</p>
            <div>
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
            </div>
          </section>
          <section className="education">
            <h2>Education</h2>
            <h3>Udacity - Mountain View, CA</h3>
            <p className='font-bold'>Front-End Web Developer Nanodegree, 2018</p>
            <p>Coursework took me from a basic understanding of HTML, CSS, and JavaScript to a mastery of the topics. I learned about best coding practices, OOP principles, responsive design, accessibility, and SEO.</p>
            <h3>University of Central Florida - Orlando, FL</h3>
            <p className='font-bold'>Bachelor of Arts in Digital Media - Game Design, 2016</p>
            <p>
              Intensive coursework involved three competencies; Art, design, and programming. I focused on art but the program instructs all students with expectation that you learn and have at least an intermediate mastery and understanding of all three areas.
            </p>
            <h3>Valencia College - Kissimmee, FL</h3>
            <p className='font-bold'>General A.A. (art focus), 2012</p>
            <p>
              General education for college course requirements. Classes ranged from Humanities courses to College Algebra. To be noted I particularly focused on art courses in order to further develop my skills in art and design knowledge and practical application.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default AboutComponent;
