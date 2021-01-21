import styled from 'styled-components'
import { NavLink } from "react-router-dom"






export const Header =  styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    left:0;
    right:0;
    top: 0;
    width: auto;
    height: 67px;

    background-color: white;
    z-index:999;
    
`

export const ItemHead = styled.div`
    margin-right: 23px;
    display: grid;
    grid-template-columns: max-content max-content;
    column-gap:5px;
    

        .arrow{
           align-self:center;
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



export const SidebarContainer = styled.div`
position: fixed;
width: 67px;
min-height: 100vw;
padding-top: 125px;
z-index: 9999;
background-color: #3F496C;

`

export const SidebarLink = styled(NavLink)`
// display:block;
font-family: SuisseIntlSemiBold;
font-size: 12px;
text-decoration:none;
width: max-content;
height: max-content;
cursor: pointer;
color: white;
text-align:center;


img{
    margin:0;
   
}
p{
    margin:0;
    margin-bottom: 30px;
}
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
