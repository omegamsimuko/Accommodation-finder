import React from 'react'
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';
import Search from '../components/Search';
import Navbar from '../components/Navbar';
import HostelUp from '../components/Hostel';

const Home = () => {
  return (
    <div className= 'home'>
        <div className="container">
            <Sidebar/>
            <Chat/>
            <Search/>
            <Navbar/>
            
        </div>
    </div>
  )
}

export default Home;