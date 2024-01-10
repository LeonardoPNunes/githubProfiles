import React,{ useContext } from "react"

import Container from '../components/container';
import Header from '../components/header';
import UserContainer from '../components/userContainer';
import UserDetails from '../components/userDetails';
import UserNumbers from '../components/userNumbers';
import UserPicture from '../components/userPicture';

import { context } from "../context"
import { AlignContent } from "../styles/global";

export default function Home() {
    const ctx = useContext(context)

    let data = ctx.userData
    return (
        <Container>
           {!data?.name &&
            <Header found={false}/>
           }
            {data?.name &&
            <AlignContent>
            <UserContainer>
                <Header found={true}/>
                <UserPicture url={data?.avatar_url} alternativeText={data.login}/>
                <UserDetails name={data?.name} login={data?.login} bio={data?.bio}/>
                <UserNumbers repo={data?.public_repos} followers={data?.followers} following={data?.following}/>
            </UserContainer>
            </AlignContent>
            }
        </Container>
    );
}