import styled from 'styled-components'
import { NavLink } from "react-router-dom"






export const Header =  styled.div`
    position: absolute;
    display: grid;
    grid-template-columns: 1fr max-content max-content;
    // flex-direction: row;
    // justify-content: flex-end;
    align-items: center;
    left:0;
    right:0;
    top: 0;
    width: auto;
    height: 67px;

    background-color: ${props => props.mobile? '#3F496C' : 'white'};
    z-index:999;
    
`

export const ItemHead = styled.div`
    margin-right: 23px;
    display: grid;
    grid-template-columns: max-content max-content;
    column-gap:5px;
    cursor: pointer;

    &.mobile__menu{
       opacity: ${props => props.mobile? '1':'0'};
       width:  ${props => props.mobile? 'max-content' : '0px'};
       margin-left: ${props => props.mobile? '20px' : '0px'};

    }

        .invert{
            filter: invert(${props => props.mobile? '1': '0'}) ;
        }

        .arrow{
           align-self:center;
    filter: invert(${props => props.mobile? '1': '0'}) ;

        }
    
`



export const MenuHead = styled.div`

    z-index: 99999;
    right: ${props => props.right};

    background-color: white;
    height: max-content;
    width: 238px;
    position: absolute;
    top:81px;
    padding:10px;
    border-radius: 15px;
    // display: grid;
    row-gap: 14px;

    
    div.my__name{
        position: static;
        margin:0;
        padding:0;
        padding-bottom: 15px;
        padding-top: 5px;
        min-height: 1em;
        text-align: left;
        font-family: SuisseIntlSemiBold;
        font-size: 16px;
        border-bottom: 0.5px solid #BABABA;
        background-color: transparent;
        border-radius: 0px;

    }
       
  
    button{
        margin-top: 40px;
        width: 100%;
        text-align: left;
    }

`

export const MobMenuLink = styled(NavLink)`
font-family: SuisseIntlSemiBold;
font-size: 22px;
color: white;
text-decoration: none;

`




export const StyledLink = styled(NavLink)`
display:block;
font-size: 25px;
text-decoration:none;
margin: 0;
margin-top: 10px;
cursor: pointer;
color: black;
text-align:left;
z-index:999;
font-family: SuisseIntlLight;
font-size: 16px;

&:hover{
    text-decoration:underline;
   
}
`



export const SidebarContainer = styled.div`
position: fixed;
width: 67px;
min-height: 100vh;
padding-top: 18px;
z-index: 9999;
background-color: #3F496C;
text-align: center;
`

export const SidebarLink = styled(NavLink)`
// display:block;
font-family: SuisseIntlRegular;
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
    img.sidebar__logo{
        margin-bottom: 120px;

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
