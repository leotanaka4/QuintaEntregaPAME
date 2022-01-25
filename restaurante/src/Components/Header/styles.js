import styled from 'styled-components';

export const Head = styled.header`
    display: flex;
    justify-content: space-between;
    padding-top: 4%;
    padding-bottom: 2%;
    background-color: red;
`;

export const HeaderName = styled.h1`
    padding-left: 3%;
    color: antiquewhite;
`;

export const HeaderMenu = styled.ul`
    display: flex;
    gap: 5vh;
    flex-direction: row;
    padding-right: 3%;
`;

export const MenuItem = styled.h3`
    height: 5vh;
    cursor: pointer;
    &:hover{
        color: antiquewhite;
        border-bottom: 2px solid silver;
    }
`;