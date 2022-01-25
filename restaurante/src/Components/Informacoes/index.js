import React, {useState, useEffect} from 'react';
import {
    Footer,
    FooterName,
    FooterMenu,
    Input,
    FooterQuantity,
    Quantity,
    QuantityButton,
    FooterEnviar,
} from './styles';

export default function Informacoes() {
    const [idproduto, setIdproduto] = useState("");
    const [idfuncionario, setIdfuncionario] = useState("");
    const [senha, setSenha] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [actualItem, setActualItem] = useState({});
    const [available, setAvailable] = useState(false);

    function Increment(){
        setQuantity(quantity + 1)
    }

    function Decrement(){
        setQuantity(quantity - 1)
    }

    function Enviar(){/*Simula o envio da Informação*/
        setIdproduto("");
        setIdfuncionario("");
        setSenha("");
        setQuantity(0)
    }

    useEffect(() => {
        setActualItem({
            idp: idproduto,
            idf: idfuncionario,
            chave: senha,
            quantidade: quantity
        });

        if (!idproduto || !idfuncionario || !senha || quantity === 0){
            setAvailable(false)
        } else{
            setAvailable(true)
        }
    }, [idproduto, idfuncionario, senha, quantity]);
    return(
    <Footer>
        <FooterName>Suporte</FooterName>
        <FooterMenu>
            <Input
                placeholder="ID do Produto"
                value={idproduto}
                onChange={(event) => setIdproduto(event.currentTarget.value)}
            />
            <Input
                placeholder="ID do Funcionário(a)"
                value={idfuncionario}
                onChange={(event) => setIdfuncionario(event.currentTarget.value)}
            />
            <Input
                placeholder="Senha"
                value={senha}
                onChange={(event) => setSenha(event.currentTarget.value)}
            />
        </FooterMenu>
        <FooterQuantity>
            <Quantity>Quantidade: {quantity}</Quantity>
            <QuantityButton onClick={Increment}>+</QuantityButton>
            <QuantityButton onClick={Decrement}>-</QuantityButton>
        </FooterQuantity>
        <FooterEnviar onClick={Enviar} disabled={!available}>Adicionar</FooterEnviar>
    </Footer>
    );
}