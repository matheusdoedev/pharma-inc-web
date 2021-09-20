import {
  ReactElement,
  Dispatch,
  SetStateAction,
  useState,
  useCallback,
  useEffect,
} from 'react';

import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Button, Modal } from '~/components';
import { usePatients } from '~/hooks/Patients';
import { IUser } from '~/models/User';
import { handleCopyToClipboard, handleFormatDate } from '~/utils/functions';

import * as S from './styles';

interface IPatientModal {
  modalIsVisible: boolean;
  setModalIsVisible: Dispatch<SetStateAction<boolean>>;
  page: number;
}

function PatientModal({
  modalIsVisible,
  setModalIsVisible,
  page,
}: IPatientModal): ReactElement {
  const [patient, setPatient] = useState<IUser>();

  const router = useHistory();
  const { id } = useParams<{ id: string }>();
  const { patients } = usePatients();

  const handleGetPatient = useCallback(() => {
    if (id) {
      setPatient(
        patients?.results.find(patientItem => patientItem.login.uuid === id),
      );
    } else {
      router.goBack();
      setModalIsVisible(false);
      toast.error('Não foi possível carregar as informações do paciente.');
    }
  }, [id, patients, router, setModalIsVisible]);

  const handleSharePatientURL = useCallback(() => {
    const patientUrl = `${process.env.REACT_APP_BASE_URL}/${id}?page=${page}`;

    handleCopyToClipboard(patientUrl);
  }, [id, page]);

  useEffect(() => {
    if (modalIsVisible) {
      handleGetPatient();
    }
  }, [handleGetPatient, modalIsVisible]);

  return (
    <Modal
      modalTitle="Paciente"
      modalIsVisible={modalIsVisible}
      setModalIsVisible={setModalIsVisible}
    >
      <S.Wrapper>
        <S.PatientImage
          src={patient?.picture?.medium ?? ''}
          alt={patient?.name?.last ?? '-'}
        />
        <S.PatientInformations>
          <S.PatientInformation>
            <S.PatientInformationTitle>ID</S.PatientInformationTitle>
            <S.PatientInformationValue>
              {patient?.login?.uuid ?? '-'}
            </S.PatientInformationValue>
          </S.PatientInformation>
          <S.PatientInformation>
            <S.PatientInformationTitle>Nome</S.PatientInformationTitle>
            <S.PatientInformationValue>
              {patient?.name?.first} {patient?.name?.last}
            </S.PatientInformationValue>
          </S.PatientInformation>
          <S.PatientInformation>
            <S.PatientInformationTitle>E-mail</S.PatientInformationTitle>
            <S.PatientInformationValue>
              {patient?.email}
            </S.PatientInformationValue>
          </S.PatientInformation>
          <S.PatientInformation>
            <S.PatientInformationTitle>Gênero</S.PatientInformationTitle>
            <S.PatientInformationValue>
              {patient?.gender === 'male' ? 'Masculino' : 'Feminino'}
            </S.PatientInformationValue>
          </S.PatientInformation>
          <S.PatientInformation>
            <S.PatientInformationTitle>
              Data de nascimento
            </S.PatientInformationTitle>
            <S.PatientInformationValue>
              {patient?.dob?.date ? handleFormatDate(patient.dob?.date) : '-'}
            </S.PatientInformationValue>
          </S.PatientInformation>
          <S.PatientInformation>
            <S.PatientInformationTitle>Telefone</S.PatientInformationTitle>
            <S.PatientInformationValue>
              {patient?.phone}
            </S.PatientInformationValue>
          </S.PatientInformation>
          <S.PatientInformation>
            <S.PatientInformationTitle>Nacionalidade</S.PatientInformationTitle>
            <S.PatientInformationValue>
              {patient?.location?.country ?? '-'}
            </S.PatientInformationValue>
          </S.PatientInformation>
          <S.PatientInformation>
            <S.PatientInformationTitle>Endereço</S.PatientInformationTitle>
            <S.PatientInformationValue>
              {patient?.location?.street?.name ?? '-'}
            </S.PatientInformationValue>
          </S.PatientInformation>
          <S.PatientInformation>
            <S.PatientInformationTitle>Estado</S.PatientInformationTitle>
            <S.PatientInformationValue>
              {patient?.location?.state ?? '-'}
            </S.PatientInformationValue>
          </S.PatientInformation>
          <S.PatientInformation>
            <S.PatientInformationTitle>Cidade</S.PatientInformationTitle>
            <S.PatientInformationValue>
              {patient?.location?.city ?? '-'}
            </S.PatientInformationValue>
          </S.PatientInformation>
        </S.PatientInformations>
        <Button onClick={handleSharePatientURL}>Compartilhar</Button>
      </S.Wrapper>
    </Modal>
  );
}

export default PatientModal;
