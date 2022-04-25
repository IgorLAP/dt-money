import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        background: #e7e9ee;
        border: 1px solid #d7d7d7;
        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        color: #FFF;
        background: var(--green);
        border-radius: 0.25rem;
        border: 0;
        height: 4rem;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;
        transition: filter .2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;

export const TransactionType = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin: 1rem 0;

    button {
        height: 4rem;
        border: 1px solid #d7d7d7;
        border-radius: .25rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;
        transition: border-color .2s;

        &:hover {
            border-color: ${darken(0.1, '#d7d7d7')};
        }

        img {
            height: 25px;
            width: 25px;
        }
    }

    span {
        display: block;
        margin-left: 0.25rem;
        font-size: 1rem;
        color: var(--text-title);
    }
`;