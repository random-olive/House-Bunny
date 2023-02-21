import { SubMenuBar } from 'components/molecules/MenuBar';
import { AdvSection, ContentSection } from 'components/molecules/Section';
import { mainMenu, subMenu } from 'constants/data';
import { RESPONSIVE, SECTION } from 'constants/styleConstants';
import styled from 'styled-components';

const ContentsPage = () => {
  return (
    <>
      <Div>
        <div className='part'>
          <SubMenuBar />
        </div>
      </Div>

      {'active:서브메뉴2 : 주방일 경우 냉장고, 밥솥 등등'}
      <Div>{'active:서브메뉴3: 냉장고 클릭시 냉장고 메뉴'}</Div>
      <AdvSection />
      <ContentSection></ContentSection>
    </>
  );
};

export default ContentsPage;

const Div = styled.div`
  display: flex;

  .part {
    display: flex;
    width: ${SECTION.ADV_WIDTH};
  }
  @media screen and (max-width: ${RESPONSIVE.SMALL_PX}) {
    .part {
      width: ${RESPONSIVE.ADV_WIDTH};

    }
  }
`;
