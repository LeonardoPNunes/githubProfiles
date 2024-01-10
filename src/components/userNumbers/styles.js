import styled from "styled-components"

export const Container = styled.div`
    margin-top:10vh;
    width:100%;
    height:80px;
    padding:0 16px;
    display:flex;
    align-items:center;
    justify-content: space-between;
`

export const NumberContainer = styled.div`
    padding:0 6px;
    height:50px;
    justify-content: center;
    align-items: center;
    display:flex;
    flex-direction:column;

    h1{
        font-size:20px;
        text-align:center;
        color:#444;

    }

    h2{
        font-size:12px;
        text-align:center;
        color:#777;
    }

    &:hover{
        cursor:pointer;
        background:rgba(0,0,0,.03);
        transition: .4s ease;
        border-radius:10px;


    }
`