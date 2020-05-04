import styled from 'styled-components';
import { Link } from 'react-router-dom';


const MEDIA = '';

export const HeaderContainer = styled.div`
  position: fixed;
  z-index: 100000000000000000;
  top: 0;
  background-color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px #ddd;
  height: 100px;
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
`;

export const Logo = styled.img`
  max-width: 140px;
`;

export const Container = styled.div`
  width: 100%;
  margin-top: 100px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px #ddd;
`;

export const ProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileContainer = styled.div`
  width: 700px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
  text-align: center;
`;

export const Avatar = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 150px;
`;

export const DetailsContainer = styled.div`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 10px 0 10px;
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 40px;
`;

export const Username = styled.p`
  font-size: 25px;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 20px;
  text-align: center;
`;

export const CategoryWrapper = styled.div`
  align-items: center;
  width: 500px;
  margin-bottom: 50px;
`;

export const CategoryLabel = styled.p`
  text-align: center;
  margin-bottom: 20px;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ProductsContainer = styled.div`
  width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 70px 0;
`;

export const ProductContainer = styled.div`
  margin: 20px auto;
  width: 250px;
  border: solid 1px #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 270px;
`;

export const ProductDescription = styled.div`
  width: 100%;
  padding: 20px;
  text-align: center;
`;

export const AdContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #993366;
  color: white;
`;

export const AdTitle = styled.div`
  font-size: 80px;
  font-weight: bold;
`;

export const AdDescription = styled.div`
  text-align: center;
  width: 600px;
  font-size: 30px;
  margin-bottom: 70px;
`;

export const ActionButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
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

export const FooterContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterText = styled.p`
`;
