import styled from 'styled-components';

export const Footer = styled.div`
    padding-top: 2%;
    padding-bottom: 4%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background-color: black;
`;

export const FooterName  = styled.h1`
    width: 25%;
    padding-top: 2%;
    padding-left: 3%;
    color: antiquewhite;
`;

export const FooterMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 2vh;
`;

export const Input = styled.input`
    width: 20vw;
    height: 5vh;
    border-radius: 20px;
    font-size: large;
    padding-left: 10px;
    padding-right: 10px;
`;

export const FooterQuantity = styled.div`
    display: flex;
    width: 20vw;
    gap: 2vw;
    align-items: center;
`;

export const Quantity = styled.p`
    font-size: 20px;
    color: white;
    font-weight: bold;
`;

export const QuantityButton = styled.button`
    font-size: 20px;
    background-color: white;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
    border-radius: 100%;
    width: 30px;
`;

export const FooterEnviar = styled.button`
    color: black;
    background-color: ${props => props.disabled ? "red" : "green"};
    border: none;
    cursor: pointer;
    width: 10vw;
    height: 5vh;
    border-radius: 10px;
    font-size: large;
    font-weight: bold;

`;