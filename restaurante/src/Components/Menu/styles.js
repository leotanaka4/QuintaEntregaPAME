import styled from 'styled-components';

/* Titulos*/
export const Menu = styled.div`
    padding-top: 4%;
    padding-bottom: 4%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center; 
    width: 100%;
    background-color: antiquewhite;
    gap: 4vh;
`;

export const Titulo = styled.h1`

`;

export const Subtitulo = styled.h2`
    font-size: 40px;
`;

export const Secao = styled.div`
    padding-top: 4%;
    padding-bottom: 4%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background-color: antiquewhite;
`;

/* Alimento */
export const Alimento = styled.div`
    padding-top: 2%;
    padding-bottom: 4%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    background-color: #ec2300;
`;

export const InfoAlimento = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 5vh;
`;

export const NomeAlimento = styled.h3`
    font-size: 32px;
    color: antiquewhite;
`;

export const ImagemAlimento = styled.img`
    border-radius: 50px;
`;

export const PreçoAlimento = styled.p`
    font-size: 20px;
    color: antiquewhite;
`;

export const QuantidadeAlimento = styled.div`
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

/*Cliente*/
export const Input = styled.input`
    width: 50vw;
    height: 10vh;
    border-radius: 20px;
    font-size: large;
    padding-left: 10px;
    padding-right: 10px;
`;

export const ButtonPagamento = styled.button`
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