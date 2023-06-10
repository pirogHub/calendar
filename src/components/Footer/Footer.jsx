import React, { useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'
import styles from "./Footer.module.scss"

import cn from "classnames"

export default function Footer() {
    const { monthIndex, setMonthIndex, selectedHour, goToday, hourActivity_deleteAllHour, isSelectedHourHasActivity } = useContext(GlobalContext)


    return (
        <footer className={styles.footer}>
            <div>

                <button
                    className={cn(styles.btn, styles.btn_today)}
                    onClick={goToday}
                >Today</button>
            </div>
            <div>
                {selectedHour && <button
                    className={cn(styles.btn, styles.btn_delete)}
                    disabled={!isSelectedHourHasActivity}
                    onClick={hourActivity_deleteAllHour}
                >Delete</button>
                }


            </div>
        </footer>
    )
}
