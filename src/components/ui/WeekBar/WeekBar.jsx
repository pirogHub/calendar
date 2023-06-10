import React from 'react'

import MonthToggler from "./MonthToggler"
import Month from './Month'
import { styled } from 'styled-components'

export default function WeekBar() {


    return (
        <WeekBarWrapper>
            <div>
                <Month />
            </div>
            <MonthToggler />
        </WeekBarWrapper>

    )
}

const WeekBarWrapper = styled.div`
        min-height: 155px;
    max-height: 155px;

    grid-template-columns: 100%;
    grid-template-rows: 3fr 1fr;
    /* max-width: 100%; */
    padding: 2px;
    box-sizing: border-box;
`
