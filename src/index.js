import React from 'react'
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset'
import {Kanban} from './Kanban/Kanban'



const App = () => <Kanban/>

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
