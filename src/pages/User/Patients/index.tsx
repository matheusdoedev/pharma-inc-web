import { ReactElement, useState, useCallback, useEffect } from 'react';

import { TableCell, TableRow } from '@material-ui/core';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import { Input, Select, Table, TextButton } from '~/components';
import { usePatients } from '~/hooks/Patients';
import { DashboardLayout } from '~/layouts';
import { IPageRequestOptions } from '~/models/Common';
import { PatientsService } from '~/services';
import { handleFormatDate } from '~/utils/functions';
import PatientModal from './PatientModal';

import * as S from './styles';

function Patients(): ReactElement {
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [sortFilter, setSortFilter] = useState<string>('');
  const [patientModal, setPatientModal] = useState<boolean>(false);
  const [pageOptions, setPageOptions] = useState<IPageRequestOptions>({
    page: 1,
    results: 50,
  });

  const { patients, setPatients } = usePatients();
  const router = useHistory();

  const handleGetPatients = useCallback(async () => {
    try {
      const response = await PatientsService.getPatients(pageOptions);

      setPatients(response.data);
    } catch (error) {
      toast.error('Não foi possível carregar os pacientes.');
    }
  }, [pageOptions, setPatients]);

  const handleLoadMore = useCallback(() => {
    setPageOptions({
      ...pageOptions,
      page: pageOptions.page + 1,
    });
  }, [pageOptions]);

  const handleOpenPatientModal = useCallback(
    (patientId: string) => {
      router.push(`/${patientId}`);
      setPatientModal(true);
    },
    [router],
  );

  useEffect(() => {
    handleGetPatients();
  }, [handleGetPatients, handleOpenPatientModal]);

  return (
    <>
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
          <Table
            columnsName={['Nome', 'Gênero', 'Data de nascimento', 'Ações']}
          >
            {patients?.results.map(patientItem => (
              <TableRow
                onClick={() => handleOpenPatientModal(patientItem.login.uuid)}
              >
                <TableCell component="th" scope="row">
                  {patientItem.name.first} {patientItem.name.last}
                </TableCell>
                <TableCell>
                  {patientItem.gender === 'male' ? 'Masculino' : 'Feminino'}
                </TableCell>
                <TableCell>
                  {patientItem.dob?.date
                    ? handleFormatDate(patientItem.dob?.date)
                    : '-'}
                </TableCell>
              </TableRow>
            ))}
          </Table>
          <TextButton
            containerStyle={{ marginTop: '3.2rem' }}
            onClick={handleLoadMore}
          >
            Carregar mais...
          </TextButton>
        </S.Wrapper>
      </DashboardLayout>

      <PatientModal
        modalIsVisible={patientModal}
        setModalIsVisible={setPatientModal}
        page={pageOptions.page}
      />
    </>
  );
}

export default Patients;
