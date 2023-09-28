import styled from 'styled-components';

interface ILabel {
  error?: string | undefined;
}

export const StyledLabel = styled.label<ILabel>`
  display: inline-block;
  font-weight: 500;
  font-size: 1.4rem;
  color: ${({ error }) => setColor(error)};
  margin-bottom: 1rem;
`;

const setColor = (error: string | undefined) => {
  return error === 'true' ? 'rgba(244, 63, 94, 1)' : 'var(--clr-gray-dark-2)';
};
