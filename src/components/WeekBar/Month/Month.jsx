import React, { Fragment } from 'react'

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styles from "./Month.module.scss"
import Day from '../Day/Day';
const tooglesGroupId = 'Toggles';
const valuesGroupId = 'Values';
const mainGroupId = 'Main';

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
    selectedItem: 0,
    // interval: 2000,
    // transitionTime: 500,
    swipeScrollTolerance: 5,
    ariaLabel: undefined,
    centerSlidePercentage: 100
});

export default function Month({ month }) {
    const onChange = (itemIdx, item) => {

    }
    return (
        <>
            <Carousel
                infiniteLoop
                centerMode
                onChange={onChange}

                // centerSlidePercentage={number('centerSlidePercentage', 80, {}, mainGroupId)}
                {...getConfigurableProps()}
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
