import { ReactNode } from 'react';
import advPath from '../../assets/adv.png';

import {
  AdvSectionFrame,
  HotSectionFrame,
  MoreSectionFrame,
  ContentSectionFrame,
} from 'components/atoms/SectionFrame';

import { ContentsLayout } from 'components/templates/Layouts';
import { HotTitle, MoreTitle } from './TitleIcon';
import { SECTION, CONDITION } from 'constants/styleText';

interface SectionProps {
  img?: string;
  body?: ReactNode;
  width?: string;
  height?: string;
  item?: any;
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

export const ContentSection = ({ item }:SectionProps) => {
  return (
    <>
      <ContentSectionFrame>
        <ContentsLayout item={item} />
      </ContentSectionFrame>
    </>
  );
};
