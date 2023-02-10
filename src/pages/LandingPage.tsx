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
      <AdvSection img={advPath} />
      <MoreSection></MoreSection>
    </>
  );
};

export default LandingPage;
