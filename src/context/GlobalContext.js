import React, { useContext } from "react"

const GlobalContext = React.createContext({
    currentWeek: [],
    setCurrentWeek: (week) => { },
    currentMonth: [],
    setCurrentMonth: (month) => { },
    monthIndex: 0,
    setMonthIndex: (index) => { },
    daySelected: null,
    setDaySelected: (day) => { },

    savedEvents: [],

    currentWeekIdx: 0,
    setCurrentWeekIdx: (idx) => { },
    showInAlert: (array) => { },

    selectedHour: null,
    setSelectedHour: (hour) => { },

    hourActivity_add: (event) => { },
    hourActivity_delete: (event) => { },
    hourActivity_deleteAllHour: (hourId) => { },
    selectedHourHasActivity: false,
    setIsSelectedHourHasActivity: (boolean) => { },
    isGoToday: false,
    goToday: () => { }

})

export const useCalendar = () => useContext(GlobalContext)

export default GlobalContext;