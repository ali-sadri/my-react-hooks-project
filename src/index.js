import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
/* 
Some facts and rules about hooks:
- hooks introduced in React so that state and life cycle methods can be
  used in functional components. hooks are functions that their name start
  with 'use'. The react built-in hooks are called by react functional components or by
  custom hooks. hooks must not be called inside loops, conditions or nested functions, 
  instead they should use always be used at the top level of react functional components or
  custome hooks. Although hooks and functional components are both functions, hooks are not
  functional components. Functional components have specific signature with one single argument of 'props', 
  whereas hooks are functions without specific signature. 
  custom hooks are functions that use built in hooks and are used to share stateful logic between components


  react-router-dom also provides following hooks:
  useHistory(), useLocation(), useParams(),...
  Refer to https://reactrouter.com/web/api/Hooks

*/
/* Simple example of using hooks with react router
   following hooks have been used in this example:
   - useState
   - useEffect
   - useReducer
   - useContext
   - useCallback
   - useHistory (provided by react-router-dom)
   */

/* useRef() and useMemo() are also among useful react hooks.... */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
