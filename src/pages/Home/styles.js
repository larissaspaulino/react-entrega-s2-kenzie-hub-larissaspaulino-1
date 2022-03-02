import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  text-align: center;

  h1 {
    font-size: 60px;
    padding-bottom: 60px;
  }

  > img {
    width: 85%;
  }

  a {
    color: var(--primary);

    :hover {
      color: var(--grey-2);
    }
  }

  @media (min-width: 1100px) {
    flex-direction: row;

    img {
      width: 70%;
      max-width: 40vw;
    }
  }
`

export const Button = styled.button`
  width: 220px;
  height: 50px;
  margin-bottom: 20px;
  color: var(--grey-0);
  background-color: var(--primary);
  border-radius: var(--border-radius);
  border: none;
  font-family: monospace;
  font-size: 18px;

  :hover {
    background-color: var(--grey-0);
    color: var(--grey-4);
  }
`
