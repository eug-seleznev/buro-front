import styled from 'styled-components'


export const Bold = styled.h1`
margin: 0;
padding: 0;
font-family: SuisseIntlSemiBold;
font-size: ${props => props.size}px;
color: ${props => props.color};
`
export const Light = styled.p`
margin: 0;
padding: 0;
font-family: SuisseIntlLight;
font-size: ${props => props.size}px;
color: ${props => props.color};
`
export const Thin = styled.p`
margin: 0;
padding: 0;
font-family: SuisseIntlThin;
font-size: ${props => props.size}px;
color: ${props => props.color};
`


// not in use///////////////////
export const H1 = styled.h1`
margin:0;
margin-bottom: 0px;
font-size:30px;
font-weight:bold;

`
export const H3 = styled.div`

font-size:20px;
font-weight:bold;


`