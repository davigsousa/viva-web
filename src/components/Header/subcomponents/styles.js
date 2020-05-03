import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuNormal = styled.menu`
  display: flex;
  height: 100%;
  align-items: center;
`;

export const MenuNormalItem = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: #993366;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-right: 3vw;
  
  &:hover {
    color: #ccc;
  }
`;

export const ActionButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: white;
  margin-right: 3vw;

  background-color: #ff6600;
  padding: 20px 40px;
  border-radius: 70px;

  img {
    margin-left: 20px;
    width: 25px;
  }

  &:hover {
    filter: brightness(70%);
  }
`;

export const SmallMenu = styled.button`
  background: none;
  border: none;
  width: 60px;
  margin-right: 40px;
  cursor: pointer;
`;

export const MenuBar = styled.div`
  width: 35px;
  height: 5px;
  background-color: #ff6600;
  margin: 6px 0;
  transition: 0.4s;
`;

export const MenuSlide = styled.aside`
  position: fixed;
  top: 90px;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ff6600;
  border-top: solid 1vh #cc3300;
`;

export const MenuSlideItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: white;

  width: 100%;
  border-bottom: solid 0.5vh #cc3300;

  padding: 2.3vh 0;
  &:hover {
    color: #ccc;
  }
`;