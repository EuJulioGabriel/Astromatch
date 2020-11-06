import React, {useState, useEffect} from 'react'
import axios from 'axios'

import { url } from '../../constants/constants'

import RenderProfile from './RenderProfile'

function Home(props) {
    const [displayedProfile, setDisplayedProfile] = useState([])
    const [traveled, setTraveled] = useState(false)

    useEffect(() => {    
        setTraveled(false)
        getProfile()
    }, [props.deleteSwipes])

    const getProfile = () => {
        setDisplayedProfile([])
        setTraveled(false)

        axios
        .get(`${url}person`,)
        .then((response) => {
            if (response.data.profile !== null) {
                setDisplayedProfile(response.data.profile)
            } else {
                setTraveled(true)
                setDisplayedProfile([])
            }   
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    return (
        <div>
            <RenderProfile 
                displayedProfile={displayedProfile}
                traveled={traveled}
                getProfile={getProfile}
            /> 
        </div>
    )
}

export default Home