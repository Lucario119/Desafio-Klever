import React, { useState } from 'react';
import RegisterForm from '../../components/Form';

import { Container, PageHeader } from './styles';

const RegisterPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <Container>
      <PageHeader>
        <h1>Que bom que decidiu continuar, agora só falta se cadastrar</h1>
      </PageHeader>
      {!isSubmitted && <RegisterForm submitForm={submitForm} />}
    </Container>
  );
};

export default RegisterPage;
