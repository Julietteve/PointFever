import React,{useEffect} from 'react';
import { Container, Icon, CloseIcon} from "./styles";
import {useDispatch, useSelector} from 'react-redux';
import {getUser} from '../../utils/services';
import {DataUser, NavIcon} from "../UserBar/styles"

const MobileNav = ({isOpen,toggle}) => {

    const dispatch = useDispatch()
    const {userData} = useSelector((state)=> state.userReducer)
    const {name,points} = userData

    useEffect(()=>{
        dispatch(getUser())
    },[dispatch])

    return (
       <Container isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <DataUser>{name}</DataUser>
            <DataUser>{points}</DataUser>
            <NavIcon title="Go Home" to= '/'>
                        <h4>Go Home</h4>
            </NavIcon>
            <NavIcon title="Go to History" to= '/history'>
                        <h4>See history</h4>
            </NavIcon>
            
       </Container>
    );
};

export default MobileNav;