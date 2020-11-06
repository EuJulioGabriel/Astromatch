import styled from 'styled-components'

export const ContainerHome = styled.div `
    width: 30vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const ContainerMessage = styled.div`
    display: flex;
    width: 30vw;
    height: 80vh;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`

export const ContainerButtons = styled.div`
    width: 28vw;
    display: flex;
    justify-content: space-around;
`

export const InfoProfile = styled.div`
    width: 30vw;
    height: 60vh;
    display: grid;
    grid-template-rows: 8fr 1fr 1fr;
    grid-template-columns: 1fr 5fr 1fr;
`

export const ContentProfile = styled.div`
    width: 28vw;
    display: grid;
    grid-row: 3/3;
    grid-column: 2/3;
    background-color: rgba(0,0,0,.4);
`

export const NameAge = styled.div`
    width: 28vw;
    color: white;
    font-size: 24px;
    font-weight: bold;
    margin-left: 1vw;
`

export const Biography = styled.p`
    width: 25vw;
    color: white;
    font-size: 16px;
    font-weight: bold;
    margin-left: 1vw;
`

export const ProfileImage = styled.img`
    width: 28vw;
    height: 60vh;
    border-radius: 5px;
    display: grid;
    grid-row: 1/3;
    grid-column: 2/3;
`

export const Text = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: green;
`