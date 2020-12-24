import styled from 'styled-components'
import { NavLink } from "react-router-dom"






export const Header =  styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    right: 10vw;
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
    top: 50px;
    

    div{
        background-color: white;
        height: max-content;
        width: max-content;
        position: absolute;
        top:4vh;
        padding:10px;
    }
       
    .open__menu{
        display: ${props => props.open.menu==true? 'block' : 'none'};
        left: 72vw;
    }
    .open__menuProfile{
        display: ${props => props.open.menuProfile==true? 'block' : 'none'};
        left: 79vw;
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





export const SidebarOpen = styled.div`
display: ${props => props.open? 'block' : 'none'};
position: absolute;
left:110px;
top: ${props=>props.top}px;
width: max-content;
background-color: white;
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
