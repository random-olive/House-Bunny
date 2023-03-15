import styled from 'styled-components';
import { menu } from 'constants/itemText';

type ContentsBodyType = {
  title?: string;
  contentsList?: string[] | any;
  tipTitle?: string;
  body1?: any;
  body2?: any;
};

export const ContentsBind = styled.div`
  display: flex;
  font-family: kyobohand;
  justify-content: left;
  flex-wrap: wrap;
  text-align: left;
  width: 100%;
  line-height: 1.6rem;
  h3 {
    width: 100%;
    color: ${(props) => props.theme.color['--text-light-orange']};
  }
  ul {
    margin: 0;
    li {
      margin-left: -20px;
    }
  }
`;

export const Paragraph = ({ title, contentsList }: ContentsBodyType) => {
  return (
    <ContentsBind>
      <h3>{title}</h3>
      <ul>
        {contentsList.map((el: string, i: number) => (
          <li key={i}>{el}</li>
        ))}
      </ul>
    </ContentsBind>
  );
};

export const ContentsBody = ({ body1, body2 }: ContentsBodyType) => {
  return (
    <>
      <Paragraph title={menu[0]} contentsList={body1} />
      <Paragraph title={menu[1]} contentsList={body2} />
    </>
  );
};

export const TipBody = ({ title, body1 }: ContentsBodyType) => {
  return (
    <>
      <Paragraph title={title} contentsList={body1} />
    </>
  );
};
