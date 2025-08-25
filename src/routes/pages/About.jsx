import { useState } from 'react'

const user1 = { name: 'Neo' }
const user2 = new Object({ name: 'Neo' })
console.log(user1 instanceof Object) // true
console.log(user2 instanceof Object) // true

const userOrigin = {
  name: 'Neo',
  age: 22,
  contact: {
    address: {
      emails: ['neo@gmail.com', 'thesecon@gmail.com']
    }
  }
}

export default function About() {
  const [user, setUser] = useState(userOrigin)

  function setFirstEmail(email) {
    setUser({
      ...user,
      contact: {
        address: {
          emails: [email, user.contact.address.emails[1]]
        }
      }
    })
  }

  console.log(user === userOrigin) // false

  return <h1>About Page!</h1>
}
