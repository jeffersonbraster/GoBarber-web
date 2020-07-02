import React from 'react';
import { FiLogIn, FiMail, FiUser, FiLock, FiArrowLeft } from 'react-icons/fi';

import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="gobarber" />

      <form>
        <h1>Faça seu Cadastro</h1>

        <Input name="nome" icon={FiUser} type="email" placeholder="Nome" />
        <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />

        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />
        <Button type="submit">Cadastrar</Button>
      </form>

      <a href="submit">
        <FiArrowLeft size={18} />
        Voltar para login.
      </a>
    </Content>
  </Container>
);

export default SignUp;
