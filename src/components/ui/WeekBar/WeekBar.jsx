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
    min-height: 140px;
    max-height: 140px;

    grid-template-columns: 100%;
    grid-template-rows: 3fr 1fr;
    /* max-width: 100%; */
    padding: 2px;
    box-sizing: border-box;

    @media all and (max-width: 600px) {
        min-height: 140px;
    max-height: 140px;
    }

    @media all and (max-width: 500px) {
      min-height: 130px;
    max-height: 130px;
    }
    @media all and (max-width: 400px) {
      min-height: 130px;
    max-height: 130px;
    }

    @media all and (max-width: 320px) {
      min-height: 125px;
    max-height: 125px;
    } 

`
