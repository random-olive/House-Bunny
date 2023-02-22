interface MenuList {
  // title: string;
  // href: string;
  // list: { title: string; href: string }[];
}

export const mainMenu = [
  {
    title: 'main',
    href: '/home',
    list: [
      { title: 'carrot', href: '/address' },
      { title: 'w&b', href: '/address' },
      { title: '레시피', href: '/address' },
      { title: '취 미', href: '/address' },
      { title: '파 티', href: '/address' },
      { title: '여 행', href: '/address' },
      { title: '커뮤니티', href: '/address' },
      { title: 'Store', href: '/address' },
    ],
  },
];

export const subMenu = [
  {
    title: 'carrot',
    href: '/housework',
    list: [
      { title: '거실', href: '/address' },
      { title: '주방', href: '/address' },
      { title: '침실', href: '/address' },
      { title: '화장실', href: '/address' },
      { title: '현관', href: '/address' },
      { title: '기타', href: '/address' },
    ],
  },
  {
    title: 'event',
    href: '/event',
    list: [
      { title: '💍', href: '/address' },
      { title: '👶🏻', href: '/address' },
    ],
  },
];

export const subMenuIdx = Array.from(Array(subMenu.length), (_, i) => i);

export const itemList = [
  {
    title: '거실',
    list: [{ item: 'TV' }, { item: '에어컨' }, { item: '실링팬' }],
  },
  {
    title: '주방',
    list: [{ item: '밥솥' }, { item: '냉장고' }],
  },
];

export const contentList = [
  {
    title: '에어컨',
    list: [{ content: '사용 팁' }, { content: '관리' }, { content: '청소' }],
  },
];

//만약 관리 내 컨텐츠가 많으면 세분화
