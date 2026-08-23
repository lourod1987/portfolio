function FooterComponent(props) {
  const { socials } = props;
  return (
    <footer>
      <h2>Keep in Contact</h2>
      {/*Images courtesy of their respective entities (Gmail, Github, LinkedIn, and Twitter)*/}
      <ul className='flex flex-row justify-center'>
        {
          socials.map((social, i) => {
            return (
              <li key={`social-${i}`} className='ring-4 ring-[#e63946] m-3 rounded-md bg-[#e3def4] transition delay-150 duration-400 ease-in-out hover:-translate-y-1 hover:scale-115 hover:bg-[#e63964]'>
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                  <div className='size-16 bg-radial-[at_75%_15%] from-[#fbdcf1] to-transparent to-55% relative left-4 top-0 rounded-md -mb-16'></div>
                  <img src={social.img} alt={social.alt} loading='lazy' className='size-14 m-3'/>
                </a>
              </li>
            );
          })
        }
      </ul>
      <p>Made with &hearts; by Luis Rodriguez III</p>
    </footer>
  );
}

export default FooterComponent;
