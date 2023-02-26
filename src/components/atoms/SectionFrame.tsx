import { DEFAULT, SECTION, RESPONSIVE } from 'constants/styleConstants';
import styled from 'styled-components';

export const Frame = styled.div`
  position: relative;
  border: 3px solid ${(props) => props.theme.color['--section-line']};
  width: ${SECTION.WIDTH};
  height: fit-content;
  margin: ${SECTION.MARGIN};
  padding: ${SECTION.PADDING};
  border-radius: ${DEFAULT.BORDER_RADIUS};

  @media screen and (max-width: ${RESPONSIVE.SMALL_PX}) {
    width: ${RESPONSIVE.SECTION_WIDTH};
  }
`;

export const HotSectionFrame = styled(Frame)`
  height: ${SECTION.MAIN_HEIGHT};
`;

export const AdvSectionFrame = styled(Frame)`
  width: ${SECTION.ADV_WIDTH};
  height: ${SECTION.ADV_HEIGHT};
  padding: 0;
  border: 2px solid ${(props) => props.theme.color['--section-line']};
  @media screen and (max-width: ${RESPONSIVE.SMALL_PX}) {
    width: ${RESPONSIVE.ADV_WIDTH};
  }
`;

export const MoreSectionFrame = styled(Frame)`
  height: ${SECTION.MORE_HEIGHT};
  margin: ${SECTION.END_MARGIN};
`;

export const ContentSectionFrame = styled(Frame)`
  margin: ${SECTION.END_MARGIN};
`;
