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

export const AdvSection: React.FC<Props> = ({ img }) => {
  return (
    <>
      <AdvSectionFrame>
        <img
          alt='advertise'
          // style={{ border: '1px solid blue' }}
          src={img}
          width={
            window.outerWidth > 606
              ? SECTION.ADV_WIDTH
              : '100%'
          }
          height={
            window.outerHeight > 149
              ? SECTION.ADV_HEIGHT
              : '100%'
          }
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
