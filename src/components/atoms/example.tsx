import React from 'react';
// import { Menu } from 'components/buttons/MenuButton';

type menuProps = {
  menu: string;
  children?: React.ReactNode;
};

function MenuButton({ menu }: menuProps) {
  return <button>{menu}</button>;
}

export default MenuButton;
