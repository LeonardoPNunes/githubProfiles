import styled from "styled-components";

export const Title = styled.h1`
    font-size:20px;
    font-weight:700;
    margin-top:10px;
    color:#444;
    width:100%;
    text-align:center;
    height:30px;
    @media (max-width: 298px) {
    font-size: 15px;
  }

`
export const ListOfReposContainer = styled.h1`
    height:300px;
    width:100%;
    padding:10px;
    overflow-y:scroll;
`
export const Repo = styled.div`
    width:100%;
    height:80px;
    background:rgba(0,0,0,.05);
    border-radius:5px;
    padding:10px;
    margin-bottom:10px;
    cursor:pointer;

    h2{
        font-size:15px;
        width:100%;
        overflow:hidden;
        color:#444;
    }
    p{
        font-size:12px;
        font-weight:400;
        color:#777;
        width:100%;
        height:30px;
        overflow:hidden;
        line-height:1.3;
        margin-top:10px;
    }
`