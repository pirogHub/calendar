import React, { useContext } from 'react'
import plusImg from "../../assets/images/plus.svg"
import GlobalContext from '../../context/GlobalContext'
import styles from "./CreateEventButton.module.scss"
import dayjs from 'dayjs'
import { createDayId, createHourId, createHourIdFromDayjs } from '../../util'
export default function CreateEventButton() {

    const { SetShowEventModal, hourActivity_add } = useContext(GlobalContext)

    const onClick = () => {
        let eventTime = prompt("Enter event time:\nYYYY-MM-DD HH:mm:ss");
        if (!eventTime) return

        const timeObj = dayjs(eventTime)
        const isValid = timeObj.isValid()
        if (!isValid) return

        // const [data, time] = eventTime.split(" ")
        // if (!data || !time) return

        // if (eventTime != null) {
        const dayId = createDayId(timeObj)
        const hourId = createHourIdFromDayjs(timeObj)
        const event = {
            title: eventTime,
            day: timeObj.valueOf(),
            // hour: 4,
            dayId,
            hourId,
            id: Date.now()
        }

        // dispatchCalEvent({ type: "push", payload: event })
        hourActivity_add(event)
        // }
    }

    return (
        <button
            onClick={onClick}
            className={styles.createBtn}>

            +
        </button>
    )
}
