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
  max-width: 370px;
  
  h1 {
      color: var(--primary);
    }
    
    > header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 100px;
    }
    `

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  background-color: var(--grey-3);

  > h3 {
    padding-top: 20px;
  }

  > p {
    padding-bottom: 20px;
  }
`
