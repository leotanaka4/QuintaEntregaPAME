import React from 'react';
import {Link} from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai';
import {BsGear, BsMenuUp} from 'react-icons/bs';
import {MenuItem, Head, HeaderName, HeaderMenu} from './styles';

export default function Header() {
    const itensMenu = [
        {nome: "Home", icone: <AiOutlineHome/>, path: "/"},
        {nome: "Menu", icone: <BsMenuUp/>, path: "/Menu"},
        {nome: "Suporte", icone: <BsGear/>, path: "/Suporte"},
    ];

    const renderList = itensMenu.map((item, index) => (
        <MenuItem key={index}>
            <Link to={item.path}>
                {item.icone}
                {item.nome}
            </Link>
        </MenuItem>
    ));
    return(
    <Head>
        <HeaderName>RESTAURANTE DA MÔNICA</HeaderName>
        <HeaderMenu>{renderList}</HeaderMenu>
    </Head>
    );
}