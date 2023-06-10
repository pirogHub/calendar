import dayjs from 'dayjs'
import React, { useCallback } from 'react'

import Arrow from '../Arrow'
import { StyledBtn } from "../StyledBtn"
import { styled } from 'styled-components'
import { useCalendar } from '../../../context/GlobalContext'
export default function WeekToggler() {

    const { monthIndex, setMonthIndex } = useCalendar()

    const onClickPrev = useCallback(() => {
        setMonthIndex(prev => prev - 1)
    }, [setMonthIndex])
    const onClickNext = useCallback(() => {
        setMonthIndex(prev => prev + 1)
    }, [setMonthIndex])


    return (
        <MonthTogglerWrapper
        >
            <StyledBtn
                $withoutPadding={true}
                $withoutBoxShadow={true}
                onClick={onClickPrev}
            >
                <Arrow />
            </StyledBtn>
            <h2 className="data_label">
                {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
            </h2>
            <StyledBtn
                $withoutPadding={true}
                $withoutBoxShadow={true}
                onClick={onClickNext}
            >
                <Arrow isRight />
            </StyledBtn>
        </MonthTogglerWrapper>
    )
}


const MonthTogglerWrapper = styled.div`
  display: flex;
        /* justify-content: space-between; */
        padding-bottom: 3px;

    .data_label {
        width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1.5rem;
        flex: 5;
    }

    ${StyledBtn} {
        flex: 1;
    }
`