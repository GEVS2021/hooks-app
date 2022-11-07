import React from 'react';
import ReactDOM from 'react-dom/client';
import { MemoHook } from './06-useMemo/MemoHook';
// import { FormWithCustomHook } from './01-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { Memorize } from './06-useMemo/Memorize';
// import { HooksApp } from './HooksApp';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
      <MemoHook />
  // </React.StrictMode>
)
