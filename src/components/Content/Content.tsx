import MonthView from "../Month/Month";
import WeekView from "../Week/Week";
import YearView from "../Year/Year";
import DayView from "../Day/Day";

import './style.css';

function ContentView({
  view,
  currDate
}: {
  view: View,
  currDate: CurrDate
}) {
  if(view === 'month') {
    return <MonthView currDate={currDate} />;
  }
  if(view === 'week') {
    return <WeekView currDate={currDate} />
  }
  if(view === 'year') {
    return <YearView currDate={currDate} />
  }
  if(view === 'day') {
    return <DayView />
  }
  return null;
}

export default ContentView
