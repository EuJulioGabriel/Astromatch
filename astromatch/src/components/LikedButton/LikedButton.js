import React, {useState, useEffect} from 'react'
import axios from 'axios'

import { url } from '../../constants/constants'

import { Button, Text } from './StyleLikedButton'

function LikedButton(props) {
    const [id, setId] = useState(0)

    useEffect (()=> {
        props.setMatch(false)
        setId(props.idProfile)
    }, [props.idProfile])

    useEffect (()=> {
        document.addEventListener("keydown", onKeyPressed)

        function onKeyPressed(event) {
            if(event.code === "ArrowRight") {
                onClickLiked()
            }
        }

        return () => {
            document.removeEventListener('keydown', onKeyPressed) 
        }
    })
    
    const onClickLiked = () => {
        const body = {
            "id": `${id}`,
            "choice": true
        }
        axios
        .post(`${url}choose-person`, body,)
        .then((response) => {
            props.setMatch(response.data.isMatch)
            window.setTimeout(props.getProfile(), 2000)
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    return (
        <Button onClick={onClickLiked}>❤</Button>
    )
}

export default LikedButton