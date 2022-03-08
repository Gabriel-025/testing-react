import React, { useState} from 'react';
import { Styledbtn, StyledMain} from './styles';
import api from '../../services/api';
import 'antd/dist/antd.css';
import CardEvent from '../../components/CardEvent';
import OrangeBtn from '../../components/Button';
import SpinLoad from '../../components/Spinning';


// import Resultados from '../../components/Results';
function Home() {

    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

  const [showElement, setShowElement] = useState(false);
  
      const showOrHide = () => {
        setShowElement(true);
        loadLista();
      };

  const loadLista = async () => {
            setIsLoading(true);
            const response = await api.get('/');
            setList(response.data.result.list);
            setIsLoading(false);
    console.log(loadLista)
          };
         
     
  return (
        <>   
                <Styledbtn style={{ display: showElement === true ? 'none' : 'flex'}} >
                        <button style={{border:'none',background:'transparent'}}  onClick={showOrHide} >
                            <OrangeBtn  text="Carregar Eventos" /> 
                        </button>
                 </Styledbtn>
               <StyledMain >
                    { isLoading === true  ?
                            <Styledbtn  >
                               <SpinLoad/>
                            </Styledbtn> 
                     : null}   
                      { showElement === true ? 
                        <div className='scrollmenu'>
                          <div  className='scroll'>
                            <CardEvent   itens={list} />
                            </div>
                         </div>
                      :  null } 
                 </StyledMain> 
        </>    
  );
}





export default Home;
