import React from 'react';
import { Spinning } from './styles';
import 'antd/dist/antd.css';
import hug from './img/spinning-loading.gif'


function SpinLoad() {

     
  return (
    <Spinning>
         <img src={hug} alt='loading' />
    </Spinning>
     );
  }


export default SpinLoad;
