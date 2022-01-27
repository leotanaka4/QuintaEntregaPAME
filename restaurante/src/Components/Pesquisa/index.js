import React, {useState, useEffect} from 'react';
import {
    Satisfacao,
    Titulo,
    Input,
    Parametro,
    NomeParametro,
    ButtonNota,
    ButtonEnvio,
} from './styles';

export default function Pesquisa() {
    const [email, setEmail] = useState("");
    const [notaAtendimento, setAtendimento] = useState(10);
    const [notaSabor, setSabor] = useState(10);
    const [notaLimpOrg, setLimpOrg] = useState(10);
    const [notaPreco, setPreco] = useState(10);
    const [notaVelocidade, setVelocidade] = useState(10);
    const [notaAmbiente, setAmbiente] = useState(10);
    const [actualItem, setActualItem] = useState({});
    const [available, setAvailable] = useState(false);
    
    function increment(quantidade, funcao) {
        if (quantidade === 10){
            console.log("Erro ao aumentar a nota do parametro")
        } else{
        funcao(quantidade + 1);
        }
    }
    function decrement(quantidade, funcao) {
        if (!quantidade){
            console.log("Erro ao diminuir a nota do parametro")
        } else{
            funcao(quantidade - 1)
        }
    }
    function Enviar(){/*Simula o envio da Informação*/
        setEmail("")
        setAtendimento(10);
        setSabor(10);
        setLimpOrg(10);
        setPreco(10);
        setVelocidade(10);
        setAmbiente(10);
    }
    useEffect(() => {
        setActualItem({
            cliente: email,
            nota1: notaAtendimento,
            nota2: notaSabor,
            nota3: notaLimpOrg,
            nota4: notaPreco,
            nota5: notaVelocidade,
            nota6: notaAmbiente,
        });
        if (!email){
            setAvailable(false)
        } else{
            setAvailable(true)
        }
    }, [email, notaAtendimento, notaSabor, notaLimpOrg, notaPreco, notaVelocidade, notaAmbiente]);
    return(
    <Satisfacao>
        <Titulo>Pesquisa de avaliação do restaurante:</Titulo>
        <Input
            placeholder="E-mail"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
        />
        <Parametro>
            <NomeParametro>Atendimento: {notaAtendimento}</NomeParametro>
            <ButtonNota onClick={() => increment(notaAtendimento, setAtendimento)}>+</ButtonNota>
            <ButtonNota onClick={() => decrement(notaAtendimento, setAtendimento)}>-</ButtonNota>
        </Parametro>
        <Parametro>
            <NomeParametro>Sabor da comida: {notaSabor}</NomeParametro>
            <ButtonNota onClick={() => increment(notaSabor, setSabor)}>+</ButtonNota>
            <ButtonNota onClick={() => decrement(notaSabor, setSabor)}>-</ButtonNota>
        </Parametro>
        <Parametro>
            <NomeParametro>Limpeza e organização: {notaLimpOrg}</NomeParametro>
            <ButtonNota onClick={() => increment(notaLimpOrg, setLimpOrg)}>+</ButtonNota>
            <ButtonNota onClick={() => decrement(notaLimpOrg, setLimpOrg)}>-</ButtonNota>
        </Parametro>
        <Parametro>
            <NomeParametro>Preço: {notaPreco}</NomeParametro>
            <ButtonNota onClick={() => increment(notaPreco, setPreco)}>+</ButtonNota>
            <ButtonNota onClick={() => decrement(notaPreco, setPreco)}>-</ButtonNota>
        </Parametro>
        <Parametro>
            <NomeParametro>Velocidade do serviço: {notaVelocidade}</NomeParametro>
            <ButtonNota onClick={() => increment(notaVelocidade, setVelocidade)}>+</ButtonNota>
            <ButtonNota onClick={() => decrement(notaVelocidade, setVelocidade)}>-</ButtonNota>
        </Parametro>
        <Parametro>
            <NomeParametro>Ambiente: {notaAmbiente}</NomeParametro>
            <ButtonNota onClick={() => increment(notaAmbiente, setAmbiente)}>+</ButtonNota>
            <ButtonNota onClick={() => decrement(notaAmbiente, setAmbiente)}>-</ButtonNota>
        </Parametro>
        <ButtonEnvio onClick={Enviar} disabled={!available}>Enviar pesquisa</ButtonEnvio>
    </Satisfacao>
    );
}