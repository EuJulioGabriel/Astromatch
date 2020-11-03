import React, {useState, useEffect} from 'react'
import axios from 'axios'

import { url } from '../../constants/constants'

import { Button } from './StyleUnlikedButton'

function UnlikedButton(props) {
    const [id, setId] = useState(0)

    useEffect(()=> {
        setId(props.idProfile)
    }, [props.idProfile])

    useEffect (()=> {
        document.addEventListener("keydown", onKeyPressed)

        function onKeyPressed(event) {
            if(event.code === "ArrowLeft") {
                onClickUnlikedButton()
            }
        }

        return () => {
            document.removeEventListener('keydown', onKeyPressed) 
        }
    })

    const onClickUnlikedButton = () => {
        const body = {
            "id": `${id}`,
	        "choice": false
        }
        axios
        .post(`${url}choose-person`, body,)
        .then(() => {
            props.getProfile()
        })
        .catch((error) => {
            alert(error.message)
        })    
    }

    return (
        <Button onClick={onClickUnlikedButton}>X</Button>
    )
}

export default UnlikedButton