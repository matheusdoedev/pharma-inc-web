import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const PatientInformations = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacings.sm};
  margin-bottom: ${({ theme }) => theme.spacings.md};
`;

export const PatientImage = styled.img`
  max-width: 12.8rem;
  max-height: 12.8rem;
  border-radius: 50%;
  align-self: center;
  margin-bottom: ${({ theme }) => theme.spacings.md};
`;

export const PatientInformation = styled.div``;

export const PatientInformationTitle = styled.h4`
  margin-bottom: 0.8;
`;

export const PatientInformationValue = styled.p``;
