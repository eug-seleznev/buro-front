import styled from 'styled-components'


export const Button =  styled.button`
  display: inline-block;
  border: 0.4px solid #B7B7B7;
  border-radius: 13px;
  font-size:${props => props.fontSize};
  font-family: SuisseIntlSemibold;
  
  padding-left: ${props => props.padd};
  padding-right: ${props => props.padd};
  padding-top: 11px;
  padding-bottom: 9px;
 
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

export const ButtonText =  styled.button`
  display: inline-block;
  border: none;
  background: none;
  width: max-content;
  padding: 0;

  font-size:${props => props.fontSize};
  font-family: SuisseIntlRegular;
  
 
  outline: none;
  text-decoration: none;
  color:  ${props => props.color || '#3F496C'};
  ;

  &:hover{
  text-decoration: underline;


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