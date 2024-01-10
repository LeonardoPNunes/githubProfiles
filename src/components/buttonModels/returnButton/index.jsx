import { useHistory } from "react-router-dom"
import { ButtonToReturn } from "./styles";

const ReturnButton = props =>{
    const history = useHistory();
    const HandleOnClick = route => history.push(route)
    return(
        <ButtonToReturn onClick={()=>HandleOnClick(props.route)}>
            Voltar
        </ButtonToReturn>
    )
}
export default ReturnButton