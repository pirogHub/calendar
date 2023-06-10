import React from 'react'
import Hour from './Hour/Hour'
import dayjs from 'dayjs'
import { createIdsService } from '../util'
import { styled } from 'styled-components'
const fakeDay = new Array(24).fill([])
const timeArr = Array.from({ length: 24 }, (x, idx) => {
    const timeStr = `${idx}`.padStart(2, "0")
    return `${timeStr}:00`
})
export default function DayOfHours({ day, dayId, eventsToday }) {


    return (
        <DayWrapper
        >

            {fakeDay.map((h, idx) => {
                const eventsThatHour = eventsToday ? eventsToday.filter(e => {
                    const eh = dayjs(e.day).hour()
                    return eh === idx
                }) : []

                const hourId = createIdsService.createHourIdByDayId(dayId, idx)
                return <Hour
                    $withBorder
                    key={idx}
                    hourId={hourId}
                    eventsThatHour={eventsThatHour}
                />
            })}



        </DayWrapper>
    )
}

const DayWrapper = styled.div`
        height: 100%;
    width: calc(100% / 7);

`