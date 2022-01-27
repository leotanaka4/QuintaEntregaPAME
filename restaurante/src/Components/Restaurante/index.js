import React from 'react';
import {Rest, Imagem} from './styles';
import saguao from './../../Imagens/restaurante.jpg'

export default function Restaurante() {

    return(
    <Rest>
        <Imagem src={saguao} width="628" height="350"/>
    </Rest>
    );
}