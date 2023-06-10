import React from 'react'
import { styled } from 'styled-components'

export default function MyGreedMyRules({ $additional, Comp1, Comp2, children }) {

    let Comp = StyledMyGreedMyRules

    if ($additional) {
        Comp = StyledMyGreedMyRulesAdditional
    }

    return <Comp >
        {Comp1}
        {children ? children : Comp2}
    </Comp>
}




const StyledMyGreedMyRules = styled.div`

width: 100%;
  display: flex;

  &>*:first-child {
    width: calc(100% / 8);
  }

  &>*:last-child {
    max-width: calc(100% / 8 * 7);
    min-width: calc(100% / 8 * 7);
  }

`
const StyledMyGreedMyRulesAdditional = styled(StyledMyGreedMyRules)`
  background-color: ${props => props.theme.bg_color_additional};
  border-width: 3px;
  border-style: solid;
  border-color: ${props => props.theme.border_color_additional};
  border-width: 3px 0;
  padding-right: 3px;

`