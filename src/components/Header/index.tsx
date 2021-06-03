import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dtmoney" />
        <button type="submit">Nova Transação</button>
      </Content>
    </Container>
  );
};
