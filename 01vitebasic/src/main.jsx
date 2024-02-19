import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp (){
    return(
        <h1>custom react!</h1>
    )
}

// const reactElement = {
//     type: 'a',
//     props: {
//       href: "http://google.com",
//       target: "_blank"
//     },
//     children: "click me to visit google"
//   }

  const anotherElement = (
    <a href="http://google.com" target="_blank">google visit</a>
  )

  const anotherUser = "dgf";

  const reactElement = React.createElement(
    'a',
    {href: "http://google.com",target:"_blank"},
    "click me to visit google",
    anotherUser
  )
  

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)
