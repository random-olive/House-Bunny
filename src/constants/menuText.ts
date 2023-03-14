interface MenuList {
  title: string;
  href: string;
  list1: { item1: string }[];
  list2: { item2: string }[];
}

type Test = {
  title: string;
  href: string;
  list1: { item1: string }[];
  list2: { item2: string }[];
};

export const mainMenu = [
  {
    title: 'main',
    href: '/home',
    list: [
      { title: 'carrot', href: '/housework' },
      { title: 'w&b', href: '/wandb' },
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
      {
        title: '거실',
        href: '/housework',
        list1: [{ item1: 'TV' }, { item1: '에어컨' }, { item1: '실링팬' }],
        list2: [{ item2: '사용 팁' }, { item2: '관리' }, { item2: '청소' }],
      },
      {
        title: '주방',
        href: '/housework',
        list1: [{ item1: '밥솥' }, { item1: '냉장고' }],
        list2: [{ item2: '사용 팁' }, { item2: '관리' }, { item2: '청소' }],
      },
      {
        title: '방',
        href: '/housework',
        list1: [{ item1: '침대' }, { item1: '장롱' },{ item1: '와인셀러' }],
        list2: [{ item2: '사용 팁' }, { item2: '관리' }, { item2: '청소' }],
      },
      {
        title: '화장실',
        href: '/housework',
        list1: [{ item1: '변기' }, { item1: '욕조' }],
        list2: [{ item2: '사용 팁' }, { item2: '관리' }, { item2: '청소' }],
      },
      {
        title: '현관',
        href: '/housework',
        list1: [{ item1: '전실' }, { item1: '베란다' }],
        list2: [{ item2: '사용 팁' }, { item2: '관리' }, { item2: '청소' }],
      },

      { title: 'x', href: '/housework' },
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

// export const itemList = [
//   {
//     title: '거실',
//   },
//   {
//     title: '주방',
//   },
// ];

// export const contentList = [
//   {
//     title: '밥솥',
//     list: [{ content: '사용 팁' }, { content: '관리' }, { content: '청소' }],
//   },
//   {
//     title: '냉장고',
//     list: [{ content: '사용 팁' }, { content: '관리' }, { content: '청소' }],
//   },
// ];

//만약 관리 내 컨텐츠가 많으면 세분화
