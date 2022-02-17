import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {getCategories} from './features/categoryReduser'


function App() {
const dispatch = useDispatch()
  useEffect(()=>{
dispatch(getCategories())
  },[dispatch])
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
