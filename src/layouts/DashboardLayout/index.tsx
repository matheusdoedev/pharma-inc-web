import { ReactElement, ReactNode } from 'react';

import { Sidebar } from '~/components';

import * as S from './styles';

interface IDashboardLayout {
  children?: ReactNode;
}

function DashboardLayout({ children }: IDashboardLayout): ReactElement {
  return (
    <S.Wrapper>
      <Sidebar />
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
}

DashboardLayout.defaultProps = {
  children: () => <></>,
};

export default DashboardLayout;
