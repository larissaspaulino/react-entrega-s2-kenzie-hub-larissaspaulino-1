import styled, { css } from 'styled-components'

export const Container = styled.div`
  text-align: left;
  width: 90%;
  margin: auto;
  padding-bottom: 20px;

  span {
    color: var(--negative);
  }
`

export const Label = styled.div`
  margin-bottom: 20px;
`

export const SelectContainer = styled.div`
  background-color: var(--grey-2);
  border-radius: var(--border-radius);
  border: none;
  color: var(--grey-1);
  width: 100%;
  display: flex;
  transition: 0.25s;
  border: var(--border-input);
  padding-right: 10px;

  :focus-within {
    border: var(--border-white);
  }

  ${(props) =>
    props.isErrored &&
    css`
      //NÃO TÁ PEGANDO A BORDA QUANDO DÁ ERRO
      border: var(--border--red);
      svg {
        color: var(--negative);
      }
    `}

  select {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--grey-0);
    font-size: 16px;
    width: 100%;
    padding: 0.5rem;

    &::placeholder {
      color: #868e96;
      font-size: 14px;
    }

    option {
      background-color: var(--grey-2);
    }
  }

  svg {
    margin-right: 16px;
  }

  @media (min-width: 700px) {
    select {
      padding: 1rem;
      font-size: 16px;
    }
  }
`

export const Error = styled.div`
  padding-top: 6px;
`
