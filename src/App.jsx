// import { useState } from 'react'
import { NavHeader } from './components/navbar'
import { Post } from './components/post'
import './App.css';
import { UserContex } from './context/UserContext';

function App() {
  const user = {
    username: 'Adays',
    followers: 500
  };

  return (
    <>
      <UserContex.Provider value={user}>
        <NavHeader />
        <Post></Post>
      </UserContex.Provider>
    </>
  )
}

export default App
