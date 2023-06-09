import dayjs from "dayjs"
import { useContext, useEffect, useState } from "react"
import GlobalContext from "../../context/GlobalContext"


import styles from "./Hour.module.scss"
const Hour = ({ hour, title, onClick, hourId }) => {
  const day = dayjs()
  const [dayEvents, setDayEvents] = useState([])
  const { dispatchCalEvent, setSelectedEvent, filteredEvents: savedEvents, setDaySelected, SetShowEventModal }
    = useContext(GlobalContext)

  // useEffect(() => {

  //   const events = savedEvents.filter(e => dayjs(e.day).format("DD-MM-YY") === day.format("DD-MM-YY"))
  //   setDayEvents(events)
  // }, [savedEvents])

  // function getCurrentDayCtyle() {
  //   return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
  //     ? "bg-blue-600 text-white rounded-full w-7"
  //     : ""
  // }







  return (
    <div
      onClick={() => {
        onClick(hourId)
        // setDaySelected(day);
        // SetShowEventModal(true)
      }}
      className={styles.hour_wrapper}>
      <header className={styles.hour}>

        {!!title && <h3 className={styles.timeTitle}>{title}</h3>}
        {/* <p className={`text-sm p-1 my-1 text-center ${getCurrentDayCtyle()}`}>{day.format("DD")}</p> */}
      </header>
      {/* <div
        onClick={() => {
          setDaySelected(day);
          SetShowEventModal(true)
        }}
        className="flex-1 cursor-pointer">
        {dayEvents.map((e, idx) => (
          <div
            key={e.id}
            onClick={() => setSelectedEvent(e)}
            className={`bg-${e.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
          >
            {e.title}
          </div>
        ))}
      </div> */}
    </div>
  )
}

export default Hour
