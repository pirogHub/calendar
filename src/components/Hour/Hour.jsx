import dayjs from "dayjs"
import { useContext, useEffect, useState } from "react"
import GlobalContext from "../../context/GlobalContext"
import cn from "classnames"

import styles from "./Hour.module.scss"
const Hour = ({ hour, title, onClick, hourId, eventsThatHour }) => {
  // const day = dayjs()
  // const [dayEvents, setDayEvents] = useState([])
  const { showInAlert, setSelectedHour, selectedHour, setIsSelectedHourHasActivity }
    = useContext(GlobalContext)
  const [isSelected, setIsSelected] = useState(selectedHour === hourId)

  useEffect(() => {
    if (selectedHour === hourId) {
      setIsSelected(true)
    } else {
      setIsSelected(false)
    }
  }, [selectedHour])
  // useEffect(() => {

  //   const events = savedEvents.filter(e => dayjs(e.day).format("DD-MM-YY") === day.format("DD-MM-YY"))
  //   setDayEvents(events)
  // }, [savedEvents])

  // function getCurrentDayCtyle() {
  //   return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
  //     ? "bg-blue-600 text-white rounded-full w-7"
  //     : ""
  // }
  function getCurrentDayStyle() {
    const tmp = eventsThatHour

    const flag = !!(eventsThatHour && eventsThatHour.length)
    // debugger
    return !!(eventsThatHour && eventsThatHour.length)
  }







  return (
    <div
      onClick={() => {

        setSelectedHour(hourId)
        setIsSelectedHourHasActivity(!!(eventsThatHour && eventsThatHour.length))
        // setDaySelected(day);
        // SetShowEventModal(true)
      }}
      onDoubleClick={
        () =>
          showInAlert(eventsThatHour)
      }
      className={styles.hour_wrapper}>
      <header className={cn(styles.hour, {
        [styles.hour_activity]: getCurrentDayStyle(),
        [styles.hour_clicked]: isSelected
      })}>

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
