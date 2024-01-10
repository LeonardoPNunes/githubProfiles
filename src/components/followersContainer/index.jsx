import { Section } from "../../styles/global";
import ReturnButton from "../buttonModels/returnButton";
import{
    Title,
    ListOfFollowersContainer,
    Follower,
    ProfilePicture
} from "./styles";

const FollowersContainer = props =>{
    let ctxLocal = localStorage.getItem("ctx");
    let jsonFormatter = JSON.parse(ctxLocal)
    return(
        <Section>
            <ReturnButton route="/"/>
            <Title>Seguidores de {props.name ? props.name : jsonFormatter.userData.name}</Title>
            <ListOfFollowersContainer>
                {Object.keys(props.followers).length !== 0 ?
                props?.followers.map(follower =>(
                <Follower onClick={() => window.location.assign(follower?.html_url)} key={follower?.id}>
                    <ProfilePicture src={follower?.avatar_url} alt={follower?.login} />
                    <h1>{follower?.login}</h1>
                </Follower>
                ))
                :
                jsonFormatter?.followers.map(follower =>(
                    <Follower onClick={() => window.location.assign(follower?.html_url)} key={follower?.id}>
                        <ProfilePicture src={follower?.avatar_url} alt={follower?.login} />
                        <h1>{follower?.login}</h1>
                    </Follower>
                    ))
            }
            </ListOfFollowersContainer>
        </Section>
    )
}
export default FollowersContainer;