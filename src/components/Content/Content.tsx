import MonthView from "../Month/Month";
import WeekView from "../Week/Week";

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
  return null;
}

export default ContentView
