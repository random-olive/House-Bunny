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
  name: '팁 리스트',
  tip: ['조리도구 관리', '가전제품 관리'],
  body: [
    ['11', '11', '11f'],
    [
      '[전원]',
      '(콘센트) 가급적 멀티탭보다는 단독 사용을 권장한다.',
      '(플러그) 코드선을 잡지 말고 반드시 끝단의 플러그를 잡고 꽂고 뺀다.',
      '플러그를 젖은 손으로 만지지 않는다.',
      '플러그를 무리하게 구부러지거나 눌리거나 물이 닿지 않게 한다.',
      '청소 및 부품 교체시 플러그를 콘센트에서 뺀 후 진행한다 (감전 위험).',
      '플러그의 끝에 물이나 먼지가 없어야 하고, 끝까지 꽂혀야 주변에 이물질이 없어 화재, 감전의 위험이 줄어든다.',
      '천둥, 번개 칠 때나 장시간 사용하지 않을 때 전원 플러그를 제거',
      '',
      '',
      '[설치 장소]',
      '(금지) 습기가 많은 곳, 물, 빗물 등이 튀는 곳',
      '(금지) 화학약품, 화기가 있는 곳',
      '(권장) 바닥이 튼튼하고 수평인 곳, 코드를 빼기 쉬운 곳',
      

      '[안전]',
      '감전 방지를 위해 접지를 확실히 한다 (접지가 되어있지 않으면 손으로 만졌을 때 미세한 진동, 정전기를 느낄 수 있다)',
      '전용 콘센트를 사용하고 (220V) 연장 콘센트 사용시 접지가 있는 연잔 콘센트를 사용한다.',
      '전원 코드, 플러그, 콘센트, 부품 등이 손상되면 사용하지 말고 서비스 센터에 연락한다.',
      '가전제품 내의 전기부품에 물, 이물질이 들어간 경우 전원플러그를 빼고 서비스 센터에 연락한다.',
      '제품의 용도에 맞게 사용한다 (가정용 제품을 다른 용도로 사용하면 환경에 따라 감전, 화재가 일어날 수 있다).',
      '가전제품 위에는 가능한 한 물건을 올려두지 않는다. 특히 무겁거나 위험한 물건을 올려놓지 않는다.',
      '배기구에 전도체를 넣지 않는다.',
      '문에 매달리지 않는다.',
      '화기, 불이 붙기 쉬운 화학물질(에테르, 벤젠, 알콜, 약품, 가스, 가연성 스프레이, 화장품 등)을 근처에서 사용하거나 보관하지 않는다.',
      '가스를 사용하는 가전제품일 경우 매뉴얼에서 가스 누출시 대비방법을 반드시 숙지한다. 가능하면 즉시 환기시키고 제품, 콘센트 등을 건드리지 않는다.',
      '신나, 벤젠 등은 전기부품의 절연을 손상시켜 감전, 화재의 원인이 된다.',
      '제품에서 타는 냄새, 연기 등 발생시 즉시 전원 플러그를 제거 후 서비스센터로 연락한다.',
      '제품 내에 촛불, 드라이기 등을 사용하지 않는다',
      '[폐기]',
      '어린이가 들어갈 수 있는 제품의 경우 문의 고무패킹을 제거 후 폐기한다.',
      '(대형 폐기물) 지역 동사무소로 연락한다.',
    ],
  ],
};
