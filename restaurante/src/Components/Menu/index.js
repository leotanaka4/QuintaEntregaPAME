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
import batata from './Imagens/batata-frita.jpg';
import frango from './Imagens/frango-frito.jpg';
import burguer from './Imagens/hamburguer.jpg';
import pizza from './Imagens/pizza.jpg';
import pf from './Imagens/pf.jpg';
import suco from './Imagens/suco-de-laranja.jpg';
import coca from './Imagens/coca-cola.jpg';
import sorvete from './Imagens/sorvete-de-chocolate.jpg';

export default function Informacoes() {
    const [quantity1, setQuantity1] = useState(0);
    const [quantity2, setQuantity2] = useState(0);
    const [quantity3, setQuantity3] = useState(0);
    const [quantity4, setQuantity4] = useState(0);
    const [quantity5, setQuantity5] = useState(0);
    const [quantity6, setQuantity6] = useState(0);
    const [quantity7, setQuantity7] = useState(0);
    const [quantity8, setQuantity8] = useState(0);
    const [nome, setNome] = useState("");
    const [actualItem, setActualItem] = useState({});
    const [available, setAvailable] = useState(false);

    function Increment1(){
        setQuantity1(quantity1 + 1)
    }
    function Decrement1(){
        if (quantity1 === 0){
            console.log("Erro ao diminuir a quantidade de alimentos")
        } else{
            setQuantity1(quantity1 - 1)
        }
    }
    function Increment2(){
        setQuantity1(quantity2 + 1)
    }
    function Decrement2(){
        if (quantity2 === 0){
            console.log("Erro ao diminuir a quantidade de alimentos")
        } else{
            setQuantity2(quantity2 - 1)
        }
    }
    function Increment3(){
        setQuantity3(quantity3 + 1)
    }
    function Decrement3(){
        if (quantity3 === 0){
            console.log("Erro ao diminuir a quantidade de alimentos")
        } else{
            setQuantity3(quantity3 - 1)
        }
    }
    function Increment4(){
        setQuantity4(quantity4 + 1)
    }
    function Decrement4(){
        if (quantity4 === 0){
            console.log("Erro ao diminuir a quantidade de alimentos")
        } else{
            setQuantity4(quantity4 - 1)
        }
    }
    function Increment5(){
        setQuantity5(quantity5 + 1)
    }
    function Decrement5(){
        if (quantity5 === 0){
            console.log("Erro ao diminuir a quantidade de alimentos")
        } else{
            setQuantity5(quantity5 - 1)
        }
    }
    function Increment6(){
        setQuantity6(quantity6 + 1)
    }
    function Decrement6(){
        if (quantity6 === 0){
            console.log("Erro ao diminuir a quantidade de alimentos")
        } else{
            setQuantity6(quantity6 - 1)
        }
    }
    function Increment7(){
        setQuantity7(quantity7 + 1)
    }
    function Decrement7(){
        if (quantity7 === 0){
            console.log("Erro ao diminuir a quantidade de alimentos")
        } else{
            setQuantity7(quantity7 - 1)
        }
    }
    function Increment8(){
        setQuantity8(quantity8 + 1)
    }
    function Decrement8(){
        if (quantity8 === 0){
            console.log("Erro ao diminuir a quantidade de alimentos")
        } else{
            setQuantity8(quantity8 - 1)
        }
    }

    function Pagar(){/*Simula o envio da Informação*/
        setQuantity1(0);
        setQuantity2(0);
        setQuantity3(0);
        setQuantity4(0);
        setQuantity5(0);
        setQuantity6(0);
        setQuantity7(0);
        setQuantity8(0);
        setNome("")
    }
    useEffect(() => {
        setActualItem({
            q1: quantity1,
            q2: quantity2,
            q3: quantity3,
            q4: quantity4,
            q5: quantity5,
            q6: quantity6,
            q7: quantity7,
            q8: quantity8,
            cliente: nome
        });

        if (!nome || ((quantity1 + quantity2 + quantity3 + quantity4 + quantity5 + quantity6 + quantity7 + quantity8) === 0)){
            setAvailable(false)
        } else{
            setAvailable(true)
        }
    }, [quantity1, quantity2, quantity3, quantity4, quantity5, quantity6, quantity7, quantity8, nome]);
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
                    <Quantity>Quantidade: {quantity1}</Quantity>
                    <QuantityButton onClick={Increment1}>+</QuantityButton>
                    <QuantityButton onClick={Decrement1}>-</QuantityButton>
                </QuantidadeAlimento>
            </Alimento>
            <Alimento>
                <InfoAlimento>
                    <NomeAlimento>Frango Frito</NomeAlimento>
                    <ImagemAlimento src={frango} width="300"height="300"/>
                    <PreçoAlimento>R$ 15,00</PreçoAlimento>
                </InfoAlimento>
                <QuantidadeAlimento>
                    <Quantity>Quantidade: {quantity2}</Quantity>
                    <QuantityButton onClick={Increment2}>+</QuantityButton>
                    <QuantityButton onClick={Decrement2}>-</QuantityButton>
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
                    <Quantity>Quantidade: {quantity3}</Quantity>
                    <QuantityButton onClick={Increment3}>+</QuantityButton>
                    <QuantityButton onClick={Decrement3}>-</QuantityButton>
                </QuantidadeAlimento>
            </Alimento>
            <Alimento>
                <InfoAlimento>
                    <NomeAlimento>Pizza</NomeAlimento>
                    <ImagemAlimento src={pizza} width="300"height="300"/>
                    <PreçoAlimento>R$ 40,00</PreçoAlimento>
                </InfoAlimento>
                <QuantidadeAlimento>
                    <Quantity>Quantidade: {quantity4}</Quantity>
                    <QuantityButton onClick={Increment4}>+</QuantityButton>
                    <QuantityButton onClick={Decrement4}>-</QuantityButton>
                </QuantidadeAlimento>
            </Alimento>
            <Alimento>
                <InfoAlimento>
                    <NomeAlimento>Prato Feito</NomeAlimento>
                    <ImagemAlimento src={pf} width="300"height="300"/>
                    <PreçoAlimento>R$ 20,00</PreçoAlimento>
                </InfoAlimento>
                <QuantidadeAlimento>
                    <Quantity>Quantidade: {quantity5}</Quantity>
                    <QuantityButton onClick={Increment5}>+</QuantityButton>
                    <QuantityButton onClick={Decrement5}>-</QuantityButton>
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
                    <Quantity>Quantidade: {quantity6}</Quantity>
                    <QuantityButton onClick={Increment6}>+</QuantityButton>
                    <QuantityButton onClick={Decrement6}>-</QuantityButton>
                </QuantidadeAlimento>
            </Alimento>
            <Alimento>
                <InfoAlimento>
                    <NomeAlimento>Coca-Cola</NomeAlimento>
                    <ImagemAlimento src={coca} width="300"height="300"/>
                    <PreçoAlimento>R$ 5,00</PreçoAlimento>
                </InfoAlimento>
                <QuantidadeAlimento>
                    <Quantity>Quantidade: {quantity6}</Quantity>
                    <QuantityButton onClick={Increment7}>+</QuantityButton>
                    <QuantityButton onClick={Decrement7}>-</QuantityButton>
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
                    <Quantity>Quantidade: {quantity8}</Quantity>
                    <QuantityButton onClick={Increment8}>+</QuantityButton>
                    <QuantityButton onClick={Decrement8}>-</QuantityButton>
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