import React, {useState} from 'react'
import axios from 'axios'

import { url } from './constants/constants'

import { ContainerGeneral, Container, CleanButton } from './StyleApp'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Matches from './components/Matches/Matches'

function App() {
  const [changePageButton, setChangePageButton] = useState(false)
  const [deleteMatches, setDeleteMatches] = useState(false)
  const [deleteSwipes, setDeleteSwipes] = useState(false)

  const onClickChangePageButton = () => {
    setChangePageButton(!changePageButton)
    setDeleteMatches(false)
    setDeleteSwipes(false)
  }

  const onClickClearAll = () => {
    axios
    .put(`${url}clear`,)
    .then(() => {
      setDeleteMatches(true)
      setDeleteSwipes(true)
    })
    .catch((error) => {
      alert(error.message)
    })
  }

  const renderInScreen = () => {
    if (!changePageButton) {
      return (
        <Home 
          deleteSwipes={deleteSwipes}
        />
      )
    } else {
      return (
        <Matches 
          deleteMatches={deleteMatches}
        />
      )
    }
  }

  return (
    <ContainerGeneral>
      <Container>
        <Header
          changePageButton={changePageButton} 
          onClickChangePageButton={onClickChangePageButton}
        />
        {renderInScreen()}
      </Container>
      <CleanButton onClick={onClickClearAll}>Limpar swipes e matches</CleanButton>
    </ContainerGeneral>
  )

}

export default App