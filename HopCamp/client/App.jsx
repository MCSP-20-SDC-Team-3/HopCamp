import { useState } from 'react'
import "./App.css"
import Camping_Location from "./components/Camping_Location/Camping_Location.jsx";
import Tent_Site_Map from './components/Tent_site/Tent_site_map.jsx';
import Safety_Partners from './components/Safety_Partners/Safety_Partners.jsx';

function App() {

  return (
    <>
    <div className='header'>
      <h1>Header</h1>
    </div>

    <h1>Current Camp Site</h1>
    <h1>Photo Gallery</h1>
    <h1>Current Campsite</h1>
    <h1>Camp Info</h1>
    <h1>Available Sites</h1>
    <div>
      <Tent_Site_Map />
    </div>
    <div>
      <Camping_Location />
    </div>
    <h1>Location</h1>
    <h1>Hosted by</h1>
    <h1>Camping Spots</h1>
    <h1>Camp Safety</h1>
    <div>
      <Safety_Partners />
    </div>
    <h1>Footer</h1>
    </>
  )
}

export default App
