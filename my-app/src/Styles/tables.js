import styled from 'styled-components'


export const Table = styled.div`
margin:0;
margin-bottom:40px;
border-bottom: 2px solid Black;

`
export const Tr = styled.div` //need columns='...' on <Tr> and top='top' on sorting <Tr>
display: grid;
grid-template-columns: ${props => props.columns};     
column-gap: 20px;   
// grid-template-rows: 52px; 
border-bottom: .5px solid gray;  
cursor: ${props => props.top?'default':'pointer'};
font-weight: ${props => props.top?'bold':'normal'};


&:hover{
    background-color: ${props => props.top?'transparent':'rgb(211, 211, 211)'};
}




`
export const Td = styled.p`
overflow: hidden; 
white-space: nowrap;
text-overflow: ellipsis;

`