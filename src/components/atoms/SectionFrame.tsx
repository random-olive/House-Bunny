import { DEFAULT, SECTION } from 'constants/style';
import styled from 'styled-components';

export const Frame = styled.div`
  position: relative;
  border: 3px solid ${(props) => props.theme.color['--section-line']};
  width: ${SECTION.WIDTH};
  height: ${SECTION.MAIN_HEIGHT};
  margin: ${SECTION.MARGIN};
  padding: ${SECTION.PADDING};
  border-radius: ${DEFAULT.BORDER_RADIUS};
`;

export const HotSectionFrame = styled(Frame)``;

export const AdvSectionFrame = styled(Frame)`
  border: 1px solid red;
  width: ${SECTION.ADV_WIDTH};
  height: ${SECTION.ADV_HEIGHT};
  padding: 0;
`;

export const MoreSectionFrame = styled(Frame)`
  height: ${SECTION.MORE_HEIGHT};
  margin: ${SECTION.END_MARGIN};
`;
