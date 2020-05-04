import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  padding: 10px 0 10px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #ff6600;

  &:hover {
    cursor: pointer;
    background-color: #cc3300;
  }
`;

export const PriceLabel = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Price = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: white;
`;

export const Divider = styled.div`
  width: 3px;
  background-color: white;
  margin: 0 20px 0 20px;
`;

export const BuyLabel = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Buy = styled.p`
  font-size: 25px;
  font-weight: bold;
  margin-right: 8px;
  color: white;
`;

export const BuyArrow = styled.img`
  width: 20px;
  height: 20px;
`;
