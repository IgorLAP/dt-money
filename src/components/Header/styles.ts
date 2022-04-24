import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    //1 rem = 16px (no desktop) - tamanho do root do html
    padding: 2rem 1rem 10rem; //top - left and right - bottom
    align-items: center;
    justify-content: space-between;
    
    button {
        font-size: 1rem;
        color: #fff;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        transition: filter .2;
        
        &:hover{
            filter: brightness(0.9);
        }
    }
`;