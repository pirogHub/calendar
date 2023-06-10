import { styled } from "styled-components";

export const StyledHourItem = styled.div`
    /* .hour_wrapper { */
    height: 70px;
    width: 100%;
    border-width:1px;
    border-style: solid;
    border-color: ${props => props.$withBorder ? "#eeeaea" : "transparent"};
    border-left-color: transparent;
    box-sizing: border-box;
    padding: 5px;
    position: relative;
    /* } */

    .hour {
          
          height: 100%;
          width: 100%;
          cursor: ${props => props.$NoActions ? ":default" : "pointer"};
          pointer-events: ${props => props.$NoActions ? ":none" : "auto"};
           
           background-color: ${props =>
        props.$isSelected
            ? "#b9cecd9c"
            : props.$isActivity
                ? "#d7f0df9c" : "transparent"};
              
    }

    .timeTitle {
    position: absolute;
    top:0;
    transform: translateY(-50%);
    right: 8px;
    font-size: 1.3rem;

    @media all and (max-width: 570px) {
        font-size: 1rem;
    }
    }

   

    @media all and (max-width: 465px) {
        height: 55px;
    }
`