import styled from "styled-components";

export const Footer = styled.footer`
    width: 100%;
    height: 5vh;
    background: #0e0020;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 768px) and (max-width: 1279px){
        height: 5vh;
        text-align: center;
    }

    @media only screen and (min-width: 320px) and (max-width: 767px){
        height: 10vh;
        text-align: center;
    }
`
export const Copyright = styled.p`
    font-family: 'Cinzel Decorative', cursive;
    font-size: .8rem;
    color: #9c8440;
    width: 90%;
    text-align: center;
`