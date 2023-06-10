
import React, { useEffect, useState } from "react"
import { useCalendar } from "../../context/GlobalContext"

import { StyledHourItem } from "./StyledHourItem"

const Hour = ({
  $NoActions,
  $withBorder,
  title,
  hourId,
  eventsThatHour
}) => {
  const {
    showInAlert,
    setSelectedHour,
    selectedHour,
    setIsSelectedHourHasActivity
  }
    = useCalendar()

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
    <StyledHourItem
      $NoActions={$NoActions}
      $withBorder={$withBorder}
      $isSelected={isSelected}
      $isActivity={getCurrentDayStyle()}
      onClick={() => {
        setSelectedHour(hourId)
        setIsSelectedHourHasActivity(!!(eventsThatHour && eventsThatHour.length))
      }}
      onDoubleClick={
        () =>
          showInAlert(eventsThatHour)
      }
    >
      <div className={"hour"}>

        {!!title && <h3 className="timeTitle">{title}</h3>}
      </div>

    </StyledHourItem>
  )
}

export default React.memo(Hour)
