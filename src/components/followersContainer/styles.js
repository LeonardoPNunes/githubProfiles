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
export const ListOfFollowersContainer = styled.div`
    height:300px;
    width:100%;
    padding:10px;
    overflow-y:scroll;
`
export const Follower = styled.div`
    width:100%;
    height:80px;
    background:rgba(0,0,0,.05);
    border-radius:5px;
    padding:10px;
    margin-bottom:10px;
    display:flex;
    cursor:pointer;

    h1{
        color:#444;
        font-size:18px;
        font-weight:700;
        overflow: hidden;
        margin-bottom:1vh;
        align-items: :center;
        justify-content: center;
        margin-left:3vw;
    }
`
export const ProfilePicture = styled.img`
    border-radius:50%;
    width:50px;
    height:50px;
    outline:1px solid #444;

`