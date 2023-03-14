import { BackgroundIcon, HotIcon, MoreIcon } from 'components/atoms/Icons';
import { ICON_SIZE } from 'constants/styleText';

export const HotTitle = () => {
  return (
    <>
      <BackgroundIcon width={ICON_SIZE.HOT_WIDTH} height={ICON_SIZE.HOT_HEIGHT} />
      <HotIcon />
    </>
  );
};

export const MoreTitle = () => {
  return (
    <>
      <BackgroundIcon width={ICON_SIZE.MORE_WIDTH} height={ICON_SIZE.MORE_HEIGHT} />
      <MoreIcon />
    </>
  );
};
