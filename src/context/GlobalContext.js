import React from "react"

const GlobalContext = React.createContext({
    currentWeek: [],
    setCurrentWeek: (week) => { },
    currentMonth: [],
    setCurrentMonth: (month) => { },
    monthIndex: 0,
    setMonthIndex: (index) => { },
    // smallCalendarMonth: 0,
    // setSmallCalendarMonth: (index) => { },
    daySelected: null,
    setDaySelected: (day) => { },
    // showEventModal: false,
    // SetShowEventModal: () => { },
    // dispatchCalEvent: ({ type, payload }) => { },
    savedEvents: [],
    // selectedEvent: null,
    // setSelectedEvent: (day) => { },
    // labels: [],
    // setLabels: () => { },
    // updateLabel: (label) => { },
    // filteredEvents: []
    currentWeekIdx: 0,
    setCurrentWeekIdx: (idx) => { },
    showInAlert: (array) => { },

    selectedHour: null,
    setSelectedHour: (hour) => { },

    hourActivity_add: (event) => { },
    hourActivity_delete: (event) => { },
    hourActivity_deleteAllHour: (hourId) => { },
    selectedHourHasActivity: false,
    setIsSelectedHourHasActivity: (boolean) => { }

})

export default GlobalContext;