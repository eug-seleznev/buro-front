import styled from 'styled-components'


export const Button =  styled.button`
  display: inline-block;
  border-radius: 30px;
  font-size:${props => props.fontSize};
  font-family: SuisseIntlRegular;
  width: auto;
  padding-left:15px;
  padding-right: 15px;
  height: 35px;
  outline: none;
  text-decoration: none;
  color: white;
  background-color: ${props => props.grey ? "grey" : "#3F496C"};
  ;

  &:hover{
  // text-decoration: underline;
  background-color: black;

}


`
export const LoginButton =  styled.button` 
  outline: none;
  display: inline-block;
  border-radius: 0px;
  padding: 10px ;
  border: 0px solid black;
  background-color: white;

`