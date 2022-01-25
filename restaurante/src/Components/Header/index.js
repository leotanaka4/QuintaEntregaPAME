import React from 'react';
import {AiOutlineHome, AiOutlineInfoCircle} from 'react-icons/ai';
import {BsGear} from 'react-icons/bs';
import {MenuItem, Head, HeaderName, HeaderMenu} from './styles';

export default function Header() {
    const itensMenu = [
        {nome: "Menu", icone: <AiOutlineHome/>},
        {nome: "Informações", icone: <AiOutlineInfoCircle/>},
        {nome: "Suporte", icone: <BsGear/>},
    ];

    const renderList = itensMenu.map((item, index) => (
        <MenuItem key={index}>
            {item.icone}
            {item.nome}
        </MenuItem>
    ));
    return(
    <Head>
        <HeaderName> Mônica's Restaurante</HeaderName>
        <HeaderMenu>{renderList}</HeaderMenu>
    </Head>
    );
}