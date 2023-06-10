import React, { Fragment, useState } from 'react'
import Day from '../WeekBar/Day/Day'
import DayOfHours from '../DayOfHours/DayOfHours'
import styles from "./WeekOfHours.module.scss"
import Hour from '../Hour/Hour'
import { checkIsEqualDays, createDayId } from '../../util'

const timeArr = Array.from({ length: 24 }, (x, idx) => {
    const timeStr = `${idx}`.padStart(2, "0")
    return `${timeStr}:00`
})



export default function WeekOfHours({ week, savedEvents }) {
    // const [weekEvents, setWeekEvents] = useState(weekEvents)
    return (
        <div className={styles.WeekOfHours}>



            <div className={styles.wrapper}>

                <div className={styles.content}>
                    <div className='my_grid' style={{ width: "100%" }}>
                        <div>
                            {timeArr.map(t => {
                                return <div>
                                    <Hour title={t} />
                                </div>
                            })}

                        </div>
                        <div style={{ width: "100%", display: 'flex' }}>
                            {week.map((day, idx) => {
                                const eventsToday = savedEvents ? savedEvents.filter(e => checkIsEqualDays(e.day, day)) : []
                                // const eventsToday = savedEvents ? savedEvents.filter(e => checkIsEqualDays(e.day, day)) : []
                                const dayId = createDayId(day)

                                return <DayOfHours
                                    day={day}
                                    key={day.id}
                                    dayId={dayId}
                                    eventsToday={eventsToday}
                                />
                            })}


                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}
