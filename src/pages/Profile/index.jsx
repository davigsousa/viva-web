import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

import api from '../../services/api';


function Profile() {
  const { perfil } = useParams();

  const [store, setStore] = useState({});
  const [posts, setPosts] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  const fetchNewPosts = async (category) => {
    category = !category ? 'all' : category;
    const { data } = await api.get(`/products/${perfil}/${category}`);
    const { products } = data;
    setPosts(products);
  };

  useEffect(() => {
    (async () => {
      const { data: storeData } = await api.get(`/products/${perfil}/all`);
      const { store: newStore } = storeData;
      setStore(newStore);
      console.log('uri', newStore.url_image);
    })();

    fetchNewPosts();

    (async () => {
      const { data } = await api.get(`/categories/${perfil}`);
      setOptions(data.map((item) => ({ value: item, label: item })));
    })();
  }, []);

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
              <Avatar src={store.url_image} alt={store.username} />
              <DetailsContainer>
                <Name>{store.name}</Name>
                <Username>{store.username}</Username>
                <Description>{store.description}</Description>
              </DetailsContainer>
            </ProfileContainer>
          </ProfileWrapper>

          <CategoryWrapper>
            <CategoryLabel>Selecione a categoria que deseja visualizar:</CategoryLabel>
            <Select
              className="basic-single"
              classNamePrefix="select"
              isSearchable={false}
              defaultValue={options[0]}
              name="category"
              options={[{ label: 'Todos os Produtos', value: '' }, ...options]}
              onChange={(item) => setSelectedOption(item.value)}
            />
          </CategoryWrapper>
        </InfoWrapper>

        <ProductsWrapper>
          <ProductsContainer>
            {
              posts.map((item) => (
                <ProductContainer key={Math.random()}>
                  <ProductImage src={item.url_image} alt={item.description} />
                  <BuyButton price={String(item.price).replace('.', ',')} />
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
