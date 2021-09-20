import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  padding: ${({ theme }) => theme.spacings.lg};
`;

export const Filters = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.sm};
  margin-bottom: ${({ theme }) => theme.spacings.lg};
`;
