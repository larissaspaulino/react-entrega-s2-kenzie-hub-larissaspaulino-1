import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  background-color: var(--grey-3);
  border-radius: var(--border-radius);
  padding-top: 20px;

  > h3 {
    padding-top: 20px;
  }

  > p {
    padding-bottom: 20px;
  }
`
