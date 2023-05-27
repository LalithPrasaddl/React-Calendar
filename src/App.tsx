import { useState } from 'react';

import ContentView from './components/Content/Content';
import ContentHelperView from './components/Content/ContentHelper';

function App() {
  const [view, setView] = useState<View>('week');
  return (
    <>
      <ContentHelperView view={view} updateView={(key: View) => setView(key)} />
      <ContentView view={view} />
    </>
  )
}

export default App
