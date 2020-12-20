import styled from 'styled-components'


export const Container =  styled.div`
    width: 100vw;
    margin-left:5vw;
    
    align-items: ${props => props.left ? "left" : "center"};

`



export const Title =  styled.h1`
    align-items: center;
  
`




export const Header =  styled.div`
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    left: 85vw;
    top: 2vh;
`

export const ItemHead = styled.div`
    margin-left: 2vw;
    align-self: center;
`




export const MenuHead = styled.div`
    position: absolute;
    width: 10vw;
    heigth: 20vh;
    background-color: grey;
    top: 8vh;
    left: 80vw;
`





export const MenuPro = styled.div`
    position: absolute;
    width: 10vw;
    heigth: 20vh;
    background-color: grey;
    top: 8vh;
    left: 84vw;
`