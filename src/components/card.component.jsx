import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 30px;
  margin: 20px 0;

  @media (max-width: 480px) {
    padding: 0 20px;
    margin: 20px 0;
  }
`;

const Title = styled.h1`
  font-size: 18px;
  color: #f9f9f9;
  margin-left: 10px;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    font-size: 13px;
    margin-bottom: 15px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;

  @media (max-width: 480px) {
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
  }
  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ImgCard = styled.img`
  height: 150px;
  margin: 0px 10px;
  border-radius: 8px;
  transition: 0.3s all;

  &:hover {
    z-index: 1;
    box-shadow: 0 10px 70px rgba(0, 0, 0, 0.05);
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    height: 90px;
    margin: 5px 5px;
  }

  @media (max-width: 320px) {
    height: 110px;
    margin: 0px 0px 20px 0px;
  }
`;

function Card({ title, imageurls }) {
  return (
    <Container>
      <Title>{title}</Title>
      <ImageContainer>
        {imageurls.map((url) => {
          return <ImgCard src={url} />;
        })}
      </ImageContainer>
    </Container>
  );
}

export default Card;
