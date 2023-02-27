import styled from 'styled-components';

export const Test = () => {
  return (
    <>
      <h4>관리</h4>

      <Div>
        * 밥솥 청소를 안하면 보온 중 냄새가 날 수 있으니 매일 체크하고 수시로
        청소한다. <br />
        * 쌀을 씻을 때는 별도의 용기에 옮겨담아 씻는다 (내솥에서 바로 씻으면
        스크래치가 생길 수 있다).
        <br />
        * 내부 고무패킷은 1-3년마다 교체
        <br />
      </Div>
      <h4>청소</h4>
      <Div>
        <h5>1. 내부 세척</h5>
        <br />
        <br />
        - 밥솥의 자동세척 기능을 활용한다: 물 + 식초 1큰 술 + 자동세척
        <br />
        - 자동세척 완료 후 부품 세척을 위해 전원 플러그를 빼고 본체의 열을
        식힌다.
        <br />
        <br />
        <h5> 2. 부품 세척</h5>
        <br />
        - 분리 가능한 부분만 분리해서 모두 세척
        <br />
        - 분리세척 가능한 부분은 매뉴얼에 나와있거나 밥솥 위에 쉽게 분리할 수
        있도록 표시되어 있다.
        <br />
        - 세척시 주방용 중성세제 + 부드러운 스펀지 + 물로 세척한 후 물기 제거한
        행주로 마무리한다.
        <br />
        - 누런 얼룩이 사라지지 않으면 매직 블럭에 물을 묻혀 문지른다.
        <br />
        - 벤젠, 신나, 락스, 염소성분 세제 등을 활용하지 않는다.
        <br />
      </Div>
    </>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  text-align: left;
  width: 100%;
  background: aliceblue;
  line-height: 1.5rem;
`;
