import StandartPageLayout from './StandardPageLayout';
import AboutComponent from '../components/AboutComponent';
import '../App.css';

function AboutPage() {
  return (
    <>
      <StandartPageLayout page={<AboutComponent />} />
    </>
  );
} 

export default AboutPage;
