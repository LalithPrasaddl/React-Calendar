import MonthHelperView from "../Month/MonthHelper";
import WeekHelperView from "../Week/WeekHelper";

function ContentHelperView({
  view,
  updateView
}: {
  view: View;
  updateView: Function;
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
          <span className="month">May</span>
          <span className="year">2023</span>
        </div>
        <div className="today-wrapper">
          <button>
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </button>
          <button>
            Today
          </button>
          <button>
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </button>
        </div>
      </div>
      {
        view === 'month' && <MonthHelperView />
      }
      {
        view === 'week' && <WeekHelperView />
      }
    </div>
  );

}

export default ContentHelperView
