import StandartPageLayout from './StandardPageLayout';
import HomeComponent from '../components/HomeComponent';
import '../App.css';

function HomePage() {
  return (
    <>
      <StandartPageLayout page={<HomeComponent />} />
    </>
  );
}

export default HomePage;
