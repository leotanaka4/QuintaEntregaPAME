import styled from 'styled-components';

export const Head = styled.header`
    height: 20vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ec2300;
    
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
    cursor: pointer;
    &:hover{
        color: antiquewhite;
        border-bottom: 2px solid silver;
    }
    a{
        text-decoration: none;
        color: antiquewhite;
        transition: filter 0.2s;
    }
    a:hover{
        filter: brightness(0.8);
    }
`;