export const menu = ['관리', '청소'];

export const cycle = {
  day: '매일',
  w1: '1주',
  w2: '2주',
  w3: '3주',
  m1: '1달',
  m3: '3달',
};

export const riceCooker = {
  name: '밥솥',
  cycle1: cycle.day,
  cycle2: cycle.w1,
  body1: [
    '밥솥 청소를 안하면 보온 중 냄새가 날 수 있으니 매일 체크하고 수시로 청소한다.',
    '쌀을 씻을 때는 별도의 용기에 옮겨담아 씻는다 (스크래치 방지).',
    '내부 고무패킷은 1-3년마다 교체',
  ],
  body2: [
    '밥솥의 자동세척 기능을 활용해 내부세척 후 부품을 분해해 세척한다.',
    '물 + 식초 1큰 술 + 자동세척',
    '자동세척 완료 후 부품 세척을 위해 전원 플러그를 빼고 본체의 열을 식힌다',
    '분리 가능한 부분만 분리해서 모두 세척 (분리세척 가능한 부분은 매뉴얼에 나와있거나 밥솥에 표시되어 있다)',
    '세척시 주방용 중성세제 + 부드러운 스펀지 + 물로 세척한 후 물기 제거한 행주로 마무리한다.',
    '누런 얼룩이 사라지지 않으면 매직 블럭에 물을 묻혀 문지른다.',
    '벤젠, 신나, 락스, 염소성분 세제 등을 활용하지 않는다.',
  ],
};

export const refrigerator = {
  name: '냉장고',
  cycle1: cycle.w1,
  cycle2: cycle.w2,
  body1: ['123aasdf', '23', 'asdfasef'],
  body2: ['asaef'],
};

export const TV = {
  name: 'TV',
  cycle1: cycle.w1,
  cycle2: cycle.w2,
  body1: ['123aasdf', '23', 'asdfasef'],
  body2: ['asaef'],
};

export const airConditioner = {
  name: '에어컨',
  cycle1: cycle.w1,
  cycle2: cycle.w2,
  body1: ['123aasdf', '23', 'asdfasef'],
  body2: ['asaef'],
};
export const ceilingFan = {
  name: '실링팬',
  cycle1: cycle.w1,
  cycle2: cycle.w2,
  body1: ['123aasdf', '23', 'asdfasef'],
  body2: ['asaef'],
};
export const bed = {
  name: '침대',
  cycle1: cycle.w1,
  cycle2: cycle.w2,
  body1: ['123aasdf', '23', 'asdfasef'],
  body2: ['asaef'],
};
export const wardrobe = {
  name: '장롱',
  cycle1: cycle.w1,
  cycle2: cycle.w2,
  body1: ['123aasdf', '23', 'asdfasef'],
  body2: ['asaef'],
};
export const wineCellar = {
  name: '와인셀러',
  cycle1: cycle.w1,
  cycle2: cycle.w2,
  //필요: 단열, 자외선 차단, 결로 차단, 진동, 고내등, 도어잠금 기능, 공간성, 온도창
  body1: ['그머시기:', '23', 'asdfasef'],
  body2: ['asaef'],
};
export const toilet = {
  name: '변기',
  cycle1: cycle.w1,
  cycle2: cycle.w2,
  body1: ['123aasdf', '23', 'asdfasef'],
  body2: ['asaef'],
};
export const bath = {
  name: '욕조',
  cycle1: cycle.w1,
  cycle2: cycle.w2,
  body1: ['123aasdf', '23', 'asdfasef'],
  body2: ['asaef'],
};
export const frontRoom = {
  name: '전실',
  cycle1: cycle.w1,
  cycle2: cycle.w2,
  body1: ['123aasdf', '23', 'asdfasef'],
  body2: ['asaef'],
};
export const veranda = {
  name: '베란다',
  cycle1: cycle.w1,
  cycle2: cycle.w2,
  body1: ['123aasdf', '23', 'asdfasef'],
  body2: ['asaef'],
};
export const notice = {
  name: '세부 항목을 클릭하세요',
  cycle1: '',
  cycle2: '',
  body1: [''],
  body2: [''],
};

