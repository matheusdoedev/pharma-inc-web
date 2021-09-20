import { ReactElement } from 'react';

import { PharmaLogoWhite } from '~/assets/icons';

import * as S from './styles';

function Sidebar(): ReactElement {
  return (
    <S.Wrapper>
      <S.Logo src={PharmaLogoWhite} alt="Pharma Inc" />
      <S.Nav>
        <S.NavMenu>
          <S.NavMenuItem>
            <S.NavMenuLink to="/">Pacientes</S.NavMenuLink>
          </S.NavMenuItem>
        </S.NavMenu>
      </S.Nav>
    </S.Wrapper>
  );
}

export default Sidebar;
