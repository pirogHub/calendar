import React, { useContext, useState, Fragment, useEffect, useCallback } from 'react'
import MonthToggler from './MonthToggler/MonthToggler'
import styles from "./WeekBar.module.scss"
import { getMonth } from '../../util'
import GlobalContext from '../../context/GlobalContext'
import Month from './Month/Month'

export default function WeekBar() {
    const { monthIndex, setMonthIndex, currentMonth, setCurrentWeekIdx } = useContext(GlobalContext)

    const onClickPrev = useCallback(() => {
        setMonthIndex(prev => prev - 1)
    }, [setMonthIndex])
    const onClickNext = useCallback(() => {
        setMonthIndex(prev => prev + 1)
    }, [setMonthIndex])

    const onChangeWeek = useCallback((weekIdx) => {
        setCurrentWeekIdx(prev => weekIdx)
    }, [setCurrentWeekIdx])

    return (
        <div className={styles.weekBar_wrapper}>
            <div className={styles.week_wrapper}>
                <Month month={currentMonth} onChangeWeek={onChangeWeek} />

            </div>
            <MonthToggler monthIndex={monthIndex} onClickPrev={onClickPrev} onClickNext={onClickNext} />

        </div>
    )
}
