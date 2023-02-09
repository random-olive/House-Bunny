import {
  AdvSectionFrame,
  HotSectionFrame,
  MoreSectionFrame,
} from 'components/atoms/SectionFrame';

export const HotSection = () => {
  return (
    <>
      <HotSectionFrame>Hot 내용</HotSectionFrame>
    </>
  );
};

export const AdvSection = () => {
  return (
    <>
      <AdvSectionFrame>이미지</AdvSectionFrame>
    </>
  );
};

export const MoreSection = () => {
  return (
    <>
      <MoreSectionFrame>더보기 내용</MoreSectionFrame>
    </>
  );
};
