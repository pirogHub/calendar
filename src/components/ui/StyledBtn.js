import { styled } from "styled-components";

export const StyledBtn = styled.button`
    --color: ${props => props.$isNotActivity ? props.theme.color_simple : props.theme.color_active};
    --color_hover: ${props => props.theme.color_active_hover};
    --bsh: 0px 0px 3px ${props => props.$withoutBoxShadow ? "transparent" : props.theme.color_active_hover};
    --padding:  ${props => props.$withoutPadding ? "0" : "45px"};

    padding-block: 5px;
    padding-inline: var(--padding);
    color: var(--color);
    font-size: ${props => props.$largeTxt ? props.theme.fzxl : props.theme.fz};
    border: 1px solid transparent;
    transition: all .25s cubic-bezier(0.64, 0.3, 1, 1);;
    border-radius: 3px;
    width: ${props => props.$notWFull ? "auto" : "100%"};
    svg {
        width: 11px;

        fill: var(--color);
        stroke: var(--color);
        color: var(--color);

    }

    &:hover {
        color: ${props => props.theme.color_active_hover};
        box-shadow: ${props => props.$isNotActivity ? "none" : "var(--bsh)"};
        svg {
             fill: var(--color_hover);
        stroke: var(--color_hover);
        color: var(--color_hover);

    }
    }
    &:disabled,&:hover:disabled {
        color: ${props => props.theme.color_disabled};
        box-shadow: 0px 0px 3px ${props => props.theme.color_disabled_hover};
        svg {
             fill: ${props => props.theme.color_disabled_hover};
        stroke: ${props => props.theme.color_disabled_hover};
        color: ${props => props.theme.color_disabled_hover};

    }
    }


    @media all and (max-width: 500px) {
         
    padding-inline:  ${props => props.$withoutPadding ? 0 : "35px"};
    }

    @media all and (max-width: 390px) {
      
        padding-inline: ${props => props.$withoutPadding ? "0" : "25px"};
    }
    @media all and (max-width: 300px) {
                padding-inline:  ${props => props.$withoutPadding ? "0" : "15px"};
    }
`

