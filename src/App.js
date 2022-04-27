import React, { useState } from 'react'
import Compo1 from './hooks/Compo1';
import TestUseEffect from './hooks/useEffectHooks';

function App() {
  const [showComp, setShowcompo] = useState(true)
  return (
    <div className="App">
     <Compo1/>

     {showComp ? <TestUseEffect/>: null}
     <button onClick={()=>setShowcompo(false)}>Component Will Unmount</button>
     
    </div>
  );
}

export default App;
