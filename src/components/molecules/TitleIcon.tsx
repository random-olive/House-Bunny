import { BackIcon, HotIcon, MoreIcon } from 'components/atoms/Icons';
import { ICON_SIZE } from 'constants/styleConstants';

export const HotTitle = () => {
  return (
    <>
      <BackIcon width={ICON_SIZE.HOT_WIDTH} height={ICON_SIZE.HOT_HEIGHT} />
      <HotIcon />
    </>
  );
};

export const MoreTitle = () => {
  return (
    <>
      <BackIcon width={ICON_SIZE.MORE_WIDTH} height={ICON_SIZE.MORE_HEIGHT} />
      <MoreIcon />
    </>
  );
};
