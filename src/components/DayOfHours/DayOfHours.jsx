import React, { Fragment } from 'react'
import Day from '../WeekBar/Day/Day'
import Hour from '../Hour/Hour'
import styles from "./DayOfHours.module.scss"
import dayjs from 'dayjs'
import { createIdsService } from '../../util'
const fakeDay = new Array(24).fill([])
const timeArr = Array.from({ length: 24 }, (x, idx) => {
    const timeStr = `${idx}`.padStart(2, "0")
    return `${timeStr}:00`
})
export default function DayOfHours({ day, dayId, eventsToday }) {


    return (
        <div className={styles.dayWrapper}>

            {fakeDay.map((h, idx) => {
                const eventsThatHour = eventsToday ? eventsToday.filter(e => {
                    const eh = dayjs(e.day).hour()
                    return eh === idx
                }) : []

                const hourId = createIdsService.createHourIdByDayId(dayId, idx)
                return <Hour
                    hour={h}
                    key={idx}
                    hourId={hourId}
                    eventsThatHour={eventsThatHour}
                />
            })}



        </div>
    )
}
