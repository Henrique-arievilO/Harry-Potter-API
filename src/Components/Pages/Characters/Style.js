import styled from "styled-components";
import Background from "../../../assets/horcrux.jpeg"

export const Container = styled.main`
    width: 100%;
    padding: 2rem;
    box-sizing: border-box;
    background-image: url(${Background});
    background-position: center;
    background-size: contain;
`
export const Wrap = styled.ul`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
`

export const Title = styled.h1`
    font-family: 'Cinzel Decorative', cursive;
    width: fit-content;
    margin: 0 auto 2rem;
    color: #7b6933;
    background-color: #000;
    text-align: center;
`
export const Card = styled.li`
    width: 15rem;
    height: 30rem;
    margin: 2rem;
    border: 5px solid #7b6933;
    border-radius: 15px;
    overflow: hidden;
    background-color: #000;
    transition: all .3s;

    &:hover{
        transform: scale(1.1);
    }

    @media only screen and (min-width: 320px) and (max-width: 767px){
        width: 15rem;
        height: 25rem;
        margin: 2rem auto;
    }
`
export const Name = styled.h2`
    font-size: 1.2rem;
    text-align: center;
    color: #7b6933;
`
export const Data = styled.p`
    color: #7b6933;
`
export const Wand = styled.h3`
    color: #7b6933;
`
export const Figure = styled.figure`
    width: 15rem;
    height: 15rem;
    box-sizing: border-box;
`
export const Image = styled.img`
    width: 15rem;
    height: 15rem;
    object-fit: cover;
    object-position: top;
`
export const Box = styled.div`
    padding: .5rem 1rem;
`