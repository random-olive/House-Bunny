import { DEFAULT, SECTION } from 'constants/style';
import styled from 'styled-components';

export const Frame = styled.div`
  border: 4px solid ${(props) => props.theme.color['--section-line']};
  width: ${SECTION.WIDTH};
  height: ${SECTION.MAIN_HEIGHT};
  margin: ${SECTION.MARGIN};
`;

export const HotSectionFrame = styled(Frame)`
  border-radius: ${DEFAULT.BORDER_RADIUS};
`;
export const AdvSectionFrame = styled(Frame)`
  border: 1px solid red;
  height: ${SECTION.ADV_HEIGHT};
`;

export const MoreSectionFrame = styled(Frame)`
  border-radius: ${DEFAULT.BORDER_RADIUS};
  height: ${SECTION.MORE_HEIGHT};
`;
