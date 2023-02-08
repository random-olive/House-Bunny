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
