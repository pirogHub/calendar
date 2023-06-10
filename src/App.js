import './App.css';
import CalendarHeader from './components/CalendarHeader/CalendarHeader';

import { useContext } from 'react';

import GlobalContext from './context/GlobalContext';

import WeekBar from './components/WeekBar/WeekBar';
import WeekOfHours from './components/WeekOfHours/WeekOfHours';


import './supstyles/main.scss';
import './supstyles/presentation.scss';
import Footer from './components/Footer/Footer';

// 2023-06-10 01:11:11
function App() {
  const {
    currentWeek,
    savedEvents,
    goToday,
    hourActivity_deleteAllHour,
    MonthIndex
  } = useContext(GlobalContext)



  return (
    <>
      <div className="calendarWrapper">
        <CalendarHeader />
        <div className='my_grid my_grid_styles'>
          <div></div>

          <div >
            <WeekBar />
          </div>
        </div>

        <WeekOfHours
          week={currentWeek}
          savedEvents={savedEvents}
        />


        <Footer />
      </div>
    </>
  );
}

export default App;
