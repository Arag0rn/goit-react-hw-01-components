import styled from 'styled-components';

export const ProfileWraper = styled.div`
margin-top: 20px;
display: flex ;
justify-content: center;

`
export const ProfileCard = styled.div`

display: flex;
flex-direction: column;
gap: 10px;
align-items: center;
background-color: white;
border-radius: 5px;
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);


`
export const UserAvatar = styled.img`
margin-top: 20px;
width: 100px;
background-color: aqua;
border-radius: 50%;
`
export const ProfHead = styled.p`
font-weight: bold;
`
export const ProfInfo = styled.p`
font-weight: lighter;
`
export const StatsList = styled.ul`
display: flex;
background-color: #D3D3D3;



`
export const StatsItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
border: solid 0.1px;
border-color: #C8C8C8;
padding: 10px;
width: 70px;
`