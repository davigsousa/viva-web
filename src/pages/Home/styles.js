import styled from 'styled-components';

import vendaonline from '../../assets/vendaonline.jpg';

const MEDIA = '@media only screen and (max-width: 768px)';

export const Container = styled.div`
  margin-top: 100px;
  width: 100%;

  ${MEDIA} {
    margin-top: 60px;
  }
`;

export const VendaOnline = styled.div`
  width: 100%;
  height: 700px;
  background-size: cover;
  background-image: url(${vendaonline});
  display: flex;
  align-items: center;
  justify-content: center;

  ${MEDIA} {
    height: 400px;
  }
`;

export const VendaContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 1000px;

  ${MEDIA} {
    width: 100%;
  }
`;

export const VendaTitle = styled.h1`
  font-size: 120px;
  color: white;
  text-shadow: -1px 0px 14px rgba(0, 0, 0, 1);

  ${MEDIA} {
    font-size: 40px;
  }
`;

export const VendaDescription = styled.p`
  font-size: 40px;
  color: white;
  font-weight: bold;
  text-shadow: -1px 0px 14px rgba(0, 0, 0, 1);

  ${MEDIA} {
    font-size: 25px;
  }
`;

export const VendaApp = styled.div`
  display: flex;
  padding: 100px;

  ${MEDIA} {
    flex-direction: column;
    padding: 0;
    align-items: center;
    margin-top: 80px;
    flex-direction: column-reverse;

    &:nth-child(3) {
      flex-direction: column;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  
  img {
    max-width: 600px;
  }

  ${MEDIA} {
    img {
      max-width: 100%;
    }
  }
`;

export const AppInfo = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-right: 15px;

  ${MEDIA} {
    margin-top: 20px;
  }
`;

export const AppTitle = styled.p`
  font-size: 60px;
  width: 400px;
  color: #ff6600;

  ${MEDIA} {
    width: 250px;
    font-size: 20px;
  }
`;

export const AppDescription = styled.p`
  font-size: 30px;

  ${MEDIA} {
    font-size: 16px;
  }
`;

export const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${MEDIA} {
    margin-top: 100px;
  }
`;

export const AboutTitle = styled.h1`
  font-size: 90px;
  color: #993366;
  margin: 30px 0 80px 0;

  ${MEDIA} {
    font-size: 30px;
    margin-bottom: 30px;
  }
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  ${MEDIA} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const PersonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 300px;
  margin: 0 10px;

  ${MEDIA} {
    width: 100%;
    margin: 0 0 50px 0;
  }
`;

export const Avatar = styled.img`
  width: 200px;

  ${MEDIA} {
    width: 40%;
  }
`;

export const Name = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: #ff6600;

  ${MEDIA} {
    font-size: 16px;
  }
`;

export const PersonDescription = styled.p`
  ${MEDIA} {
    width: 70%;
    font-size: 9px;
  }
`;

export const SloganContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  margin-top: 40px;

  ${MEDIA} {
    height: 100px;
    margin-bottom: 60px;
  }
`;

export const SloganTitle = styled.h1`
  font-size: 60px;
  color: #993366;

  ${MEDIA} {
    font-size: 30px;
    text-align: center;
  }
`;

export const ContactContainer = styled.div`
  width: 100%;
  height: 800px;
  background-color: #993366;
  display: flex;
  align-items: center;
  justify-content: center;

  ${MEDIA} {
    height: 700px;
  }
`;

export const FormContainer = styled.form`
  width: 730px;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;

  ${MEDIA} {
    width: 100%;
  }
`;

export const FormTitle = styled.h1`
  color: white;
  font-size: 120px;

  ${MEDIA} {
    font-size: 35px;
  }
`;

export const FormDescription = styled.p`
  color: white;
  font-size: 30px;
  margin-bottom: 50px;

  ${MEDIA} {
    font-size: 16px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 30px;
  border-radius: 25px;
  border: none;
  padding: 0 30px;
  font-size: 20px;

  ${MEDIA} {
    width: 90%;
    font-size: 16px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 250px;
  padding: 5px 30px;
  font-size: 20px;
  border-radius: 25px;

  ${MEDIA} {
    width: 90%;
    font-size: 16px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: flex-end;

  ${MEDIA} {
    padding-right: 20px;
  }
`;

export const SubmitButton = styled.button`
  border: none;
  background-color: #ff6600;
  color: white;
  width: 110px;
  height: 60px;
  border-radius: 30px;
  font-size: 20px;

  &:hover {
    cursor: pointer;
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
