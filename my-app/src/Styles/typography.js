import styled from 'styled-components'


export const Bold = styled.div`

font-family: SuisseIntlSemiBold;
font-size: ${props => props.size}px;
color: ${props => props.color || 'black'};
`
export const Light = styled.div`

font-family: SuisseIntlLight;
font-size: ${props => props.size}px;
color: ${props => props.color || 'black'};
`
export const Thin = styled.div`

font-family: SuisseIntlThin;
font-size: ${props => props.size}px;
color: ${props => props.color || 'black'};
`
export const Regular = styled.div`

font-family: SuisseIntlRegular;
font-size: ${props => props.size}px;
color: ${props => props.color || 'black'};
`
export const Ultralight = styled.p`
margin: 0;
padding: 0;
font-family: SuisseIntlUltralight;
font-size: ${props => props.size}px;
color: ${props => props.color || 'black'};
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