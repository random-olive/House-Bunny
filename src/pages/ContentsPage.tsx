import {
  AdvSection,
  ContentSection,
  TipSection,
} from 'components/molecules/Section';
import { subMenuList } from 'constants/dataComponent';
import { useState } from 'react';
import { SubMenuBarSet } from 'components/molecules/MenuBar';
import { SubMenuLayout } from 'components/templates/Layouts';
import {
  riceCooker,
  refrigerator,
  TV,
  airConditioner,
  ceilingFan,
  bed,
  wardrobe,
  wineCellar,
  toilet,
  bath,
  frontRoom,
  veranda,
  notice,
  tipList,
} from 'constants/itemText';
import PATH from 'constants/routePath';

const ContentsPage = () => {
  const [selected, setSelected] = useState({
    menu: '',
    item: '',
    content: '',
    list1: [],
    // list2: [],
    idx1: -1,
    idx2: -1,
    idx3: -1,
  });
  return (
    <>
      <SubMenuBarSet selected={selected} setSelected={setSelected} />
      <AdvSection />
      {window.location.pathname === PATH.HOUSE_WORK ? (
        <ContentSection
          item={
            selected.idx1 === 0 && selected.idx2 === 0
              ? TV
              : selected.idx1 === 0 && selected.idx2 === 1
              ? airConditioner
              : selected.idx1 === 0 && selected.idx2 === 2
              ? ceilingFan
              : selected.idx1 === 1 && selected.idx2 === 0
              ? riceCooker
              : selected.idx1 === 1 && selected.idx2 === 1
              ? refrigerator
              : selected.idx1 === 2 && selected.idx2 === 0
              ? bed
              : selected.idx1 === 2 && selected.idx2 === 1
              ? wardrobe
              : selected.idx1 === 2 && selected.idx2 === 2
              ? wineCellar
              : selected.idx1 === 3 && selected.idx2 === 0
              ? toilet
              : selected.idx1 === 3 && selected.idx2 === 1
              ? bath
              : selected.idx1 === 4 && selected.idx2 === 0
              ? frontRoom
              : selected.idx1 === 4 && selected.idx2 === 1
              ? veranda
              : notice
          }
        />
      ) : (
        <TipSection item={tipList} />
      )}
    </>
  );
};

export default ContentsPage;
