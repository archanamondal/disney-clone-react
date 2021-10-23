import React from "react";
import Navbar from "../components/navbar.component";
import Brandcard from "../components/brandcard.component";
import Card from "../components/card.component";
import Carousel from "../components/carousel.component";
import styled from "styled-components";

const HomeContainer = styled.div`
  width: 100vw;
  margin: 0;
  padding: 0;
  background-color: #090b13;
`;

const SliderContainer = styled.div`
  padding: 0 30px 30px 30px;
`;

const BrandContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 30px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

function Home() {
  return (
    <HomeContainer>
      <Navbar />
      <SliderContainer>
        <Carousel />
      </SliderContainer>

      <BrandContainer>
        <Brandcard imgurl={"./assets/images/scale17.jpg"} />
        <Brandcard imgurl={"./assets/images/scale10.jpg"} />
        <Brandcard imgurl={"./assets/images/scale7.jpg"} />
        <Brandcard imgurl={"./assets/images/scale2.jpg"} />
        <Brandcard imgurl={"./assets/images/scale8.jpg"} />
      </BrandContainer>

      <Card
        title="Recommended For You"
        imageurls={[
          "./assets/images/scale11.jpg",
          "./assets/images/scale3.jpg",
          "./assets/images/scale12.jpg",
          "./assets/images/scale.jpg",
        ]}
      />
      <Card
        title="New to Desney+"
        imageurls={[
          "./assets/images/scale9.jpg",
          "./assets/images/scale15.jpg",
          "./assets/images/badging3.jpg",
          "./assets/images/scale13.jpg",
        ]}
      />
      <Card
        title="Originals"
        imageurls={[
          "./assets/images/badging2.jpg",
          "./assets/images/badging.jpg",
          "./assets/images/badging7.jpg",
          "./assets/images/badging6.jpg",
        ]}
      />
      <Card
        title="Trending"
        imageurls={[
          "./assets/images/scale5.jpg",
          "./assets/images/scale18.jpg",
          "./assets/images/scale4.jpg",
          "./assets/images/scale14.jpg",
        ]}
      />
    </HomeContainer>
  );
}

export default Home;
