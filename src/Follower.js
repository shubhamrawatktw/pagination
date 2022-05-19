import React from 'react'

const Follower = ({ avatar_url, html_url, login }) => {
  return <article className='card'>
    <img src={avatar_url} alt="user" />
    <h4>{login}</h4>
    <a href={html_url}>view profile</a>
  </article>
}

export default Follower
