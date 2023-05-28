import MonthView from "../Month/Month";
import WeekView from "../Week/Week";
import YearView from "../Year/Year";

import './style.css';

function ContentView({
  view
}: {
  view: View
}) {
  if(view === 'month') {
    return <MonthView />;
  }
  if(view === 'week') {
    return <WeekView />
  }
  if(view === 'year') {
    return <YearView />
  }
  return null;
}

export default ContentView
