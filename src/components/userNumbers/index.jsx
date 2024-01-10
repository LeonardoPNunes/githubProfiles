import React from "react"
import { useHistory } from "react-router-dom"
import {
    Container,
    NumberContainer
} from "./styles"

const UserNumbers = props =>{
    const history = useHistory();
    const HandleOnClick = route => history.push(route)
    return(
        <Container>
            <NumberContainer onClick={() => HandleOnClick("/repos")}>
                <h1>{props.repo}</h1>
                <h2>Repositórios</h2>
            </NumberContainer>
            <NumberContainer onClick={() => HandleOnClick("/followers")}>
                <h1>{props.followers}</h1>
                <h2>Seguidores</h2>
            </NumberContainer>
            <NumberContainer onClick={() => HandleOnClick("/following")}>
                <h1>{props.following}</h1>
                <h2>Seguindo</h2>
            </NumberContainer>
        </Container>

    );
}
export default UserNumbers;