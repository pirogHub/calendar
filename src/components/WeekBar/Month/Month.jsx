import React, { Fragment, useContext, useEffect, useRef, useState } from 'react'

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styles from "./Month.module.scss"
import Day from '../Day/Day';
import GlobalContext from '../../../context/GlobalContext';


const getConfigurableProps = () => ({
    showArrows: true,
    showStatus: true,
    showIndicators: true,
    // infiniteLoop: false,
    // showThumbs: true,
    useKeyboardArrows: false,
    // autoPlay: true,
    // stopOnHover: true,
    swipeable: true,
    // dynamicHeight: true,
    emulateTouch: true,
    autoFocus: false,
    // thumbWidth: 100,
    // selectedItem: 0,
    // interval: 2000,
    // transitionTime: 500,
    swipeScrollTolerance: 5,
    ariaLabel: undefined,
    centerSlidePercentage: 100
});

export default function Month({ onChangeWeek, month }) {
    const [selectedItem, setSelectedItem] = useState(0)
    const onChange = (itemIdx, item) => {
        onChangeWeek(itemIdx)
    }
    const { todayWeekIdx, isGoToday, setIsGoToday }
        = useContext(GlobalContext)
    const carousel_ref = useRef()
    useEffect(() => {
        if (isGoToday) {

            carousel_ref.current.selectItem({ ...carousel_ref.current.state, selectedItem: todayWeekIdx })

            setIsGoToday(false)
        }
    }, [isGoToday])
    return (
        <>
            <Carousel
                ref={carousel_ref}
                infiniteLoop
                centerMode
                onChange={onChange}
                {...getConfigurableProps()}
                selectedItem={todayWeekIdx}

            >


                {month.map((week, rowIdx) => {


                    return <div
                        className={styles.weekWrapper}
                        key={week.id}
                    >
                        {week.map((day, idx) => {

                            return <Day day={day} key={day.id} />
                        })}
                    </div>
                }
                )}

            </Carousel>
        </>
    )
}
