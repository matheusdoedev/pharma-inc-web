import { ReactElement, ReactNode } from 'react';
import { PatientsProvider } from './Patients';

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps): ReactElement {
  return <PatientsProvider>{children}</PatientsProvider>;
}

export default AppProvider;
