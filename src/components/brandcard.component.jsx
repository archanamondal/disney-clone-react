import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100px;
  margin: 0 10px;
  background-color: #040714;
  border: 1px solid #f3f3f3;
  border-radius: 7px;
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const Image = styled.img`
  height: auto;
  width: 180px;
`;

function Brandcard({ imgurl }) {
  return (
    <Container>
      <Image src={imgurl} alt="" />
    </Container>
  );
}

export default Brandcard;
