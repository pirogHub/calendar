import dayjs from 'dayjs'
import React, { useContext } from 'react'
import GlobalContext from '../../../context/GlobalContext'
import styles from "../WeekBar.module.scss"
import Arrow from '../../Arrow'
export default function WeekToggler() {
    const { monthIndex, setMonthIndex } = useContext(GlobalContext)
    return (
        <div className={styles.monthToggler_wrapper}>
            <button
                className={styles.monthToggler_btn}
                onClick={() => setMonthIndex(prev => prev - 1)}>
                <Arrow />
            </button>
            <h2
                className={styles.data_label}
            >
                {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
            </h2>
            <button
                className={styles.monthToggler_btn}
                onClick={() => setMonthIndex(prev => prev + 1)}>
                <Arrow isRight />
            </button>
        </div>
    )
}
