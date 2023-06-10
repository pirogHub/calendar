import { styled } from "styled-components";

export const StyledBtn = styled.button`
    --color: ${props => props.$isNotActivity ? props.theme.color_simple : props.theme.color_active};
    --bsh: 0px 0px 3px ${props => props.theme.color_active_hover};

    padding: 5px 45px;
    color: var(--color);
   font-size: ${props => props.$largeTxt ? props.theme.fzxl : props.theme.fz};
    border: 1px solid transparent;
    transition: all .25s cubic-bezier(0.64, 0.3, 1, 1);;
    border-radius: 3px;
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
`

