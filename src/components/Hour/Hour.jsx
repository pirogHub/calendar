import dayjs from "dayjs"
import { useContext, useEffect, useState } from "react"
import GlobalContext from "../../context/GlobalContext"
import cn from "classnames"

import styles from "./Hour.module.scss"
const Hour = ({ hour, title, onClick, hourId, eventsThatHour }) => {
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

  function getCurrentDayStyle() {
    return !!(eventsThatHour && eventsThatHour.length)
  }


  return (
    <div
      onClick={() => {

        setSelectedHour(hourId)
        setIsSelectedHourHasActivity(!!(eventsThatHour && eventsThatHour.length))

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
      </header>

    </div>
  )
}

export default Hour
