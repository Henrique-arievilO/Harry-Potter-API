import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Title, Card, Name, Wand, Image, Data, Box, Figure, Wrap } from './Style'

export default function Staff() {
  const [students, setStaff] = useState([])

  useEffect(() => {
    axios.get('https://hp-api.herokuapp.com/api/characters').then(Response => {
      console.log(Response.data.slice(0, 25));
      setStaff(Response.data.slice(0, 25));
    })
  }, [])

  return (
    <Container>
      <Title>Students of Hogwarts</Title>
      <Wrap>{students.map(item => (
        <Card>
          <Figure>
            <Image src={item.image} alt={item.name} />
          </Figure>
          <Box>
            <Name>{item.name}</Name>
            <Data>Specie: {item.species}</Data>
            <Data>House: {item.house}</Data>
            <Data>Patronus: {item.patronus}</Data>
            <Wand>Wand</Wand>
            <Data>{item.wand.wood} - {item.wand.core}</Data>
          </Box>
        </Card>
      ))}</Wrap>
    </Container>
  )
}