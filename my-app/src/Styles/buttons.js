import styled from 'styled-components'


export const Button =  styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;

  color: black;
  border: 2px solid black;
  background: ${props => !props.primary ? "white" : "palevioletred"};

`