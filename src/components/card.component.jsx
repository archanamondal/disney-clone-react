import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 30px;
  margin: 20px 0;
`;

const Title = styled.h1`
  font-size: 18px;
  color: #f9f9f9;
  margin-left: 10px;

  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 15px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
`;

const ImgCard = styled.img`
  height: 150px;
  /* flex: 1; */
  margin: 0px 10px;
  border-radius: 8px;

  &:hover {
    z-index: 1;
    box-shadow: 0 8px 50px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }

  @media (max-width: 480px) {
    /* width: 100px;
    height: auto; */
    flex-basis: 30%;
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
