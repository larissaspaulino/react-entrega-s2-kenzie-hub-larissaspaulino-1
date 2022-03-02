import styled from 'styled-components'

export const Container = styled.button`
  width: fit-content;
  padding: 0px 11px;
  height: 32px;
  background-color: var(--grey-3);
  border: 0;
  border-radius: var(--border-radius);
  color: var(--grey-0);
  transition: 0.25s;

  :hover {
    background-color: var(--grey-2);
  }
`
