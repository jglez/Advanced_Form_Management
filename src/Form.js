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

  const change = evt => {
    const { name, value } = evt.target
    setFormValues({ ...formValues, [name]: value })
  }

  const submit = evt => {
    evt.preventDefault()

    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password
    }

    setUsers(users.concat(newUser))
    setFormValues(initialFormValues)
  }

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

      <form onSubmit={submit}>
        <label>Name&nbsp;
          <input
            name='name'
            type='text'
            value={formValues.name}
            onChange={change}
          />
        </label>

        <label>Email&nbsp;
            <input
            name='email'
            type='email'
            value={formValues.email}
            onChange={change}
          />
        </label>

        <label>Password&nbsp;
            <input
            name='password'
            type='password'
            value={formValues.password}
            onChange={change}
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