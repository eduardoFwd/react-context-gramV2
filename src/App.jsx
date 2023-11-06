// import { useState } from 'react'
import { NavHeader } from './components/navbar'
import { Post } from './components/post'
import './App.css';
import { UserContex } from './context/UserContext';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <UserContex.Provider value={{username: 'Jordy'}}>
        <NavHeader />
        <Post user={{username: 'Jordy'}}></Post>
      </UserContex.Provider>
    </>
  )
}

export default App
