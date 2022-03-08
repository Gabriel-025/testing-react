import React from 'react';
import { StyledCard } from './styles';
import OrangeBtn from '../Button';
import { Col } from 'react-bootstrap';
import { formattedDate } from '../../Controler/';


function CardEvent({ itens }) {
  
  return(
       <StyledCard>
                    {itens.map((item, index) => {
                       return index <= 2 && (
                          <Col style={{paddingLeft:'10px',paddingRight:'10px'}}  xs={12} sm={6} lg={4} key={index}>
                           <StyledCard style={{backgroundImage: `url(${item.coverImagePath})`}}  alt=''  key={item.id}>
                            <div className='gradient'>
                              <div>  
                                <span className='city-event'>{item.city}</span> 
                                <span><p className='title'  style={{marginBottom:'13px',lineHeight:'1'}}>{item.title}</p></span>
                                <span className='date-city'> {formattedDate(item.startDate)} </span>
                                <span className='date-city'> {item.city} </span>
                            </div>
                                  <div style={{display:'flex' ,justifyContent:'flex-end'}}>
                                          <OrangeBtn text="INSCREVA-SE"/>
                                  </div>
                            </div> 
                           </StyledCard>
                          </Col>
                   )
                  }
                )} 
      </StyledCard>
    )}
export default CardEvent;
