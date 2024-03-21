import React, { useEffect, useState } from 'react'

const ContactPage = () => {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')
  const fetchUsers = async () => {
    const response = await fetch('https://randomuser.me/api/?results=30')
    const data = await response.json()
    setUsers(data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }


  return (
    <div>
      <h1>Users Page</h1>
      <p>Welcome to the Users Page</p>
      <br />
      <div className="searchArea">
        <input type="text" placeholder='Search...' className='userListSearch' onChange={handleSearch} value={search} />
      </div>
      <ul className='userList'>
        {users.results?.filter((user) => {
          return (user.login.username.toLowerCase().includes(search.toLowerCase()) || user.name.first.toLowerCase().includes(search.toLowerCase()) || user.name.last.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase()) || user.location.country.toLowerCase().includes(search.toLowerCase()))
        }).map((user, index) => {
          return (
            <li className='user-card' key={index}>
              {user.picture.thumbnail && (
                <img src={user.picture.thumbnail} alt={user.name.first} /> // if you want more than resulation change thumbnail to medium or large
                )}
                <h3 className='username'>{user.login.username}</h3>
                <p className='fullname'>{user.name.first} {user.name.last}</p>
                <a href={`mailto:${user.email}`} className='email'>{user.email}</a>
                <p className='location'>{user.location.country}</p>
              </li>
              )
        })}
      </ul>
    </div>
  )
}

export default ContactPage