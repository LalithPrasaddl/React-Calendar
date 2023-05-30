import { useState } from 'react';

import ContentView from './components/Content/Content';
import ContentHelperView from './components/Content/ContentHelper';
import { getPrevNextDate, getTodaysDate } from './helpers/utils';

function App() {
  const [view, setView] = useState<View>('month');
  const [currDate, setCurrDate] = useState<CurrDate>(getTodaysDate())
  function updateDate(type: 'today' | 'prev' | 'next') {
    if(type === 'today') {
      setCurrDate(getTodaysDate())
    } else if(['prev', 'next'].indexOf(type) > -1) {
      setCurrDate(getPrevNextDate({
        view,
        currDate,
        mode: type
      }))
    }
  }
  return (
    <>
      <div className="content-helper">
        <ContentHelperView view={view} updateView={(key: View) => setView(key)} currDate={currDate} updateDate={updateDate} />
      </div>
      <div className="content">
        <ContentView view={view} currDate={currDate} />
      </div>
    </>
  )
}

export default App
