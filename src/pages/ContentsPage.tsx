import { AdvSection, ContentSection } from 'components/molecules/Section';
import { subMenuList } from 'constants/dataComponent';

import styled from 'styled-components';
import { SubMenuLayout } from 'components/templates/Layouts';

const ContentsPage = () => {
  return (
    <>
      {subMenuList.map((el, idx) => (
        <SubMenuLayout key={idx}>{el}</SubMenuLayout>
      ))}
      <AdvSection />
      <ContentSection></ContentSection>
    </>
  );
};

export default ContentsPage;
