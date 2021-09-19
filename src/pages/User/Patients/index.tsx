import { ReactElement, useState, useCallback, useEffect } from 'react';

import { TableCell, TableRow } from '@material-ui/core';

import { Input, Select, Table } from '~/components';
import { usePatients } from '~/hooks/Patients';
import { DashboardLayout } from '~/layouts';
import { IPageRequestOptions } from '~/models/Common';
import { PatientsService } from '~/services';

import * as S from './styles';

function Patients(): ReactElement {
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [sortFilter, setSortFilter] = useState<string>('');
  const [pageOptions, setPageOptions] = useState<IPageRequestOptions>({
    page: 1,
    results: 50,
  });

  const { patients, setPatients } = usePatients();

  const handleGetPatients = useCallback(async () => {
    try {
      const response = await PatientsService.getPatients(pageOptions);

      setPatients(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [pageOptions, setPatients]);

  useEffect(() => {
    handleGetPatients();
  }, [handleGetPatients]);

  return (
    <DashboardLayout>
      <S.Wrapper>
        <S.Filters>
          <Select
            name="sort_filter"
            label="Ordenar por"
            placeholder="Ordenar por"
            value={sortFilter}
            setValue={setSortFilter}
            containerStyle={{ maxWidth: '21.8rem' }}
          />
          <Input
            name="name_filter"
            label="Procurar"
            placeholder="Filtrar por nome ou nacionalidade"
            value={searchFilter}
            setValue={setSearchFilter}
            containerStyle={{ maxWidth: '38rem' }}
          />
        </S.Filters>
        <Table columnsName={['Nome', 'Genero']}>
          {patients?.results.map(patient => (
            <TableRow>
              <TableCell component="th" scope="row">
                {patient.name.first} {patient.name.last}
              </TableCell>
              <TableCell>{patient.gender}</TableCell>
            </TableRow>
          ))}
        </Table>
      </S.Wrapper>
    </DashboardLayout>
  );
}

export default Patients;
