import styled from 'styled-components'

export const ContainerHeader = styled.div`
    width: 30vw;
    height: 10vh;
    border-bottom: 1px solid #d3d3d3;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
`

export const BackButton = styled.button`
    display: grid;
    grid-column: 1/2;
    justify-self: center;
    align-self: center;
    background: transparent;
    border-style: none;
`

export const AppLogo = styled.img `
    width: 147px;
    display: grid;
    grid-column: 2/3;
    justify-self: center;
    align-self: center;
`

export const MatchesButton = styled.button`
    display: grid;
    grid-column: 3/4;
    justify-self: center;
    align-self: center;
    background: transparent;
    border-style: none;
`

export const Buttons = styled.img`
    width: 2vw;
    :hover {
        width: 1.5vw;
    }
`