import { weekDays } from "../../helpers/utils";
import MonthHelperView from "../Month/MonthHelper";
import WeekHelperView from "../Week/WeekHelper";

function ContentHelperView({
  view,
  currDate,
  updateView,
  updateDate
}: {
  view: View;
  currDate: CurrDate;
  updateView: Function;
  updateDate: Function;
}) {
  const tabs = [{
    title: 'Day',
    key: 'day'
  }, {
    title: 'Week',
    key: 'week'
  }, {
    title: 'Month',
    key: 'month'
  }, {
    title: 'Year',
    key: 'year'
  }]
  const date = new Date([
    currDate.month + 1,
    currDate.date,
    currDate.year].join('/')).getDay() || 0
  return (
    <div className="content-helper-view">
      <div className="view-toggle-wrapper">
        <div></div>
        <div className="tabs-wrapper">
          {
            tabs.map((tab) => {
              const selected = tab.key === view;
              return (
                <button
                  key={`tab_${tab.key}`}
                  className={selected ? 'selected' : ''}
                  onClick={()=> updateView(tab.key)}>
                  {tab.title}
                </button>
              )
            })
          }
        </div>
        <div></div>
      </div>
      <div className="month-today-wrapper">
        <div>
          {
            view === 'day' &&
            <span className="month">{currDate.date}</span>
          }
          {
            view !== 'year' &&
            <span className="month">{currDate.monthText}</span>
          }
          <span className="year">{currDate.year}</span>
        </div>
        <div className="today-wrapper">
          <button onClick={() => updateDate('prev')}>
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </button>
          <button onClick={() => updateDate('today')}>
            Today
          </button>
          <button onClick={() => updateDate('next')}>
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </button>
        </div>
      </div>
      {
        view === 'day' && (
          <div className="content-today-wrapper">{weekDays[date].fullName}</div>
        )
      }
      {
        view === 'month' && <MonthHelperView />
      }
      {
        view === 'week' && <WeekHelperView currDate={currDate} />
      }
    </div>
  );

}

export default ContentHelperView
