import { useContext } from 'react';
import Container from '../components/container';
import FollowingContainer from '../components/followingContainer';

import { context } from '../context';

const Following = props =>{
    const ctx = useContext(context)
    return(
        <Container>
            <FollowingContainer name={ctx.userData?.name} following={ctx.following}/>
        </Container>
    )
}
export default Following;