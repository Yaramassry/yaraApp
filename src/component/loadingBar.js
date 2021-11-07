import React, { useRef } from 'react'
import LoadingBar from 'react-top-loading-bar'
import axios from 'axios';

var numberOfAjaxCAllPending = 0;

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    numberOfAjaxCAllPending++;
    // show loader
    return config;
}, function (error) {
    return Promise.reject(error);
});
const App = () => {
  const ref = useRef(null)
 
  return (
    <div>
      <LoadingBar color='#f11946' ref={ref} />
     { axios.interceptors.request.use(function (config) {
    numberOfAjaxCAllPending++;
    ref.current.continuousStart();
    return config;
}, function (error) {
    return Promise.reject(error);
})
}

{axios.interceptors.response.use(function (response) {
    numberOfAjaxCAllPending--;
    console.log("------------  Ajax pending", numberOfAjaxCAllPending);

  
    return response;
}, function (error) {
    numberOfAjaxCAllPending--;
    if (numberOfAjaxCAllPending == 0) {
        ref.current.staticStart()
    }
    return Promise.reject(error);
})}


{
    
}

      <button onClick={() => ref.current.continuousStart()}>
        Start Continuous Loading Bar
      </button>
      <button onClick={() => ref.current.staticStart()}>
        Start Static Loading Bar
      </button>
      <button onClick={() => ref.current.complete()}>Complete</button>
      <br />
    </div>
  )
}
 
export default App
