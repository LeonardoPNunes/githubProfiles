import styled from "styled-components";

export const AlignContent = styled.div`
    display: flex;
`
export const Section = styled.section`
    width:400px;
    height:400px;
    background:rgba(255,255,255,.95);
    border-radius:10px;
    border-bottom:10px solid #4b0081;
    margin-top:15px;

    @media (max-width: 583px) {
    width: 90vw;
  }
`