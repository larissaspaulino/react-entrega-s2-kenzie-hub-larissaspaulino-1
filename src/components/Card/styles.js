import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 48px;
    width: 90%;
    margin: auto; 
    margin-bottom: 22px;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: var(--border-radius);
    background-color: var(--grey-4); 
  transition: 0.3s;


    > h3 {
      font-family: 'Inter', sans-serif;
    }

    :hover {
      background-color: var(--grey-2);
      cursor: pointer;
    }
`