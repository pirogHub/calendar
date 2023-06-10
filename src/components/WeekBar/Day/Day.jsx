import dayjs from "dayjs"
import { useContext, useEffect, useState } from "react"
import GlobalContext from "../../../context/GlobalContext"
import styles from "./Day.module.scss"
import cn from "classnames"
import { checkIsEqualDays } from "../../../util"
const Day = ({ day, rowIdx }) => {
  const [dayEvents, setDayEvents] = useState([])
  const { setSelectedEvent, filteredEvents: savedEvents, setDaySelected, SetShowEventModal }
    = useContext(GlobalContext)



  function getCurrentDayCtyle() {
    return checkIsEqualDays(day, dayjs())

  }


  return (
    <div className={styles.day_wrapper}>

      <div className={styles.day_name}>{day.format("ddd")[0].toUpperCase()}</div>

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
