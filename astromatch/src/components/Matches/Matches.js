import React, {useState, useEffect} from 'react'
import axios from 'axios'

import { url } from '../../constants/constants'

import { Container, LoadingContainer, ProfileImage, NameSpacing} from './StyleMatches'

import CircularProgress from '@material-ui/core/CircularProgress'

function Matches(props) {
    const [matches, setMatches] = useState([])
    const [load, setLoad] = useState(false)

    useEffect(()=> {
        showMatches()
    }, [props.deleteMatches])

    const showMatches = () => {
            axios
            .get(`${url}matches`,)
            .then((response) => {
                setMatches(response.data.matches)
                setLoad(true)
            })
            .catch((error) => {
                alert(error.message)
            })     
    }

    const renderInScreen = () => {
        if (matches.length === 0 && !load) {
            return (
                <LoadingContainer>
                    <CircularProgress />
                </LoadingContainer>
            )
        } else if (matches.length >= 1 && load) {
            return (
                <div>
                    {matches.map((match) => {
                        return (
                            <Container key={match.id}> 
                                <ProfileImage src={match.photo}></ProfileImage> 
                                <NameSpacing>{match.name}</NameSpacing> 
                            </Container>
                        )
                    })}
                </div>
            )
        } else if (matches.length === 0 && load) {
            return (
                <LoadingContainer>
                    <p>Nenhum match</p>
                </LoadingContainer>
            )
        }
    }

    return (
        <div>
            {renderInScreen()}
        </div>
    )
}

export default Matches