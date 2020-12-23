import styled from 'styled-components'
import { NavLink } from "react-router-dom"


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
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    right: 20vw;
    top: 2vh;
    z-index:999;
`

export const ItemHead = styled.div`
    margin-left: 2vw;
    align-self: center;
    

    svg{
        height:20px;
        width: 20px;
       
    }
    .svg__plus{
        height:40px;
        width:40px;
    }
`



export const MenuHead = styled.div`
    position: absolute;
    display:flex;
    width: auto;
    padding: 10px;
    heigth: auto;
    background: none;
    top: 8vh;
    

    div{
        background-color: white;
        height: max-content;
        width: max-content;
        position: absolute;
        top:4vh;
    }
       
    .open__menu{
        display: ${props => props.open.menu==true? 'block' : 'none'};
        left: 70.3vw;
    }
    .open__menuProfile{
        display: ${props => props.open.menuProfile==true? 'block' : 'none'};
        left: 75.3vw;
    }


`


export const StyledLink = styled(NavLink)`
display:block;
font-size: 25px;
text-decoration:none;
margin-top:0;
margin-bottom:10px;
cursor: pointer;
color: black;
text-align:left;
z-index:999;

&:hover{
    text-decoration:underline;
   
}
`













// /////////////   not in use??  ////////////////////////////////////
export const MenuPro = styled.div`
    position: absolute;
    width: 10vw;
    heigth: 20vh;
    background-color: grey;
    top: 8vh;
    left: 84vw;
`
export const Container =  styled.div`
    width: 100vw;
    margin-left:5vw;
    
    align-items: ${props => props.left ? "left" : "center"};

`



export const Title =  styled.h1`
    align-items: center;
  
`
