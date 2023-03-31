import { ReactNode } from 'react';
import advPath from '../../assets/adv.png';

import {
  AdvSectionFrame,
  HotSectionFrame,
  MoreSectionFrame,
  ContentSectionFrame,
} from 'components/atoms/SectionFrame';

import { ContentsLayout, TipLayout } from 'components/templates/Layouts';
import { HotTitle, MoreTitle } from './TitleIcon';
import { SECTION, CONDITION } from 'constants/styleText';
import { useTranslation } from 'react-i18next';

interface SectionProps {
  img?: string;
  body?: ReactNode;
  width?: string;
  height?: string;
  item?: any;
  mcMenu?: any;
}

export const HotSection = () => {
  const { t } = useTranslation();
  return (
    <>
      <HotSectionFrame>
        <HotTitle />
        컨텐츠 내용이 여기에 들어감~~
        <br />
        {JSON.stringify(t('item:menu', { returnObjects: true }))}
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

export const ContentSection = ({ item, mcMenu }: SectionProps) => {
  return (
    <>
      <ContentSectionFrame>
        <ContentsLayout item={item} mcMenu={mcMenu} />
      </ContentSectionFrame>
    </>
  );
};

export const TipSection = ({ item }: SectionProps) => {
  return (
    <>
      <ContentSectionFrame>
        <TipLayout item={item} />
      </ContentSectionFrame>
    </>
  );
};