export const tipList = {
  name: 'Tip',
  tip: ['가전제품 팁', '조리도구 팁'],
  body: [
    [
      [
        '[기본사항]',
        '[⚠️ 안전 주의사항]',
        '❗️ 열, 불, 화학물질, 먼지',
        '❗️ 물',
        '❗️ 금속',
        '❗️ 전기',
        '❗️ 압력',
        '[설치]',
        '[관리]',
        '[폐기]',
        '[연락처]',
      ],
      [
        [
          '제품의 용도에 맞게 사용한다 (가정용 제품을 다른 용도로 사용하면 환경에 따라 감전, 화재가 일어날 수 있다).',
          '정해진 전압, 전류에서만 사용한다. 변경을 원할 시 변경이 가능한지 매뉴얼이나 서비스 센터 등에서 확인한다.',
          '연장 콘센트 사용시 접지가 있는 연장 콘센트를 사용한다.',
          '가급적 멀티탭보다는 콘센트를 단독으로 사용한다.',
          '플러그 사용시 플러그의 끝에 물이나 먼지가 없어야 하고, 끝까지 꽂아서 사용한다.',
          '플러그를 뺀 후 다시 꽂을 때는 5분 이상 대기 후 꽂는다.',
        ],
        [
          '전원 코드, 플러그, 콘센트, 부품 등이 손상되면 사용하지 말고 서비스 센터에 연락한다.',
          '사용 중 이상한 소리, 냄새, 연기가 발생하면 즉시 제품을 중단하고 플러그를 제거한다 (+ 내부 압력이 있다면 완전히 제거한다).',
          '다음에 주의해서 사용한다. 특히 도체로 이루어진 전자부품, 플러그, 콘센트 등은 더욱 더 주의한다.',
        ],
        [
          '화기 (가스레인지, 라이터, 전열기구, 풍로), 불이 붙기 쉬운 화학물질(에테르, 벤젠, 알콜, 약품, 가스, 가연성 스프레이, 화장품 등)을 근처에서 사용하거나 보관하지 않는다.',
          '화재 및 폭발을 야기할 수 있으며 해당 물질이 전기부품의 절연을 손상시켜 감전의 원인이 되기도 한다.',
        ],
        [
          '제품 내 전자부품부에 물이 닿지 않게 한다. 전자부품에 물, 이물질이 묻으면 즉시 제품을 중지시키고, 물 묻지 않은 타올 등을 활용해 플러그를 뽑은 후 고객센터에 연락한다.',
          '젖은 손으로 제품/부품을 만지면 감전의 위험이 있다.',
        ],
        [
          '금속성 물질 및 도체를 제품 내에 넣지 않도록 한다. 감전의 위험이 있다.',
          '전원코드 및 플러그의 피복이 눌리지 않게 한다.',
          '전원을 뽑을 때 전선이 아닌 플러그를 잡고 뽑도록 한다.',
        ],
        [
          '감전 방지를 위해 접지를 확실히 한다 (접지가 되어있지 않으면 손으로 만졌을 때 미세한 진동, 정전기를 느낄 수 있다).',
          '콘센트에 접지 단자가 있으면 별도로 접지할 필요가 없지만, 필요하다면 매뉴얼을 따른다 (환경에 따라 다름).',
          '자기장은 인체에도 영향을 줄 수 있어, 가전제품을 가동시키는 동안 30cm 이상 떨어져 있는 것이 좋다.',
        ],
        [
          '뜨거운 증기가 나오는 제품은 개방된 공간에서 사용한다.',
          '증기의 배출구에는 무언가 올려놓지 않아야 한다 (배출구가 막히면 압력에 의한 폭발의 위험이 있다).',
          '고압 상태에서 압력잠금상태를 풀지 않도록 한다. 고압 상태를 중지 후 배출구를 살짝 열어 증기를 배출시키거나 어느정도 시간이 지난 후 뚜껑을 연다.',
          '가스를 사용하는 제품일 경우 매뉴얼에서 가스 누출시 대비방법을 반드시 숙지한다. 가능하면 즉시 환기시키고 제품, 콘센트 등을 건드리지 않는다.',
        ],
        [
          '(X) 직사광선이 쬐는 곳, 습기가 많은 곳 (물이 닿을 수 있는 환경), 화학약품, 화기가 있는 곳과 가까운 환경, 너무 춥거나 더운 곳',
          '(O) 바닥이 튼튼하고 수평인 곳, 코드를 빼기 쉬운 곳',
          '수평이 안 맞아 앞쪽이 낮으면 문이 잘 안닫힐 수 있다.',
          '가전제품과 벽은 주위에 적당한 간격을 유지하는 것이 좋다. 너무 좁으면 성능이 떨어지고 전기료가 많이 나올 수 있다.',
          '같은 전자제품끼리도 가까이 두지 않는 것이 좋다. 서로 자기장에 의해 영향을 줄 수 있다.',
          '제품 밑에 다른 전자제품, 철판, 전기장판, 은박지, 깔판, 방석 등을 두지 않는다.',
        ],
        [
          '천둥, 번개 칠 때나 장시간 사용하지 않을 때 전원 플러그를 제거한다.',
          '청소 및 부품 교체시 플러그를 콘센트에서 뺀 후 진행한다 (감전 위험).',
          '가전제품 위에는 가능한 한 물건을 올려두지 않는다 (특히 무겁거나 위험한 물건).',
          '제품 내에 촛불, 드라이기 등을 사용하지 않는다.',
        ],
        [
          '어린이가 들어갈 수 있는 제품의 경우 문의 고무패킹을 제거 후 폐기한다.',
          '폐기하려는 제품이 벽걸이 등 붙박이형으로 집에 고정되어 있다면 미리 철거한다.',
          '거주하는 곳의 관리자 / 관리사무소에게 폐기방법을 묻는다 (폐가전제품 수거함, 대행 처리, 폐기물 스티커 등). 폐기물 스티커가 필요할 경우 근처에서 구입방법을 물어보면 좋다. 단독주택일 경우 주민센터 수거함을 이용한다.',
          '혹은 거주하는 지역의 주민센터나 구청에 전화나 홈페이지로 확인한다. 보통 아래와 같지만 지자체마다 방법이 다르니 꼭 문의하도록 한다.',
          '(소형 폐기물 + 높이 1m 미만) 밥솥, 전자레인지, 선풍기 등 해당 조건의 폐기물은 재활용품처럼 배출하면 된다.',
          '(높이 1m 이상 폐기물) 무상 방문 수거 서비스 이용 : 지역 동사무소에 연락하거나 폐가전제품 배출예약시스템을 이용한다. 큰 것들은 단일 수거가 가능하지만 소형 폐가전은 동시배출 대상일 수 있으니 확인한다.',
          '수거 불가 품목인지 반드시 확인한다 : 원형 훼손 제품 (냉각기가 파손된 냉장고, 모터가 훼손된 세탁기, 분해된 제품 등), 맞춤 제작된 빌트인 가전제품, 안마의자 등',
        ],
        [
          '🏠 폐가전제품 배출예약시스템 / 📞 1599 - 0903 📄https://15990903.or.kr/portal/main/main.do',
          '그림 🖼https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
        ],
      ],
    ],
    [
      ['ㅁ', 'ㅠ'],
      [
        ['1,2,3', 'a', 'b'],
        ['155', 'a', 'b'],
      ],
    ],
  ],
};
