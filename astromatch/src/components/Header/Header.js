import React from 'react'

import Logo from '../../images/logo.png'
import MatchButton from '../../images/avatar.svg'
import HomeButton from '../../images/grupo.svg'

import { ContainerHeader, AppLogo, BackButton, Buttons, MatchesButton } from './StyleHeader'

function Header(props) {
    const renderButtonInScreen = (button) => {
        if (!button) {
            return (
                <ContainerHeader>
                    <AppLogo src={Logo}></AppLogo>
                    <MatchesButton onClick={props.onClickChangePageButton}>
                        <Buttons src={MatchButton}></Buttons>
                    </MatchesButton> 
                </ContainerHeader>
            )
        } else {
            return (
                <ContainerHeader>
                    <BackButton onClick={props.onClickChangePageButton}>
                        <Buttons src={HomeButton}></Buttons>
                    </BackButton>
                    <AppLogo src={Logo}></AppLogo>
                </ContainerHeader>
            )
        }
    }

    return (
        <div>
            {renderButtonInScreen(props.changePageButton)}
        </div>
    )
}

export default Header