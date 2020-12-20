import styled from 'styled-components'


export const Container =  styled.div`
    width: 100vw;
    margin-left:5vw;
    
    align-items: ${props => props.left ? "left" : "center"};

`



export const Title =  styled.h1`
    align-items: center;
  

`