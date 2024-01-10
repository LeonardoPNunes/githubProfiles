import React,{ useContext, useEffect } from "react"
import { FiSearch } from 'react-icons/fi';

import {
    HeaderSection,
    HeaderTitle,
    HeaderInputContainer,
    HeaderInput,
    HeaderSearchButton
} from './styles';

import client from "../../services/client";
import { context } from "../../context"

const Header = (props) => {
    const ctx = useContext(context)
    let ctxLocal = localStorage.getItem("ctx");
    let jsonFormatter = JSON.parse(ctxLocal)

    async function getUserData(){
        try {
            const response = await client.get(`/${ctx.searchedValue}`);
            const repos = await client.get(`/${ctx.searchedValue}/repos`);
            const followers = await client.get(`/${ctx.searchedValue}/followers`);
            const following = await client.get(`/${ctx.searchedValue}/following`);
            ctx?.setUserData(response?.data)
            ctx?.setRepos(repos?.data)
            ctx?.setFollowers(followers?.data)
            ctx?.setFollowing(following?.data)
            if(following && followers && repos && response){
                let jsonFormatter  = {
                    userData: response?.data,
                    repos: repos?.data,
                    followers: followers?.data,
                    following: following?.data,
                    searchedValue: ctx.searchedValue
                }
                localStorage.setItem("ctx", JSON.stringify(jsonFormatter))
            }
        } catch (err) {
            console.log(err)
        }
    }
    function handleKeyPress(e){
        if(e.key === "Enter"){
            // e.preventDefault();
            getUserData();
        }
    }
    useEffect(()=>{
        if(jsonFormatter?.userData){
            ctx?.setUserData(jsonFormatter?.userData)
            ctx?.setRepos(jsonFormatter?.repos)
            ctx?.setFollowing(jsonFormatter?.following)
            ctx?.setFollowers(jsonFormatter?.followers)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return(
        props.found ?
        <HeaderInputContainer>
            <HeaderInput
            placeholder="Busque um outro Usuário"
            value={ctx.searchedValue} 
            onChange={e => ctx.setSearchedValue(e.target.value)}
            onKeyPress={e => handleKeyPress(e)}/>
                <HeaderSearchButton onClick={getUserData}>
                    <FiSearch size={15} />
                </HeaderSearchButton>
        </HeaderInputContainer>
    :
    <HeaderSection>
        <HeaderTitle>Busque um Perfil do github</HeaderTitle>
        <HeaderInputContainer>
            <HeaderInput
            value={ctx.searchedValue} 
            onChange={e => ctx.setSearchedValue(e.target.value)}
            onKeyPress={e => handleKeyPress(e)}/>   
            <HeaderSearchButton
            onClick={getUserData}>
                <FiSearch size={15} />
            </HeaderSearchButton>
        </HeaderInputContainer>
    </HeaderSection>
)};

export default Header;