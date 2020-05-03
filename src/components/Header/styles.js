import styled from 'styled-components';

const MEDIA = '@media only screen and (max-width: 768px)';

export const Container = styled.header`
  position: fixed;
  top: 0;
  
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100vw;
  height: 100px;
  padding-left: 20px;

  background-color: white;

  ${MEDIA} {
    height: 60px;
  }
`;

export const LogoSpace = styled.a`
  display: flex;
  height: 100%;
  align-items: center;
  margin-right: auto;

  img {
    max-width: 140px;
  }

  ${MEDIA} {
    margin: 0;
    position: absolute;
    left: 40%;

    img {
      max-width: 70px;
    }
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 40px;
  font-weight: bold;
`;
