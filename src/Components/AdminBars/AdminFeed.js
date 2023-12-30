import React from 'react'
import "./AdminFeed.css"
import Share from '../Share/Share'
import Posts from '../Posts/Posts'


const AdminFeed = () => {
  return (
    <div className='AdminFeed'>
        <div className='AdminFeedWrapper'>
          <Share/>
          <Posts/>
        </div>
      </div>
  )
}

export default AdminFeed