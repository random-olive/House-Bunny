import React from 'react';

type menuProps = {
  menu: string;
  children?: React.ReactNode;
};

function MenuButton({ menu }: menuProps) {
  return <button>{menu}</button>;
}

export default MenuButton;
