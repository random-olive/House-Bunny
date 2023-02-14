import {
  HotSection,
  AdvSection,
  MoreSection,
} from 'components/molecules/Section';
import advPath from '../assets/icons.png';


const LandingPage = () => {
  return (
    <>
      <HotSection></HotSection>
      <AdvSection img={advPath} width={window.outerWidth>767? '700px':'100%'}/>
      <MoreSection></MoreSection>
    </>
  );
};

export default LandingPage;
