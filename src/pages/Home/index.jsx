import React from 'react';

import {
  Container, VendaOnline, VendaTitle, VendaContainer, VendaDescription,
  VendaApp, AppInfo, AppTitle, AppDescription, AboutContainer, AboutGrid,
  AboutTitle, PersonContainer, Name, Avatar, PersonDescription, ImageContainer,
  SloganContainer, SloganTitle, ContactContainer, FormContainer, FormTitle,
  FormDescription, Input, TextArea, ButtonContainer, SubmitButton,
  FooterContainer, FooterImage,
} from './styles';

import logo from '../../assets/logo.png';
import vendaapp from '../../assets/vendaapp.jpg';
import servico from '../../assets/servico.jpg';
import catalogo from '../../assets/catalogo.jpg';
import arthur from '../../assets/arthur.png';
import davi from '../../assets/davi.png';
import henrique from '../../assets/henrique.png';
import matheus from '../../assets/matheus.png';

function Home() {
  return (
    <Container>
      <VendaOnline>
        <VendaContainer>
          <VendaTitle>Venda Online Já!</VendaTitle>
          <VendaDescription>
            Baixe nosso APP e adquira algum
            pacote de serviços. Simples, prático e rápido.
          </VendaDescription>
        </VendaContainer>
      </VendaOnline>

      <VendaApp>
        <AppInfo>
          <AppTitle>
            VENDA
            <br />
            <strong>PELO APP</strong>
          </AppTitle>
          <AppDescription>
            Faça postagens de produtos, organize seu perfil, tenha contato
            com clientes e aumente suas vendas.
          </AppDescription>
        </AppInfo>
        <ImageContainer>
          <img src={vendaapp} alt="Aplicativo" />
        </ImageContainer>
      </VendaApp>

      <VendaApp>
        <ImageContainer>
          <img src={servico} alt="Serviço" />
        </ImageContainer>
        <AppInfo>
          <AppTitle>
            RAPIDEZ
            <br />
            <strong>NO SERVIÇO</strong>
          </AppTitle>
          <AppDescription>
            Ofereça um serviço mais rápido e eficiente,
            dando a atenção que o seu cliente merece.
          </AppDescription>
        </AppInfo>
      </VendaApp>

      <VendaApp>
        <AppInfo>
          <AppTitle>
            CRIE SEU
            <br />
            <strong>CATÁLOGO</strong>
          </AppTitle>
          <AppDescription>
            Crie um catálogo para expor seus produtos aos clientes
            através de um site.
          </AppDescription>
        </AppInfo>
        <ImageContainer>
          <img src={catalogo} alt="Aplicativo" />
        </ImageContainer>
      </VendaApp>

      <AboutContainer>
        <AboutTitle>Quem Somos?</AboutTitle>
        <AboutGrid>
          <PersonContainer>
            <Avatar src={arthur} alt="Integrante" />
            <Name>Arthur Stevam</Name>
            <PersonDescription>
              Desenvolvedor Backend e estudante de Ciência da Computação
              na Universidade Federal de Campina Grande
            </PersonDescription>
          </PersonContainer>

          <PersonContainer>
            <Avatar src={davi} alt="Integrante" />
            <Name>Davi Sousa</Name>
            <PersonDescription>
              Desenvolvedor Frontend e estudante de Ciência da Computação
              na Universidade Federal de Campina Grande
            </PersonDescription>
          </PersonContainer>

          <PersonContainer>
            <Avatar src={henrique} alt="Integrante" />
            <Name>Henrique Lima</Name>
            <PersonDescription>
              Business focado em Relações Pessoais, estudante de Relações
              Internacionas na Universidade Jaguelônica de Krakow na Polônia
            </PersonDescription>
          </PersonContainer>

          <PersonContainer>
            <Avatar src={matheus} alt="Integrante" />
            <Name>Matheus Gonzaga</Name>
            <PersonDescription>
              Business, Designer, Empreendedor e estudante de Administração na
              Universidade Federal de Campina Grande.
            </PersonDescription>
          </PersonContainer>
        </AboutGrid>
      </AboutContainer>

      <SloganContainer>
        <SloganTitle>Somos a VIVA, sua Vitrine do Varejo!</SloganTitle>
      </SloganContainer>

      <ContactContainer>
        <FormContainer>
          <FormTitle>Contate-nos</FormTitle>
          <FormDescription>Envie-nos um Email e retornaremos contato</FormDescription>
          <Input placeholder="Email" />
          <Input placeholder="Assunto" />
          <TextArea placeholder="Digite sua mensagem aqui..." />
          <ButtonContainer>
            <SubmitButton>Enviar</SubmitButton>
          </ButtonContainer>
        </FormContainer>
      </ContactContainer>

      <FooterContainer>
        <FooterImage src={logo} alt="VIVA" />
      </FooterContainer>
    </Container>
  );
}

export default Home;
