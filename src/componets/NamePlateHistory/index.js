import React from 'react';
import {MenuIcon, ContainerIcon, Title} from '../Nameplate/styles';
import {FiMenu}  from "react-icons/fi";

function HistoryNamePlate({toggle}) {
    return (
        <ContainerIcon>
        <MenuIcon onClick={toggle} >
            <FiMenu/>
        </MenuIcon>
            <Title to='/'>POINTFEVER</Title>
        </ContainerIcon>
    )
}

export default HistoryNamePlate
