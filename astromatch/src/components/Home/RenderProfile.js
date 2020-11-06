import React, { useState } from 'react'

import { ContainerHome, ContainerMessage, ContainerButtons, InfoProfile, 
         ContentProfile, NameAge, Biography, ProfileImage, Text } from './StyleHome'

import CircularProgress from '@material-ui/core/CircularProgress'

import LikedButton from '../LikedButton/LikedButton'
import UnlikedButton from '../UnlikedButton/UnlikedButton'

function RenderProfile(props) {
    const [match, setMatch] = useState(false)

    const likedYou = () => {
        if(match && !props.traveled) {
            return (
                <Text>O último perfil também gostou de você.</Text>
            )
        }
    }

    const renderInScreen = () => {
        if (props.displayedProfile.length === 0 && !props.traveled) {
            return (
                <ContainerHome>
                    {likedYou()}
                    <CircularProgress />
                </ContainerHome>
            )
        } else if (props.traveled) {
            return (
                <ContainerMessage>
                    <p>Você já percorreu todas as opções, caso queira ver novamente, clique para limpar swipes e 
                    matches.</p>
                </ContainerMessage>
            )
        } else {
            return (
                <ContainerHome>
                    <InfoProfile>
                        <ProfileImage src={props.displayedProfile.photo}></ProfileImage>
                        <ContentProfile>
                            <NameAge>{props.displayedProfile.name}, {props.displayedProfile.age}</NameAge>
                            <Biography>{props.displayedProfile.bio}</Biography>
                        </ContentProfile>
                    </InfoProfile>
                    <ContainerButtons>
                        <UnlikedButton
                            idProfile={props.displayedProfile.id}
                            getProfile={props.getProfile}
                        />
                        <LikedButton 
                            idProfile={props.displayedProfile.id}
                            getProfile={props.getProfile}
                            setMatch={setMatch}
                        />
                    </ContainerButtons>
                </ContainerHome>
            )
        }
    }
    return (
        <>
            {renderInScreen()}
        </>
    )
}

export default RenderProfile