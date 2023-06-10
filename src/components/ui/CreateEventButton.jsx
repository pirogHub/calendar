import React from 'react'
import { useCalendar } from '../../context/GlobalContext'

import dayjs from 'dayjs'
import { createIdsService } from '../../util'
import { StyledBtn } from './StyledBtn'
export default function CreateEventButton() {

    const { hourActivity_add } = useCalendar()

    const onClick = () => {
        let eventTime = prompt("Enter event time:\nYYYY-MM-DD HH:mm:ss");
        if (!eventTime) return
        const timeObj = dayjs(eventTime)
        const isValid = timeObj.isValid()
        if (!isValid) {
            window.alert("У даты неправильный формат")
            return
        }

        const dayId = createIdsService.createDayId(timeObj)
        const hourId = createIdsService.createHourIdFromDayjs(timeObj)
        const event = {
            title: eventTime,
            day: timeObj.valueOf(),
            dayId,
            hourId,
            id: Date.now()
        }


        hourActivity_add(event)

    }

    return (
        <StyledBtn
            $largeTxt
            $notWFull
            onClick={onClick}
        >
            +
        </StyledBtn>

    )
}
