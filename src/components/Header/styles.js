import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  position: fixed;
  top: 0;
  
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100px;
  padding-left: 20px;

  background-color: white;
`;

export const LogoSpace = styled(Link)`
  display: flex;
  height: 100%;
  align-items: center;
  margin-right: auto;

  img {
    max-width: 100px;
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 40px;
  font-weight: bold;
`;
