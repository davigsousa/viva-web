import React, { useState } from 'react';
import Select from 'react-select';

import logo from '../../assets/logo.png';
import download from '../../assets/download.png';

import BuyButton from '../../components/BuyButton';

import {
  HeaderContainer, Logo, Container, InfoWrapper, ProfileWrapper, ProfileContainer,
  DetailsContainer, Avatar, Name, Username, Description, CategoryWrapper, CategoryLabel,
  ProductsWrapper, ProductsContainer, ProductContainer, ProductImage, ProductDescription,
  FooterContainer, FooterText, AdContainer, AdTitle, AdDescription, ActionButton, HomeLink,
} from './styles';

import products from './products';

const LOJA = {
  name: 'Lojas Maia',
  username: 'lojasmaia',
  description: 'Uma loja especial para você!',
  image: 'https://img.elo7.com.br/product/main/2261CBD/logo-semi-pronta-logotipo-logo-loja.jpg',
};

function Profile() {
  const [options, setOptions] = useState([
    { value: 'all', label: 'Todos os Produtos' },
    { value: 'Sapatos', label: 'Sapatos' },
    { value: 'Camisas', label: 'Camisas' },
    { value: 'Relógios', label: 'Relógios' },
    { value: 'Calças', label: 'Calças' },
  ]);
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <>
      <HeaderContainer>
        <HomeLink to="/">
          <Logo src={logo} alt="VIVA" />
        </HomeLink>
      </HeaderContainer>
      <Container>
        <InfoWrapper>
          <ProfileWrapper>
            <ProfileContainer>
              <Avatar src={LOJA.image} alt={LOJA.username} />
              <DetailsContainer>
                <Name>{LOJA.name}</Name>
                <Username>{LOJA.username}</Username>
                <Description>{LOJA.description}</Description>
              </DetailsContainer>
            </ProfileContainer>
          </ProfileWrapper>

          <CategoryWrapper>
            <CategoryLabel>Selecione a categoria que deseja visualizar:</CategoryLabel>
            <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue={options[0]}
              name="category"
              options={options}
              onChange={(item) => setSelectedOption(item.value)}
            />
          </CategoryWrapper>
        </InfoWrapper>

        <ProductsWrapper>
          <ProductsContainer>
            {
              products.map((item) => (
                <ProductContainer key={Math.random()}>
                  <ProductImage src={item.image} alt={item.description} />
                  <BuyButton price={item.price} />
                  <ProductDescription>{item.description}</ProductDescription>
                </ProductContainer>
              ))
            }
          </ProductsContainer>
        </ProductsWrapper>

        <AdContainer>
          <AdTitle>Venda Online Já!</AdTitle>
          <AdDescription>
            Baixe nosso APP e adquira algum pacote de serviços.
            Simples, prático e rápido.
          </AdDescription>
          <ActionButton
            href="#"
          >
            Download
            <img src={download} alt="download" />
          </ActionButton>
        </AdContainer>

        <FooterContainer>
          <FooterText>© 2020 Todos os direitos reservados | ViVa</FooterText>
        </FooterContainer>
      </Container>
    </>
  );
}

export default Profile;
