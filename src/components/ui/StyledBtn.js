import { styled } from "styled-components";

export const StyledBtn = styled.button`
    --color: ${props => props.$isNotActivity ? props.theme.color_simple : props.theme.color_active};
    --bsh: 0px 0px 3px ${props => props.theme.color_active_hover};
    -padding:  ${props => props.theme.$withoutPudding ? 0 : "45px"};

    padding-block: 5px;
    padding-inline: var(--padding);
    color: var(--color);
    font-size: ${props => props.$largeTxt ? props.theme.fzxl : props.theme.fz};
    border: 1px solid transparent;
    transition: all .25s cubic-bezier(0.64, 0.3, 1, 1);;
    border-radius: 3px;
    width: 100%;
    svg {
        width: 13px;

        fill: var(--color);
        stroke: var(--color);
        color: var(--color);

    }

    &:hover {
        color: ${props => props.theme.color_active_hover};
        box-shadow: ${props => props.$isNotActivity ? "none" : "var(--bsh)"};
    }
    &:disabled,&:hover:disabled {
        color: ${props => props.theme.color_disabled};
        box-shadow: 0px 0px 3px ${props => props.theme.color_disabled_hover};
    }


    @media all and (max-width: 500px) {
        -padding:  ${props => props.theme.$withoutPudding ? 0 : "35px"};
    padding-inline: var(--padding);
    }

    @media all and (max-width: 390px) {
        -padding:  ${props => props.theme.$withoutPudding ? 0 : "25px"};
        padding-inline: var(--padding);
    }
    @media all and (max-width: 300px) {
        -padding:  ${props => props.theme.$withoutPudding ? 0 : "15px"};
        padding-inline: var(--padding);
    }
`

