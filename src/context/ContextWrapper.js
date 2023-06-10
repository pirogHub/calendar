import React, { useEffect, useMemo, useReducer, useState } from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'
import { getMonth, getTodayWeekIdx } from '../util'
import { initEvents, savedEventsReducer } from './reducer'

const showInAlert = (array) => {

    if (!Array.isArray(array) || !array?.length) return
    const str = array.map(i => i.title).join("\n")
    window.alert(str)
}

export default function ContextWrapper(props) {
    const [savedEvents, dispatchCalEvent] = useReducer(savedEventsReducer, [], initEvents)

    const [monthIndex, setMonthIndex] = useState(dayjs().month())
    const [currentMonth, setCurrentMonth] = useState(getMonth())
    const [todayWeekIdx, setTodayWeekIdx] = useState(getTodayWeekIdx())
    const [currentWeekIdx, setCurrentWeekIdx] = useState(todayWeekIdx)
    const [currentWeek, setCurrentWeek] = useState(currentMonth[currentWeekIdx])

    const [selectedHour, setSelectedHour] = useState(null)
    const [isSelectedHourHasActivity, setIsSelectedHourHasActivity] = useState(false)


    const [isGoToday, setIsGoToday] = useState(false)



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
    const hourActivity_deleteAllHour = () => {

        dispatchCalEvent({ type: "deleteAllHour", payload: selectedHour })
        setIsSelectedHourHasActivity(false)
        setSelectedHour(null)
    }
    const hourActivity_add = (event) => {
        dispatchCalEvent({ type: "push", payload: event })
    }


    useEffect(() => {
        localStorage.setItem('savedEvents', JSON.stringify(savedEvents))
    }, [savedEvents])

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex))
    }, [monthIndex])

    useEffect(() => {
        setCurrentWeek(currentMonth[currentWeekIdx])
    }, [currentWeekIdx, currentMonth])



    const goToday = () => {
        const todatWeekIdx = getTodayWeekIdx()

        setMonthIndex(prev => dayjs().month())
        setTodayWeekIdx(todatWeekIdx)
        setIsGoToday(true)
    }

    return (
        <GlobalContext.Provider value={{
            currentWeek,
            setCurrentWeek,
            currentMonth,
            setCurrentMonth,
            monthIndex,
            setMonthIndex,
            savedEvents,
            currentWeekIdx,
            setCurrentWeekIdx,
            showInAlert,
            selectedHour,
            setSelectedHour: toggleSelectedHour,
            hourActivity_add,
            hourActivity_delete,
            hourActivity_deleteAllHour,
            isSelectedHourHasActivity,
            setIsSelectedHourHasActivity,
            isGoToday,
            goToday,
            setIsGoToday,
            todayWeekIdx
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
