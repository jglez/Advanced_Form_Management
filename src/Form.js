import { useState } from 'react'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  ToS: false
}

export default function Form() {

  return (
    <>
      <form>
        <label>Name&nbsp;
          <input
            name='name'
            type='text'
          />
        </label>

        <label>Email&nbsp;
            <input
            name='email'
            type='email'
          />
        </label>

        <label>Password&nbsp;
            <input
            name='password'
            type='password'
          />
        </label>

        <label>Terms of Service&nbsp;
            <input
            name='tos'
            type='checkbox'
          />
        </label>

        <button>Submit</button>

      </form>
    </>
  )
}