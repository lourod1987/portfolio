import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import { socials } from '../utils/socialsData';
import '../App.css';

function StandartPageLayout(props) {
  const { page } = props;
  
  return (
    <>
      <HeaderComponent />
        { page }
      <FooterComponent socials={socials} />
    </>
  );
}

export default StandartPageLayout;
