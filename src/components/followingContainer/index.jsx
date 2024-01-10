import { Section } from "../../styles/global";
import ReturnButton from "../buttonModels/returnButton";
import{
    Title,
    ListOfFollowingContainer,
    Follow,
    ProfilePicture
} from "./styles"

const FollowingContainer = props =>{
    let ctxLocal = localStorage.getItem("ctx");
    let jsonFormatter = JSON.parse(ctxLocal)
    return(
        <Section>
            <ReturnButton route="/"/>
            <Title>{props.name ? props.name : jsonFormatter.userData.name} Segue</Title>
            <ListOfFollowingContainer>
                {Object.keys(props.following).length !== 0 ?
                (props?.following).map(follow =>(
                <Follow onClick={() => window.location.assign(follow?.html_url)} key={follow?.id}>
                    <ProfilePicture src={follow?.avatar_url} alt={follow?.login} />
                    <h1>{follow?.login}</h1>
                </Follow>
                ))
                :
                (jsonFormatter.following).map(follow =>(
                    <Follow onClick={() => window.location.assign(follow?.html_url)} key={follow?.id}>
                        <ProfilePicture src={follow?.avatar_url} alt={follow?.login} />
                        <h1>{follow?.login}</h1>
                    </Follow>
                    ))
            }
            </ListOfFollowingContainer>
        </Section>
    )
}
export default FollowingContainer;