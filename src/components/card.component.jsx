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
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ImgCard = styled.img`
  height: 150px;
  flex: 1;
  margin: 0px 10px;
  border-radius: 8px;
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