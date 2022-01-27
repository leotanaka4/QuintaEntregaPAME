import styled from 'styled-components';

export const Satisfacao = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background-color: antiquewhite;
`;

export const Titulo  = styled.h1`
    color: black;
`;

export const Input = styled.input`
    width: 20vw;
    height: 4vh;
    border-radius: 20px;
    font-size: large;
    padding-left: 10px;
    padding-right: 10px;
`;

export const Parametro = styled.div`
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2vw;  
`;

export const NomeParametro = styled.p`
    font-size: 20px;
    color: black;
    font-weight: bold;
`;

export const ButtonNota = styled.button`
    font-size: 20px;
    background-color: white;
    border: black solid;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
    border-radius: 100%;
    width: 30px;
`;

export const ButtonEnvio = styled.button`
    color: black;
    background-color: ${props => props.disabled ? "red" : "green"};
    cursor: pointer;
    width: 20vw;
    height: 5vh;
    border-radius: 10px;
    font-size: large;
    font-weight: bold;
`;