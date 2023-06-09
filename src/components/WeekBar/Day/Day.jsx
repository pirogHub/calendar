import dayjs from "dayjs"
import { useContext, useEffect, useState } from "react"
import GlobalContext from "../../../context/GlobalContext"
import styles from "./Day.module.scss"
import cn from "classnames"
const Day = ({ day, rowIdx }) => {
  const [dayEvents, setDayEvents] = useState([])
  const { setSelectedEvent, filteredEvents: savedEvents, setDaySelected, SetShowEventModal }
    = useContext(GlobalContext)

  useEffect(() => {

    const events = savedEvents.filter(e => dayjs(e.day).format("DD-MM-YY") === day.format("DD-MM-YY"))
    setDayEvents(events)
  }, [savedEvents])

  function getCurrentDayCtyle() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")

  }


  return (
    <div className={styles.day_wrapper}>

      <div className={styles.day_name}>{day.format("ddd").toUpperCase()}</div>

      <div className={styles.day_num_wrapper}>

        <span className={cn(styles.day_num, {
          [styles.currentDay]: getCurrentDayCtyle()
        })}>{day.format("DD")}
        </span>
      </div>


    </div>
  )
}

export default Day
