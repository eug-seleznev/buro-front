import styled from 'styled-components'


export const Container =  styled.div`
padding-left: ${props => props.dimensions.width<600? '30' : props.dimensions.width<1700? '135': '250'}px;
padding-right:${props => props.dimensions.width<600? '30' : props.dimensions.width<1700? '70': '70'}px;
width: 100%;
height: 100%;
padding-top: 200px;
padding-bottom: 200px;
background-color: #ECECEC;


`





export const Card = styled.div`
background: #FFFFFF;

padding: 15px;
padding-left:25px;
border: 1px solid #CECECE;
border-radius: 15px;
`




// не используем, не удалял, чтоб не ломались импорты старые, вся типография переносится в typography.js
export const SmallContainer =  styled.div`
margin-left: 30vw;
width: 40vw;
margin-top: 20vh;

`


export const Title =  styled.h1`
    align-items: center;
  
`
// /////////////////////////////////////////////



