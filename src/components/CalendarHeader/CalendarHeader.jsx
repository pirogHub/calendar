import { useContext } from "react"
import Arrow from "../Arrow"
import GlobalContext from "../../context/GlobalContext"
import dayjs from "dayjs"
import CreateEventButton from "../CreateEventButton/CreateEventButton"
import styles from "./CalendarHeader.module.scss"
const CalendarHeader = () => {

    const { monthIndex, setMonthIndex } = useContext(GlobalContext)
    const handeReset = () => {
        setMonthIndex(prev => monthIndex === dayjs().month() ? monthIndex + Math.random() : monthIndex)
    }
    return (


        <header
            className={styles.CalendarHeader_wrapper}
        >

            <h1
                className={styles.title}
            >
                Calendar
            </h1>

            <CreateEventButton />
        </header>

    )
}

export default CalendarHeader