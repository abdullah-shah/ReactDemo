import React from 'react'
import PropTypes from 'prop-types'

function UserList({users}) {
    console.log(users);
  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <p>Name: {user.firstName}</p>
          <p>Age: {user.age}</p>
        </div>
      ))}
    </div>
  )
}


export default UserList;
