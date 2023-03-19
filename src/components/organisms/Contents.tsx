import styled from 'styled-components';
import { menu } from 'constants/itemText';
import { A } from 'components/atoms/Buttons';

type ContentsBodyType = {
  title?: string;
  contentsList?: string[] | any;
  tipTitle?: string;
  body1?: any;
  body2?: any;
};

export const ContentsBind = styled.div`
  display: flex;
  flex-direction: column;
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
  .tip-title {
    margin-top: 20px;
    font-weight: 600;
    color: ${(props) => props.theme.color['--text']};
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

export const TipParagraph = ({ title, contentsList }: ContentsBodyType) => {
  return (
    <ContentsBind>
      <h3>{title}</h3>
      {contentsList[0] &&
        contentsList[0].map((el: string, i: number) => (
          <div key={i}>
            <div className='tip-title'>{el}</div>
            <ul>
              {contentsList[1][i] &&
                contentsList[1][i].map((el: string, i: number) => (
                  <li key={i}>
                    {el.includes('🏠') ? ( //여기에 이미지도 추가 + 그 외에 뭐 할수잇는지
                      <A
                        href={el.split('📄')[1]}
                        target='_blank'
                        rel='noreferrer'
                      >
                        {el.split('📄')[0]}
                      </A>
                    ) : (
                      el
                    )}
                  </li>
                ))}
            </ul>
          </div>
        ))}
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
      <TipParagraph title={title} contentsList={body1} />
    </>
  );
};
