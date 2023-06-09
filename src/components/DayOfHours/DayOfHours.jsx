import React, { Fragment } from 'react'
import Day from '../WeekBar/Day/Day'
import Hour from '../Hour/Hour'
import styles from "./DayOfHours.module.scss"
const fakeDay = new Array(24).fill([])

export default function DayOfHours({ day }) {


    return (
        <div className={styles.dayWrapper}>

            {fakeDay.map((h, idx) => {

                return <Hour hour={h} key={idx} hourId={idx} />
            })}



        </div>
    )
}
