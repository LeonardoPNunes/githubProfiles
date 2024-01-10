import { Section } from "../../styles/global";
import ReturnButton from "../buttonModels/returnButton";
import{
    Title,
    ListOfReposContainer,
    Repo
} from "./styles"

const ReposContainer = props =>{
    let ctxLocal = localStorage.getItem("ctx");
    let jsonFormatter = JSON.parse(ctxLocal)
    return(
        <Section>
            <ReturnButton route="/"/>
            <Title>Repositórios de {(props.name ? props.name : jsonFormatter.userData.name)?.split(" ")[0]}</Title>
            <ListOfReposContainer>
                {
                Object.keys(props.repos).length !== 0 ?
                props?.repos?.map(repo =>(
                    <Repo onClick={() => window.location.assign(repo?.html_url)} key={repo?.id}>
                        <h2>{repo?.name}</h2>
                        <p>{repo?.description}</p>
                    </Repo>
                ))
                :
                jsonFormatter.repos?.map(repo =>(
                    <Repo onClick={() => window.location.assign(repo?.html_url)} key={repo?.id}>
                        <h2>{repo?.name}</h2>
                        <p>{repo?.description}</p>
                    </Repo>
                ))
            
            }
            </ListOfReposContainer>
        </Section>
    );
};

export default ReposContainer