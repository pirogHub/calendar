import React, { useEffect, useMemo, useReducer, useState } from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'
import { getMonth } from '../util'

function savedEventsReducer(state, { type, payload }) {
    switch (type) {
        case "push":
            return [...state, payload]
        case "update":
            return state.map(e => e.id === payload?.id ? payload : e)
        case "delete":
            return state.filter(e => e.id !== payload?.id)
        case "deleteAllHour":
            return state.filter(e => e.hourId !== payload?.hourId)
        default:
            throw new Error()

    }
}

function initEvents() {
    const storageEvents = localStorage.getItem('savedEvents')
    let parsedEvents = []

    if (storageEvents) {
        try {
            parsedEvents = JSON.parse(storageEvents)
        } catch (error) {
            localStorage.removeItem('savedEvents')
            parsedEvents = []
        }
    }
    return parsedEvents
}

export default function ContextWrapper(props) {

    const [monthIndex, setMonthIndex] = useState(dayjs().month())
    // const [smallCalendarMonth, setSmallCalendarMonth] = useState(null)
    const [daySelected, setDaySelected] = useState(dayjs())
    // const [showEventModal, SetShowEventModal] = useState(false)
    // const [selectedEvent, setSelectedEvent] = useState(null)
    const [savedEvents, dispatchCalEvent] = useReducer(savedEventsReducer, [], initEvents)
    // const [labels, setLabels] = useState([])
    useEffect(() => {
        localStorage.setItem('savedEvents', JSON.stringify(savedEvents))
    }, [savedEvents])
    // useEffect(() => {
    //     setLabels(prevLabels => {

    //         return [...new Set(savedEvents.map(e => e.label))]
    //             .map(label => {
    //                 const curLabel = prevLabels.find(lbl => lbl.label === label)
    //                 return {
    //                     label,
    //                     checked: curLabel ? curLabel.checked : true
    //                 }
    //             })
    //     })
    // }, [savedEvents])

    // useEffect(() => {
    //     if (smallCalendarMonth !== null) {
    //         setMonthIndex(smallCalendarMonth)
    //     }
    // }, [])

    // const filteredEvents = useMemo(() => {
    //     return savedEvents.filter(e =>
    //         (labels
    //             .filter(lbl => lbl.checked))
    //             .map(lbl => lbl.label)
    //             .includes(e.label))
    // }, [savedEvents, labels])

    // function updateLabel(label) {
    //     setLabels(
    //         labels.map(lbl => lbl.label === label.label ? label : lbl)
    //     )
    // }

    // useEffect(() => {
    //     if (!showEventModal) {
    //         setSelectedEvent(null)
    //     }
    // }, [showEventModal])
    const [currentMonth, setCurrentMonth] = useState(getMonth())
    const [currentWeek, setCurrentWeek] = useState(currentMonth[0])
    const [currentWeekIdx, setCurrentWeekIdx] = useState(0)
    const [selectedHour, setSelectedHour] = useState(null)
    const [isSelectedHourHasActivity, setIsSelectedHourHasActivity] = useState(false)
    // const { monthIndex, showEventModal } = useContext(GlobalContext)

    const showInAlert = (array) => {

        if (!Array.isArray(array) || !array?.length) return
        debugger
        // const titlesArr =  array.map(i => i.title)
        const str = array.map(i => i.title).join("\n")
        window.alert(str)
    }

    const toggleSelectedHour = (hourId) => {
        if (hourId === selectedHour) {
            setSelectedHour(null)
        } else {
            setSelectedHour(hourId)
        }
    }

    const hourActivity_delete = (event) => {
        setSelectedHour(null)
        setIsSelectedHourHasActivity(false)
        dispatchCalEvent({ type: "delete", payload: event })
    }
    const hourActivity_deleteAllHour = (hourId) => {
        setSelectedHour(null)
        setIsSelectedHourHasActivity(false)
        dispatchCalEvent({ type: "deleteAllHour", payload: hourId })
    }
    const hourActivity_add = (event) => {
        dispatchCalEvent({ type: "push", payload: event })
    }

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex))
    }, [monthIndex])
    useEffect(() => {
        setCurrentWeek(currentMonth[currentWeekIdx])
    }, [currentWeekIdx])
    // useEffect(() => {
    //     const tmp = currentWeek
    //     debugger
    // }, [currentWeek])

    return (
        <GlobalContext.Provider value={{
            currentWeek,
            setCurrentWeek,
            currentMonth,
            setCurrentMonth,
            monthIndex,
            setMonthIndex,
            // smallCalendarMonth,
            // setSmallCalendarMonth,
            daySelected,
            setDaySelected,
            // showEventModal,
            // SetShowEventModal,
            // dispatchCalEvent,
            savedEvents,
            // selectedEvent,
            // setSelectedEvent,
            // labels,
            // setLabels,
            // updateLabel,
            // filteredEvents
            currentWeekIdx,
            setCurrentWeekIdx,
            showInAlert,
            selectedHour,
            setSelectedHour: toggleSelectedHour,
            hourActivity_add,
            hourActivity_delete,
            hourActivity_deleteAllHour,
            isSelectedHourHasActivity,
            setIsSelectedHourHasActivity
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
