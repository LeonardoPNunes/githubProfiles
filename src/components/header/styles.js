import styled from 'styled-components';

export const HeaderSection = styled.header`
    width: 55vw;
    height: 35vh;
    background: rgba(255,255,255,.89);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 0;
    @media (max-width: 583px) {
    width: 90vw;
  }
`

export const HeaderTitle = styled.h1`
    margin: 0;
    padding: 15px 0;
    font-size: 30px;
  
    text-align: center;
    width: 100%;
`

export const HeaderInputContainer = styled.div`
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeaderInput = styled.input`
    width: 200px;
    height: 30px;
    border-radius: 15px;
    border: none;
    padding: 0 16px;
    color: #444;
    transition: .4s ease;
    font-size: 12px;

    &:focus {
        outline: none;
        width: 220px;
        transition: .4s ease;
    }
`

export const HeaderSearchButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    border: none;
    background: #4b0081;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    transition: ease .3s;

    &:hover {
        transform: scale(1.05);
        transition: ease .3s;
        cursor: pointer;
    }
`