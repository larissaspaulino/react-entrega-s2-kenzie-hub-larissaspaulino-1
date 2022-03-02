import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 92%;
  max-width: 780px;

  h1 {
    color: var(--primary);
  }
`

export const Divider = styled.div`
  width: 100vw;
  height: 1px;
  background-color: var(--grey-3);
`

export const User = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 118px;

  > h2 {
    font-size: var(--title-2);
    font-weight: 700;
    font-family: 'Inter', sans-serif;
  }

  > p {
    color: var(--grey-1);
  }

  @media (min-width: 700px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const TitleTechs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 118px;

  > h2 {
    font-size: var(--title-2);
    font-weight: 700;
    font-family: 'Inter', sans-serif;
    color: var(--grey-1);
  }
`

export const TableTechs = styled.div`
  width: 100%;
  max-width: 780px;
  background-color: var(--grey-3);
`

export const NavBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
`
