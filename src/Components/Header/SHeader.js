import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 5rem;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #0e0020;

    @media only screen and (min-width: 768px) and (max-width: 1279px){
        height: 10vh;
        text-align: center;
    }
    @media only screen and (min-width: 320px) and (max-width: 767px){
        display: block;
        height: 25vh;
        text-align: center;
    }
`
export const Title = styled.h1`
    font-family: 'Harry Potter', sans-serif;
    font-weight: normal;
    font-size: 2rem;
    color: #9c8440;
    width: fit-content;
    margin: 0 auto;

    @media only screen and (min-width: 320px) and (max-width: 768px){
    }
`