import { ReactNode } from 'react';
import advPath from '../../assets/adv.png';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import {
  AdvSectionFrame,
  HotSectionFrame,
  MoreSectionFrame,
  ContentSectionFrame,
} from 'components/atoms/SectionFrame';

import { HorizontalFlex, VerticalFlex } from 'components/atoms/Bindings';
import { ContentsLayout } from 'components/templates/Layouts';
import { HotTitle, MoreTitle } from './TitleIcon';
import { SECTION, CONDITION } from 'constants/styleConstants';
import { Test } from '../../data/exampleData';
import styled from 'styled-components';


interface SectionProps {
  img?: string;
  body?: ReactNode;
  width?: string;
  height?: string;
}

export const HotSection = () => {
  return (
    <>
      <HotSectionFrame>
        <HotTitle />
        컨텐츠 내용이 여기에 들어감~~
      </HotSectionFrame>
    </>
  );
};

export const AdvSection = () => {
  return (
    <>
      <AdvSectionFrame>
        <img
          alt='advertise'
          // style={{ border: '1px solid blue' }}
          src={advPath}
          width={CONDITION.SMALL ? '100%' : SECTION.ADV_WIDTH}
          height={SECTION.ADV_HEIGHT}
        />
      </AdvSectionFrame>
    </>
  );
};

export const MoreSection = () => {
  return (
    <>
      <MoreSectionFrame>
        <MoreTitle />
        더보기 내용이 여기에 들어감~~
      </MoreSectionFrame>
    </>
  );
};

export const ContentSection = () => {
  //prop: title, body
  return (
    <>
      {/* <VerticalFlex> */}
      <ContentSectionFrame>
        {/* <ContentsLayout /> */}
        <h1>(아이콘) 밥솥</h1> 
        <div>괜찮으면 사진</div>
        <Div>
        

          <Bind>
            <h2>관리</h2> <h3>1주</h3>
          </Bind>

          <Bind>
            <h2>청소</h2> <h3>2주</h3>
          </Bind>
        </Div>
        <HorizontalFlex>
         
          {/* <h4>관리1</h4>
          어떻게 하냐구요? 매뉴얼을 보거나 검색을 하세요!
          <h4>관리2</h4>
          어떻게 하냐구요? 매뉴얼을 보거나 검색을 하세요!
          <h4>관리3</h4>
          어떻게 하냐구요? 매뉴얼을 보거나 검색을 하세요! */}
          {/* <ReactMarkdown children={coocoo} /> */}
          <Test />
          {/* <>{coocoo}</> */}
        </HorizontalFlex>

        {/* <HorizontalFlex margin='0'>
          <h2>사용 팁</h2>
          <h3>주기가 어떻게 되는지</h3>
        </HorizontalFlex>
        <HorizontalFlex margin='0'>
          <h2>관리</h2>
          <h3>주기가 어떻게 되는지</h3>
        </HorizontalFlex>
        <HorizontalFlex>
          <h2>청소</h2>
          <h3>주기가 어떻게 되는지</h3>
          <h4>넌 밥통이야</h4>
          
        </HorizontalFlex> */}
      </ContentSectionFrame>
      {/* </VerticalFlex> */}
    </>
  );
};

const Div = styled.div`
  display: flex;
h3 {
  margin-top: 23px;
  margin-right: 210px;
}
`;

const Bind = styled.div`
  display: flex;
  h2 {
    margin-right: 10px;
  }
`;
