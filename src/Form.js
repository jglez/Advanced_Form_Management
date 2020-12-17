import { useState } from 'react'

// Default values for the form
const initialFormValues = {
  name: '',
  email: '',
  password: '',
  ToS: false
}

// Simulated database
const usersList = [
  { name: 'Elon Musk', email: 'starman@spacex.com', password: 'occupy mars' },
  { name: 'George Hotz', email: 'geohot@commaai.com', password: 'cya_tesla' },
  { name: 'John Carmack', email: 'jcarmack@id.com', password: 'doom1234' }
]

export default function Form() {
  const [users, setUsers] = useState(usersList)
  const [formValues, setFormValues] = useState(initialFormValues)

  return (
    <>
      <h2>Members:</h2>

      {users.map((user, index) => {
        return (
          <div key={index}>
            <b>Name:</b> {user.name} - <b>Email:</b> {user.email}
          </div>
        )

      })}

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