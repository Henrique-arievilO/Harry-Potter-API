import axios from "axios";
import React, { useState } from "react";
import { Container, Title, Card, Image, Data, Box, Figure, Wrap, Name } from './Style'


export default function Houses() {
  const [houses, setHouses] = useState([])

  axios.get('https://legacy--api.herokuapp.com/api/v1/houses').then(response => {
    console.log(response.data)
    setHouses(response.data)
  })


  return (
    <Container>
      <Title>Houses of Hogwarts</Title>
      <Wrap>{houses.map(item => (
        <Card>
          <Figure>
            <Image src={item.image_url} alt={item.name} />
          </Figure>
          <Box>
            <Name>{item.name}</Name>
            <Data>Members: {item.members}</Data>
          </Box>
        </Card>
      ))}</Wrap>
    </Container>
  )
}