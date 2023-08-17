"use client"

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import MyProfile from '@components/Profile'

const Profile = () => {

  const {data: session} = useSession();
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
  const fetchPosts = async () => {
    const response = await fetch(`/api/users/${session?.user.id}/posts`);
    const data = await response.json();

    setAllPosts(data);
  };


    if (session?.user.id) fetchPosts();
}, []);

  const handleEdit = () => {

  }

  const handleDelete = async () => {
    
  }

  return (
    <Profile 
      name="My"
      desc="Welcome to my profile page"
      data={allPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}

export default MyProfile