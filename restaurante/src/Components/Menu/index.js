import React, {useState, useEffect} from 'react';
import {
    Menu,
    Titulo,
    Subtitulo,
    Secao,
    Alimento,
    InfoAlimento,
    NomeAlimento,
    ImagemAlimento,
    PreçoAlimento,
    QuantidadeAlimento,
    Quantity,
    QuantityButton,
    Input,
    ButtonPagamento
} from './styles';
import batata from './../../Imagens/batata-frita.jpg';
import frango from './../../Imagens/frango-frito.jpg';
import burguer from './../../Imagens/hamburguer.jpg';
import pizza from './../../Imagens/pizza.jpg';
import pf from './../../Imagens/pf.jpg';
import suco from './../../Imagens/suco-de-laranja.jpg';
import coca from './../../Imagens/coca-cola.jpg';
import sorvete from './../../Imagens/sorvete-de-chocolate.jpg';

export default function Informacoes() {
    const [qtdBatata, setQtdBatata] = useState(0);
    const [qtdFrango, setQtdFrango] = useState(0);
    const [qtdBurguer, setQtdBurguer] = useState(0);
    const [qtdPizza, setQtdPizza] = useState(0);
    const [qtdPF, setQtdPF] = useState(0);
    const [qtdSuco, setQtdSuco] = useState(0);
    const [qtdCoca, setQtdCoca] = useState(0);
    const [qtdSorvete, setQtdSorvete] = useState(0);
    const [nome, setNome] = useState("");
    const [actualItem, setActualItem] = useState({});
    const [available, setAvailable] = useState(false);
    
    function increment(quantidade, funcao) {
        funcao(quantidade + 1);
    }
    function decrement(quantidade, funcao) {
        if (!quantidade){
            console.log("Erro ao diminuir a quantidade de alimentos")
        } else{
            funcao(quantidade - 1)
        }
    }
    function Pagar(){/*Simula o envio da Informação*/
        setQtdBatata(0);
        setQtdFrango(0);
        setQtdBurguer(0);
        setQtdPizza(0);
        setQtdPF(0);
        setQtdSuco(0);
        setQtdCoca(0);
        setQtdSorvete(0);
        setNome("")
    }
    useEffect(() => {
        setActualItem({
            q1: qtdBatata,
            q2: qtdFrango,
            q3: qtdBurguer,
            q4: qtdPizza,
            q5: qtdPF,
            q6: qtdSuco,
            q7: qtdCoca,
            q8: qtdSorvete,
            cliente: nome,
        });
        if (!nome || ((qtdBatata + qtdFrango + qtdBurguer + qtdPizza + qtdPF + qtdSuco + qtdCoca + qtdSorvete) === 0)){
            setAvailable(false)
        } else{
            setAvailable(true)
        }
    }, [qtdBatata, qtdFrango, qtdBurguer, qtdPizza, qtdPF, qtdSuco, qtdCoca, qtdSorvete, nome]);
    return(
    <Menu>
        <Titulo>Faça o pedido por esse menu:</Titulo>
        <Subtitulo>Entradas:</Subtitulo>
        <Secao>
            <Alimento>
                <InfoAlimento>
                    <NomeAlimento>Batata Frita</NomeAlimento>
                    <ImagemAlimento src={batata} width="300"height="300"/>
                    <PreçoAlimento>R$ 10,00</PreçoAlimento>
                </InfoAlimento>
                <QuantidadeAlimento>
                    <Quantity>Quantidade: {qtdBatata}</Quantity>
                    <QuantityButton onClick={() => increment(qtdBatata, setQtdBatata)}>+</QuantityButton>
                    <QuantityButton onClick={() => decrement(qtdBatata, setQtdBatata)}>-</QuantityButton>
                </QuantidadeAlimento>
            </Alimento>
            <Alimento>
                <InfoAlimento>
                    <NomeAlimento>Frango Frito</NomeAlimento>
                    <ImagemAlimento src={frango} width="300"height="300"/>
                    <PreçoAlimento>R$ 15,00</PreçoAlimento>
                </InfoAlimento>
                <QuantidadeAlimento>
                    <Quantity>Quantidade: {qtdFrango}</Quantity>
                    <QuantityButton onClick={() => increment(qtdFrango, setQtdFrango)}>+</QuantityButton>
                    <QuantityButton onClick={() => decrement(qtdFrango, setQtdFrango)}>-</QuantityButton>
                </QuantidadeAlimento>
            </Alimento>
        </Secao>
        <Subtitulo>Pratos Principais:</Subtitulo>
        <Secao>
            <Alimento>
                <InfoAlimento>
                    <NomeAlimento>Hamburguer</NomeAlimento>
                    <ImagemAlimento src={burguer} width="300"height="300"/>
                    <PreçoAlimento>R$ 25,00</PreçoAlimento>
                </InfoAlimento>
                <QuantidadeAlimento>
                    <Quantity>Quantidade: {qtdBurguer}</Quantity>
                    <QuantityButton onClick={() => increment(qtdBurguer, setQtdBurguer)}>+</QuantityButton>
                    <QuantityButton onClick={() => decrement(qtdBurguer, setQtdBurguer)}>-</QuantityButton>
                </QuantidadeAlimento>
            </Alimento>
            <Alimento>
                <InfoAlimento>
                    <NomeAlimento>Pizza</NomeAlimento>
                    <ImagemAlimento src={pizza} width="300"height="300"/>
                    <PreçoAlimento>R$ 40,00</PreçoAlimento>
                </InfoAlimento>
                <QuantidadeAlimento>
                    <Quantity>Quantidade: {qtdPizza}</Quantity>
                    <QuantityButton onClick={() => increment(qtdPizza, setQtdPizza)}>+</QuantityButton>
                    <QuantityButton onClick={() => decrement(qtdPizza, setQtdPizza)}>-</QuantityButton>
                </QuantidadeAlimento>
            </Alimento>
            <Alimento>
                <InfoAlimento>
                    <NomeAlimento>Prato Feito</NomeAlimento>
                    <ImagemAlimento src={pf} width="300"height="300"/>
                    <PreçoAlimento>R$ 20,00</PreçoAlimento>
                </InfoAlimento>
                <QuantidadeAlimento>
                    <Quantity>Quantidade: {qtdPF}</Quantity>
                    <QuantityButton onClick={() => increment(qtdPF, setQtdPF)}>+</QuantityButton>
                    <QuantityButton onClick={() => decrement(qtdPF, setQtdPF)}>-</QuantityButton>
                </QuantidadeAlimento>
            </Alimento>
        </Secao>
        <Subtitulo>Bebidas:</Subtitulo>
        <Secao>
            <Alimento>
                <InfoAlimento>
                    <NomeAlimento>Suco de Laranja</NomeAlimento>
                    <ImagemAlimento src={suco} width="300"height="300"/>
                    <PreçoAlimento>R$ 8,00</PreçoAlimento>
                </InfoAlimento>
                <QuantidadeAlimento>
                    <Quantity>Quantidade: {qtdSuco}</Quantity>
                    <QuantityButton onClick={() => increment(qtdSuco, setQtdSuco)}>+</QuantityButton>
                    <QuantityButton onClick={() => decrement(qtdSuco, setQtdSuco)}>-</QuantityButton>
                </QuantidadeAlimento>
            </Alimento>
            <Alimento>
                <InfoAlimento>
                    <NomeAlimento>Coca-Cola</NomeAlimento>
                    <ImagemAlimento src={coca} width="300"height="300"/>
                    <PreçoAlimento>R$ 5,00</PreçoAlimento>
                </InfoAlimento>
                <QuantidadeAlimento>
                    <Quantity>Quantidade: {qtdCoca}</Quantity>
                    <QuantityButton onClick={() => increment(qtdCoca, setQtdCoca)}>+</QuantityButton>
                    <QuantityButton onClick={() => decrement(qtdCoca, setQtdCoca)}>-</QuantityButton>
                </QuantidadeAlimento>
            </Alimento>
        </Secao>
        <Subtitulo>Sobremesas:</Subtitulo>
        <Secao>
            <Alimento>
                <InfoAlimento>
                    <NomeAlimento>Sorvete</NomeAlimento>
                    <ImagemAlimento src={sorvete} width="300"height="300"/>
                    <PreçoAlimento>R$ 10,00</PreçoAlimento>
                </InfoAlimento>
                <QuantidadeAlimento>
                    <Quantity>Quantidade: {qtdSorvete}</Quantity>
                    <QuantityButton onClick={() => increment(qtdSorvete, setQtdSorvete)}>+</QuantityButton>
                    <QuantityButton onClick={() => decrement(qtdSorvete, setQtdSorvete)}>-</QuantityButton>
                </QuantidadeAlimento>
            </Alimento>
        </Secao>
        <Input
            placeholder="Nome"
            value={nome}
            onChange={(event) => setNome(event.currentTarget.value)}
        />
        <ButtonPagamento onClick={Pagar} disabled={!available}>Pagamento</ButtonPagamento>
    </Menu>
    );
}