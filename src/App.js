import logo from './logo.svg';
import './App.css';
import CalendarHeader from './components/CalendarHeader/CalendarHeader';
import Sidebar from './components/Sidebar/Sidebar';
// import Month from './components/Month/Month';
import { useContext, useEffect, useState } from 'react';
import { getMonth } from './util';
import GlobalContext from './context/GlobalContext';
import EventModal from './components/EventModal';
import WeekBar from './components/WeekBar/WeekBar';
import HourDay from './components/WeekOfHours/WeekOfHours';
import WeekOfHours from './components/WeekOfHours/WeekOfHours';

// carousel styles
import './supstyles/main.scss';
// import './supstyles/carousel.scss';
import './supstyles/presentation.scss';
import Footer from './components/Footer/Footer';

// 2023-06-01 01:11:11
function App() {
  // const [currentMonth, setCurrentMonth] = useState(getMonth())
  const { currentWeek, savedEvents, goToday, hourActivity_deleteAllHour } = useContext(GlobalContext)


  // useEffect(() => {
  //   setCurrentMonth(getMonth(monthIndex))
  // }, [monthIndex])
  return (
    <>
      {/* {showEventModal && <EventModal />} */}
      {/* <div className="h-screen flex flex-col"> */}
      <div className="calendarWrapper">
        <CalendarHeader />
        <div className='my_grid my_grid_styles'>
          <div></div>

          <div >
            <WeekBar />
          </div>
        </div>

        <WeekOfHours week={currentWeek} savedEvents={savedEvents} />

        {/* </div> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
