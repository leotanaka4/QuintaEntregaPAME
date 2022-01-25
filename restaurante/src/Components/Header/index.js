import React from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {GrCircleInformation} from 'react-icons/gr';
import {BsGear} from 'react-icons/bs';
import {MenuItem} from './styles';

export default function Header() {
    const itensMenu = [
        {nome: "Menu", icone: <AiOutlineHome/>},
        {nome: "Informações", icone: <GrCircleInformation/>},
        {nome: "Suporte", icone: <BsGear/>},
    ];

    const renderList = itensMenu.map((item, index) => (
        <MenuItem key={index}>
            {item.icone}
            {item.nome}
        </MenuItem>
    ));
    return <>{renderList}</>;
}