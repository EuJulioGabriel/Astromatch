import React, {useState, useEffect} from 'react'
import axios from 'axios'

import { url } from '../../constants/constants'

import { Button, Text } from './StyleLikedButton'

function LikedButton(props) {
    const [id, setId] = useState(0)
    const [match, setMatch] = useState(false)

    useEffect (()=> {
        setId(props.idProfile)
        setMatch(false)
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
            setMatch(response.data.isMatch)
            props.getProfile()
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    const LikedAlso = () => {
        if (match) {
            return (
                <Text>Gostou de você</Text>
            )
        } else {
            return (
                <Button onClick={onClickLiked}>❤</Button>
            )
        }
    }

    return (
        LikedAlso()
    )
}

export default LikedButton