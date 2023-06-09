import React, { useContext } from 'react'
import plusImg from "../../assets/images/plus.svg"
import GlobalContext from '../../context/GlobalContext'
import styles from "./CreateEventButton.module.scss"
import dayjs from 'dayjs'
export default function CreateEventButton() {

    const { SetShowEventModal, dispatchCalEvent } = useContext(GlobalContext)

    const onClick = (hourId) => {
        let eventTime = prompt("Enter event time:\nYYYY-MM-DD HH:mm:ss");
        if (!eventTime) return

        const timeObj = dayjs("dfgsdfg")
        const isValid = timeObj.isValid()
        if (!isValid) return

        // const [data, time] = eventTime.split(" ")
        // if (!data || !time) return

        // if (eventTime != null) {
        //   const event = {
        //     title, eventTime, 
        //     day: day.valueOf(),
        //     hour: 4,
        //     id:  Date.now()
        //   }
        //   dispatchCalEvent({ type: "push", payload: event })
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
