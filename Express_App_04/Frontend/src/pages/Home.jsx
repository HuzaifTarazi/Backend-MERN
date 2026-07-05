import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div className='bg-gray-900 h-screen text-white p-5 flex items-center justify-center'>
      <div className='w-full max-w-2xl bg-gray-800 rounded-lg shadow-md p-6'>
        <h1 className='text-2xl font-semibold mb-4'>Posts</h1>
        <p className='text-gray-300 mb-6'>View the latest posts or create a new one.</p>
        <div className='space-y-3'>
          <Link to={"posts"} className='block p-4 bg-gray-700 rounded hover:bg-gray-600'>
            <h2 className='text-lg font-medium'>Go to Posts</h2>
            <p className='text-sm text-gray-300'>Browse all posts</p>
          </Link>
         
        </div>
      </div>
    </div>
  )
}

export default Home