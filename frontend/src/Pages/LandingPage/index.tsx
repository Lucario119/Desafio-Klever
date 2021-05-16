import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const LandingPage: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>
          Bem-vindo(a) ao serviço de cadastro, se quiser continuar clique no botão
          abaixo
        </h1>
        <Link to="/register">
          <button>Continuar</button>
        </Link>
      </div>
    </Container>
  );
};

export default LandingPage;
