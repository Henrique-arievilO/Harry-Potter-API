import styled from 'styled-components'
import Background from '../../../assets/sortinghat.png'

export const Title = styled.h1`
    text-align: center;
`

export const Container = styled.div`
    margin: 0 auto;
    padding: 1rem;
    width: 75%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Button = styled.button`
    width: 10rem;
    height: 10rem;
    background-color: #000;
    background-image: url(${Background});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80%;
    cursor: pointer;
    border: none;
    border-radius: 15px;
    transition: all 0.3s;

    &:hover{
        transform: scale(1.2);
    }
`
