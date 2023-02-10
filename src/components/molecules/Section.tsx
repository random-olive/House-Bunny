import { ReactNode } from 'react';

import {
  AdvSectionFrame,
  HotSectionFrame,
  MoreSectionFrame,
} from 'components/atoms/SectionFrame';

import { HotTitle, MoreTitle } from './TitleIcon';
import { SECTION } from 'constants/style';

interface Props {
  img?: string;
  body?: ReactNode;
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

export const AdvSection: React.FC<Props> = ({ img }) => {
  return (
    <>
      <AdvSectionFrame>
        <img
          alt='advertise'
          style={{ border: '1px solid blue' }}
          src={img}
          width={SECTION.ADV_WIDTH}
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
