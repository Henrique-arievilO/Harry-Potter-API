import styled from "styled-components";
import Background from "../../../assets/home-wallpaper.jpg"

export const Container = styled.main`
    width: 100%;
    height: 82vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    background-image: url(${Background});
    background-size: cover;
    background-position: center top;
    overflow: hidden;

    @media only screen and (min-width: 768px) and (max-width: 1279px){
        height: 85vh;
    }

    @media only screen and (min-width: 320px) and (max-width: 767px){
        height: 75vh;
        text-align: center;
    }
`
export const Title = styled.h1`
    font-family: 'Cinzel Decorative', cursive;
    font-weight: normal;
    font-size: 3rem;
    color: #9c8440;
    text-shadow: 2px 2px 5px #000;
    word-spacing: 1rem;

    @media only screen and (min-width: 320px) and (max-width: 767px){
        font-size: 2rem;
        text-align: center;
        word-spacing: none;
        width: 80%;
    }
`
export const Image = styled.img`
    width: 20rem;
    filter: hue-rotate(-10deg);
    transition: all 3s;

    &:hover{
        transform: scale(1.2);
    }

    @media only screen and (min-width: 320px) and (max-width: 767px){
        width: 10rem;
    }
`