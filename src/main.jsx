import React from 'react';
import ReactDOM from 'react-dom/client';
// import { FormWithCustomHook } from './01-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
import { Layout } from './05-useLayoutEffect/Layout';
// import { HooksApp } from './HooksApp';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
      <Layout />
  // </React.StrictMode>
)
