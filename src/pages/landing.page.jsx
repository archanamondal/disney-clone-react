import React from "react";
import styled from "styled-components";
import Navbar from "../components/navbar.component";

const Container = styled.div`
  background-image: url("./assets/images/login-background.jpg");
  height: calc(100vh - 50px);
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageOne = styled.img`
  height: 80px;
  margin-bottom: 7px;

  @media (max-width: 480px) {
    height: 62px;
  }
`;

const Button = styled.button`
  height: 40px;
  width: 27vw;
  background-color: #0063e5;
  color: #fff;
  outline: none;
  border: none;

  @media (max-width: 480px) {
    width: 70vw;
    margin-bottom: 5px;
  }
`;

const ImageTwo = styled.img`
  height: 20px;
  margin-top: 15px;

  @media (max-width: 480px) {
    height: 15px;
  }
`;

const SubscriptionText = styled.p`
  color: #f9f9f9;
  margin: 0;
  padding: 0;
  font-size: 9px;

  @media (max-width: 480px) {
    font-size: 6.5px;
    margin-top: 5px;
  }
`;

function Landing() {
  return (
    <>
      <Navbar />
      <Container>
        <ImageOne src="./assets/images/cta-logo-one.svg" />
        <Button>GET ALL THERE</Button>
        <SubscriptionText>
          Get Premier To Raya and the last Dragon for an additional fee with a
          Disney + Subscription.
        </SubscriptionText>
        <SubscriptionText>
          An of 3/26/21, the price of Disney + and The Disney Bundle will
          increase by $1.
        </SubscriptionText>
        <ImageTwo src="./assets/images/cta-logo-two.png" />
      </Container>
    </>
  );
}

export default Landing;
