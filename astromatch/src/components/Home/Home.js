import React, {useState, useEffect} from 'react'
import axios from 'axios'

import { url } from '../../constants/constants'

import RenderProfile from './RenderProfile'

function Home(props) {
    const [displayedProfile, setDisplayedProfile] = useState([])
    const [traveled, settraveled] = useState(false)

    useEffect(() => {
        getProfile()
        settraveled(false)
    }, [props.deleteSwipes])

    const getProfile = () => {
        axios
        .get(`${url}person`,)
        .then((response) => {
            if (response.data.profile !== null) {
                setDisplayedProfile(response.data.profile)
            } else {
                settraveled(true)
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