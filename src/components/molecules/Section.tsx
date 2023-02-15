import { ReactNode } from 'react';

import {
  AdvSectionFrame,
  HotSectionFrame,
  MoreSectionFrame,
} from 'components/atoms/SectionFrame';

import { HotTitle, MoreTitle } from './TitleIcon';
import { SECTION, CONDITION } from 'constants/styleConstants';

interface SectionProps {
  img?: string;
  body?: ReactNode;
  width?: string;
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

export const AdvSection: React.FC<SectionProps> = ({ img }) => {
  return (
    <>
      <AdvSectionFrame>
        <img
          alt='advertise'
          style={{ border: '1px solid blue' }}
          src={img}
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
