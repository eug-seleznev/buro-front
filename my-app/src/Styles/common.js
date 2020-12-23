import styled from 'styled-components'


export const Card = styled.div`
background-color:white;
filter: drop-shadow(0 0 5px black);
padding: 15px;
`
export const H1 = styled.h1`
margin:0;
font-size:30px;
font-weight:bold;

`
export const Table = styled.div`
margin:0;


`
export const Tr = styled.div` //need columns='...' on <Tr> and top='top' on sorting <Tr>
display: grid;
grid-template-columns: ${props => props.columns};     
column-gap: 20px;   
// grid-template-rows: 52px; 
border-bottom: .5px solid gray;  
cursor: pointer;
font-weight: ${props => props.top?'bold':'normal'};


&:hover{
    background-color: ${props => props.top?'white':'rgb(211, 211, 211)'};
}




`
export const Td = styled.p`
overflow: hidden; 
white-space: nowrap;
text-overflow: ellipsis;

`