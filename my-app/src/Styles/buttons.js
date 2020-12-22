import styled from 'styled-components'


export const Button =  styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;

  color: black;
  border: 2px solid black;
  background: ${props => !props.primary ? "white" : "palevioletred"};

&:hover{
  color: "red";
}


`