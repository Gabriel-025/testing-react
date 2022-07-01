import styled from 'styled-components';

export const StyledCard = styled.div`
display:flex;
background-size: cover;
font-family: 'Open Sans';
background-position:50% ;
border-radius: 16px;
color: #ffff;
width: 100%;
height:310px;
@media (max-width: 600px) {
  width:100%;
  height:290px;
  }
.city-event{
  
  font-weight:100;
  letter-spacing: 0px;
  text-align:left;
  font-size:14px;
  color:#fff;
}
.date-city{
font-family: 'Open Sans';
font-weight:900;
text-align:center;
background-color:#4A4A4A ;
border-radius:8px;
padding: 5px 10px  5px 10px ;
color:#fff;
font-size:12px;
margin-right:5px;
cursor:pointer;
}
.gradient{
  background: transparent linear-gradient(360deg, #4A4A4A00 0%, #000000 100%) 0% 0% no-repeat padding-box;
  border-radius: 16px;
  padding:15px 20px;
  width: 100%;
  display: flex;
  flex-direction:column;
  justify-content: space-between
}
`;

 


