import styled from 'styled-components'


export const Container =  styled.div`
    width: 100vw;
    margin-left:5vw;
    
    align-items: ${props => props.left ? "left" : "center"};

`

export const Flex = styled.div`
    display: flex;
    flex-direction: column;


`
export const Item = styled.div`
    margin-bottom: 10vh;
    margin-top: 2vh;

`



export const Title =  styled.h1`
    align-items: center;
  
`

export const Status = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${props => props.red ? "red" : "green"};

`




export const Header =  styled.div`
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    right: 20vw;
    top: 2vh;
`

export const ItemHead = styled.div`
    margin-left: 2vw;
    align-self: center;
    

    svg{
        height:30px;
        width: 30px;
        margin-top:10px;
        margin-bottom:auto;
    }
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