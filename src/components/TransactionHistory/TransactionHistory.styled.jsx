import styled from 'styled-components';

export const Table = styled.table`
width: 50%;
margin: 20px auto;

box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);

`
export const Tr = styled.tr`
background-color: #00bcd5;
height: 50px;
color: white;
`
export const TabString= styled.tr`
&:nth-child(2n) {
    background-color: #f7f7f7; 
  }
`

export const Td = styled.td`
text-align: center;
height: 50px;
`