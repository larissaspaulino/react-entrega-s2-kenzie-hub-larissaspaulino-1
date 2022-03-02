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

export const InputContainer = styled.div`
  display: flex;
  background-color: var(--grey-2);
  border-radius: var(--border-radius);
  padding: 0.5rem;
  border: none;
  color: var(--grey-1);
  width: 100%;
  transition: 0.25s;
  border: var(--border-input);

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

  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--grey-0);
    font-size: 16px;

    &::placeholder {
      color: #868e96;
      font-size: 14px;
    }

:-webkit-autofill,
:-webkit-autofill:hover, 
:-webkit-autofill:focus, 
:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px var(--grey-2) inset !important;
}


  }

  svg {
    margin-right: 5px;
  }

  @media (min-width: 700px) {
    padding: 1rem;
    font-size: 16px;
  }
`

export const Error = styled.div`
    padding-top: 6px;
  `
