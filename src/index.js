import React from 'react'
import { render } from 'react-dom'
import Form from './Form'

function App() {
  return (
    <>
      <h1>User Onboarding</h1>
      <Form />
    </>
  )
}

render(
  <App />,
  document.querySelector('#root')
)