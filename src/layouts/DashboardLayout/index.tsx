import { ReactElement, ReactNode } from 'react';

interface IDashboardLayout {
  children?: ReactNode;
}

function DashboardLayout({ children }: IDashboardLayout): ReactElement {
  return <main>{children}</main>;
}

DashboardLayout.defaultProps = {
  children: () => <></>,
};

export default DashboardLayout;
