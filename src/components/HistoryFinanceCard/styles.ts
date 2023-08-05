import { styled } from "styled-components";

interface IContainerProps {
  color: string;
}

interface ITagProps {
  color: string;
}


export const Container = styled.li<IContainerProps>`
    background-color: ${props => props.color};

    list-style: none;
    border-radius: 5px;

    margin: 10px 0;
    padding: 12px 10px;

    display: flex;
    align-content: center;
    justify-content: space-between;

    cursor: pointer;
    transition: all .3s ease;

    position: relative;

    &:hover {
        opacity: .7;
        transform: translateX(10px);
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 10px;
    }

`;

export const Tag = styled.div<ITagProps>`
    width: 10px;
    height: 30px;

    background-color: ${props => props.color};

    position: absolute;
    left: 0;
`;