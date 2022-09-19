import React from "react";
import { Container, Image, Title } from "./SHome";
import HarryPotter from "../../../assets/Harry-Potter-Flying.png"

export default function Home() {

  return (
    <Container>
      <Title>Welcome to Hogwarts</Title>
      <Image src={HarryPotter} alt="Harry Potter flying" />
    </Container>
  )
}