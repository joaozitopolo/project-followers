import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import UIkit from 'uikit/dist/js/uikit.min'
import Icons from 'uikit/dist/js/uikit-icons.min'
import 'uikit/dist/css/uikit.min.css'
UIkit.use(Icons)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
