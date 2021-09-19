import {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { IRandomUserApiPageRequestResult } from '~/models/Common';
import { IUser } from '~/models/User';

interface PatientsContextData {
  patients: IRandomUserApiPageRequestResult<IUser[]> | undefined;
  setPatients: Dispatch<
    SetStateAction<IRandomUserApiPageRequestResult<IUser[]> | undefined>
  >;
}

interface PatientsProviderProps {
  children: ReactNode;
}

const PatientsContext = createContext<PatientsContextData>(
  {} as PatientsContextData,
);

function PatientsProvider({ children }: PatientsProviderProps): ReactElement {
  const [patients, setPatients] =
    useState<IRandomUserApiPageRequestResult<IUser[]>>();

  return (
    <PatientsContext.Provider value={{ patients, setPatients }}>
      {children}
    </PatientsContext.Provider>
  );
}

function usePatients(): PatientsContextData {
  const context = useContext(PatientsContext);

  return context;
}

export { usePatients, PatientsProvider };
