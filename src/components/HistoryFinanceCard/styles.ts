import { styled } from "styled-components";

interface ITagProps {
  color: string;
}


export const Container = styled.li`
    background-color: ${props => props.theme.colors.tertiary};

    list-style: none;
    border-radius: 10px;

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

    > div span{
        font-weight: 500;
        font-size: 22px;
    }
`;

export const Tag = styled.div<ITagProps>`
    width: 13px;
    height: 60%;

    background-color: ${props => props.color};

    position: absolute;
    left: 0;
`;