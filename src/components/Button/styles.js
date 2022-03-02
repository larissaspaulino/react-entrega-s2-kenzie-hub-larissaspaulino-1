import {
  primary,
  grey1,
  grey2,
  grey3,
  primaryFocus,
  grey0,
} from '../../styles/global'
import styled, { css } from 'styled-components'

export const Container = styled.button`
  /* width: ${(props) => (props.sair ? '55px' : props.voltar ? '68px' : '90%')};
    height: ${(props) => (props.sair || props.voltar ? '32px' : '48px')}; */
  width: 90%;
  border: none;
  height: 38px;
  border-radius: var(--border-radius);
  background-color: ${(props) => props.bgColor};
  color: #fff;
  font-size: 12px;
  margin-bottom: 20px;
  transition: 0.45s;

  :hover {
    background-color: ${(props) =>
      props.bgColor === grey1 ? grey2 : primaryFocus};
    color: ${(props) => (props.bgColor === grey1 ? grey0 : grey3)};
  }

  ${(props) =>
    props.textButton &&
    css`
      height: 32px;
      width: fit-content;
      padding: 0px 16px;
      font-size: 12px;
      font-weight: 600;
      background-color: var(--grey-3);
      margin: 0;
      transition: 0.25s;

      :hover {
        background-color: var(--grey-2);
        color: var(--grey-0);
      }
    `}

  @media (min-width: 700px) {
    height: 48px;
    font-size: 16px;
  }
`
