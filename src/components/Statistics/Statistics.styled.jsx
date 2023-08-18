import styled from 'styled-components';

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
export const StatWrap = styled.section`
margin-top: 20px;
display: grid;
justify-content: center;


`
export const StatList = styled.ul`
display: flex;
justify-content: center;
border-radius: 5px;
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);

`

export const StatHead = styled.h2`
text-align: center;
padding: 25px;
background:white;

`

export const StatListItem = styled.li`
display: grid;
background: ${getRandomHexColor};
width: 60px;
text-align: center;
row-gap: 10px;
padding: 10px;
color:white

`