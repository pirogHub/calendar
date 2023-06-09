import React, { useContext, useState, Fragment, useEffect } from 'react'
import MonthToggler from './MonthToggler/MonthToggler'
import styles from "./WeekBar.module.scss"
import { getMonth } from '../../util'
import GlobalContext from '../../context/GlobalContext'
import Month from './Month/Month'

export default function WeekBar() {
    const [currentMonth, setCurrentMonth] = useState(getMonth())
    const { monthIndex, showEventModal } = useContext(GlobalContext)


    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex))
    }, [monthIndex])
    return (
        <div className={styles.weekBar_wrapper}>
            <div className={styles.week_wrapper}>
                <Month month={currentMonth} />

            </div>
            <MonthToggler />

        </div>
    )
}
