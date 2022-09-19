import styled from "styled-components";
import Background from "../../../assets/marauders-map.jpg"

export const Container = styled.main`
    width: 100%;
    height: 82vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    background-image: url(${Background});
    background-size: cover;
    background-position: center;
    filter: saturate(.6);

    @media only screen and (min-width: 768px) and (max-width: 1279px){
        height: 85vh;
    }

    @media only screen and (min-width: 320px) and (max-width: 767px){
        height: 75vh;
    }
`
export const Title = styled.h1`
    font-family: 'Cinzel Decorative', cursive;
    font-weight: bold;
    font-size: 5rem;
    background: #9d7b35;
    padding: 0 1rem;
    box-shadow: 0 0 10px #000;
    transition: 3s all;

    &:hover{
        transform: rotate(5deg);
        opacity: 0;
    }

    @media only screen and (min-width: 320px) and (max-width: 767px){
        font-size: 2.5rem;
        width: 75%;
    }
`
export const SubTitle = styled.h2`
    font-family: 'Cinzel Decorative', cursive;
    font-weight: bold;
    font-size: 3rem;
    background: #9d7b35;
    padding: 1rem;
    box-shadow: 0 0 10px #000;
    transition: 3s all;
    text-align: center;

    &:hover{
        transform: rotate(-5deg);
        opacity: 0;
    }

    @media only screen and (min-width: 320px) and (max-width: 767px){
        font-size: 1.5rem;
        width: 75%
    }
`
export const Text = styled.p`
    width: 50rem;
    font-family: 'Cinzel Decorative', cursive;
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    background: #9d7b35;
    padding: 0 1rem;
    box-shadow: 0 0 10px #000;
    transition: 3s all;

    &:hover{
        transform: rotate(5deg);
        opacity: 0;
    }

    @media only screen and (min-width: 768px) and (max-width: 1279px){
        width: 75%
    }

    @media only screen and (min-width: 320px) and (max-width: 767px){
        font-size: 1rem;
        width: 75%
    }
`