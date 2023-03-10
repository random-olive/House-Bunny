import { AdvSection, ContentSection } from 'components/molecules/Section';
import { subMenuList } from 'constants/dataComponent';
import { useState } from 'react';
import { SubMenuBarSet } from 'components/molecules/MenuBar';
import { SubMenuLayout } from 'components/templates/Layouts';
import { riceCooker } from 'constants/itemText';
import styled from 'styled-components';

const ContentsPage = () => {
  const [selected, setSelected] = useState({ menu: '', item: '', content: '',list1:[], list2:[] });
  return (
    <>
      <SubMenuBarSet selected={selected} setSelected={setSelected} />
      <AdvSection />
      <ContentSection item={riceCooker} />
    </>
  );
};

export default ContentsPage;
