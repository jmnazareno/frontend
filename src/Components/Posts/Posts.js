import { MoreVert } from '@mui/icons-material'
import React from 'react'
import './Posts.css'



const Posts = () => {
  return (
    <div className='Posts'>
        <div className='PostTop'></div>
            <div className='PostTopLeft'>
            <img className='PostProfileImg' src='/Assets/person/1.jpg' alt=''/>
                <span className='PostUsername'>Something</span>
                <span className="PostDate">5mins ago</span>
            </div>
            <div className='PostTopRight'>
                <MoreVert/>
            </div>
        <div className='PostCenter'>
            <span className='PostText'>Hey! It's my first post :) </span>
            <img className="PostImg" src='Assets/posts/1.jpg' alt=''/>
        </div>
        <div className='PostBottom'>
            <div className='PostBottomLeft'>
                <img className='LikeIcon' src='Assets/like,png' alt=''/>
                <img className='LikeIcon' src='Assets/heart,png' alt=''/>
                <span className='PostLikeCounter'>32 person people liked it</span>
            </div>
            <div className='PostBottomRight'>
                <span className='PostCommentText'>9 comments</span>
            </div>
        </div>

    </div>
  )
}

export default Posts