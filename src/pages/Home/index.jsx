import React, { useState } from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

import Header from '../../components/Header';

import {
  Container, VendaOnline, VendaTitle, VendaContainer, VendaDescription,
  VendaApp, AppInfo, AppTitle, AppDescription, AboutContainer, AboutGrid,
  AboutTitle, PersonContainer, Name, Avatar, PersonDescription, ImageContainer,
  SloganContainer, SloganTitle, ContactContainer, FormContainer, FormTitle,
  FormDescription, Input, TextArea, ButtonContainer, SubmitButton,
  FooterContainer, FooterText, PlanImage,
} from './styles';

import logo from '../../assets/logo.png';
import vendaapp from '../../assets/vendaapp.jpg';
import servico from '../../assets/servico.jpg';
import catalogo from '../../assets/catalogo.jpg';
import mensal from '../../assets/mensal.png';
import trimestral from '../../assets/trimestral.png';
import semestral from '../../assets/semestral.png';
import anual from '../../assets/anual.png';
import arthur from '../../assets/arthur.png';
import davi from '../../assets/davi.png';
import henrique from '../../assets/henrique.png';
import matheus from '../../assets/matheus.png';


configureAnchors({ offset: -130 });

function Home() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendFeedback = (templateId, variables) => {
    window.emailjs.send(
      'gmail', templateId,
      variables,
    );
  };

  const handleSubmit = () => {
    const templateId = 'contato_web';

    sendFeedback(
      templateId,
      {
        messagem: message,
        assunto: subject,
        email,
      },
    );

    setEmail('');
    setSubject('');
    setMessage('');
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Header
        logo={logo}
        links={[
          { name: 'Início', to: '/#inicio' },
          { name: 'Planos', to: '/#planos' },
          { name: 'Quem Somos?', to: '/#sobre' },
          { name: 'Contato', to: '/#contato' },
        ]}
        actionButton={{ name: 'Download', to: '/#' }}
      />
      <Container>
        <VendaOnline>
          <VendaContainer>
            <ScrollableAnchor id="inicio">
              <VendaTitle>Venda Online Já!</VendaTitle>
            </ScrollableAnchor>
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
              {' '}
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
              RAPIDEZ NO
              {' '}
              <strong>SERVIÇO</strong>
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
              {' '}
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
          <ScrollableAnchor id="planos">
            <AboutTitle colorText="#ff6600">Nossos Planos</AboutTitle>
          </ScrollableAnchor>
          <AboutGrid>
            <PlanImage src={mensal} alt="mensal" />
            <PlanImage src={trimestral} alt="trimestral" />
            <PlanImage src={semestral} alt="semestral" />
            <PlanImage src={anual} alt="anual" />
          </AboutGrid>
        </AboutContainer>

        <AboutContainer>
          <ScrollableAnchor id="sobre">
            <AboutTitle colorText="#A8518A">Quem Somos?</AboutTitle>
          </ScrollableAnchor>
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
            <ScrollableAnchor id="contato">
              <FormTitle>Contate-nos</FormTitle>
            </ScrollableAnchor>
            <FormDescription>Envie-nos um Email e retornaremos contato</FormDescription>
            <Input
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              required
            />
            <Input
              placeholder="Assunto"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
              required
            />
            <TextArea
              placeholder="Digite sua mensagem aqui..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              required
            />
            <ButtonContainer>
              <SubmitButton type="button" onClick={handleSubmit}>Enviar</SubmitButton>
            </ButtonContainer>
          </FormContainer>
        </ContactContainer>

        <FooterContainer>
          <FooterText>© 2020 Todos os direitos reservados | ViVa</FooterText>
        </FooterContainer>
      </Container>
    </>
  );
}

export default Home;
