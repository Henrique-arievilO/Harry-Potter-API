import styled from "styled-components";

export const Nav = styled.nav`
    width: 70%;
    background: #0e0020;
    margin: 0 auto;


    @media only screen and (min-width: 320px) and (max-width: 767px){
        width: 100%;
        height: auto;
    }
`
export const Navigation = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
export const Li = styled.li`
    width: 33%;
    height: 2rem;
    color: #000;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s all;

    a{
    font-family: 'Cinzel Decorative', cursive;
    font-weight: normal;
    letter-spacing: 3px;
    font-size: .8rem;
    width: max-content;
    color: #9c8440;
    width: 100%;
    padding: .5rem 0;
    transition: .3s all;

    &:hover{
        text-decoration: underline;
    }

    @media only screen and (min-width: 320px) and (max-width: 767px){
        font-size: .8rem;
    }
}
`