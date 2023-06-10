import './App.css';
import CalendarHeader from './components/CalendarHeader';

import { useCalendar } from './context/GlobalContext';

import WeekBar from "./components/ui/WeekBar/WeekBar"
import WeekOfHours from './components/WeekOfHours';



import Footer from './components/Footer';
import MyGreedMyRules from './components/containers/MyGreedMyRules';
import { StyledCalendarWrapper } from './components/containers/CalendarWrapper';

// 2023-06-10 01:11:11
function App() {
  const {
    currentWeek,
    savedEvents,
  } = useCalendar()



  return (
    <>
      <StyledCalendarWrapper>
        <CalendarHeader />
        <MyGreedMyRules
          $additional
          Comp1={<div></div>}
          Comp2={<div ><WeekBar /></div>}
        />
        <WeekOfHours
          week={currentWeek}
          savedEvents={savedEvents}
        />
        <Footer />
      </StyledCalendarWrapper>
    </>
  );
}

export default App;
