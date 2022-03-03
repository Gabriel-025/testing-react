import React from 'react';
import { StyledApp } from './styles';
import Routes from './routes';



import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <StyledApp className="d-flex flex-column">
      <Routes />
    </StyledApp>
  );
}

export default App;
