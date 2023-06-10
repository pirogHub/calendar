import React, { useCallback, useEffect, useRef } from 'react'

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Day from './Day';
import { useCalendar } from '../../../context/GlobalContext';
import { styled } from 'styled-components';


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

export default function Month() {

    const {
        currentMonth,
        todayWeekIdx,
        isGoToday,
        setIsGoToday,
        setCurrentWeekIdx
    }
        = useCalendar()

    const onChangeWeek = useCallback((itemIdx, item) => {
        setCurrentWeekIdx(prev => itemIdx)
    }, [setCurrentWeekIdx])


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
                onChange={onChangeWeek}
                {...getConfigurableProps()}
                selectedItem={todayWeekIdx}

            >


                {currentMonth.map((week, rowIdx) => {


                    return <WeekWrapper
                        key={week.id}
                    >
                        {week.map((day, idx) => {

                            return <Day day={day} key={day.id} />
                        })}
                    </WeekWrapper>
                }
                )}

            </Carousel>
        </>
    )
}


const WeekWrapper = styled.div`
        display: flex;
    justify-content: flex-start;

    &>div {
        width: calc(100% / 7);
    }

    // &>div:nth-last-child(-n+6):first-child,
    // &>div:nth-last-child(-n+6):first-child~div {
    //     background-color: #00f;

    // }
`