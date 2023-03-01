import { AdvSection, ContentSection } from 'components/molecules/Section';
import { subMenuList } from 'constants/dataComponent';


import { SubMenuLayout } from 'components/templates/Layouts';
import { riceCooker } from 'constants/itemText';

const ContentsPage = () => {
  return (
    <>
      {subMenuList.map((el, idx) => (
        <SubMenuLayout key={idx}>{el}</SubMenuLayout>
      ))}
      <AdvSection />
      <ContentSection item={riceCooker}/>
      
    </>
  );
};

export default ContentsPage;
