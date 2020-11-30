import React, { useState } from "react"
import Layout from '../layouts'
import ParkingSettings from '../components/Parking/ParkingSettings'
import Grid from '../components/Parking/Grid'
import { graphql } from 'gatsby'
import sub from 'date-fns/sub'
import styles from '../css/parking.module.css'

export default function Parking({ data }) {
  const [settings, setSettings] = useState({})
  const [rates] = useState({
    'small': 20,
    'medium': 60,
    'large': 100,
    'penalty': 5000
  })
  console.log('settings', settings);
  const [refresh, refreshToggle] = useState(true)

  const handleParkCar = (slotId, taken, car) => {
    let slots = settings.slots.map(slot => {
      if (slot.id === slotId) {
        slot.taken = taken
        if (taken) {
          slot.carDetails = car
        }
      }
      return slot
    })

    setSettings({ ...settings, slots })
  }

  const handleAddMinutes = () => {
    let slots = settings.slots.map(slot => {
      if (slot.carDetails) {
        slot.carDetails.started = +sub(new Date(slot.carDetails.started), { minutes: 30 })
      }
      return slot
    })
    setSettings({ ...settings, slots })
  }

  const handleAddDay = () => {
    let slots = settings.slots.map(slot => {
      if (slot.carDetails) {
        slot.carDetails.started = +sub(new Date(slot.carDetails.started), { hours: 24 })
      }
      return slot
    })
    setSettings({ ...settings, slots })
  }


  return (
    <Layout data={data.basic.value}>
      <div className="container h-screen mx-auto fullscreen pt-24">
        <ParkingSettings onSaveSettings={setSettings} />
        {Object.keys(settings).length ?
          <div>
            <Grid slots={settings.slots} entrances={settings.entrances} rates={rates} onParkCar={handleParkCar}></Grid>
            <div className="flex items-center mx-auto space-x-6">
              <button className="inline justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-text hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={handleAddMinutes}>Add 30 minutes</button>
              <button className="inline justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-text hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={handleAddDay}>Add 24 hours</button>
              <button className="inline justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-text hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => refreshToggle(!refresh)}>Refresh</button>
            </div>
          </div>
          : null
        }

      </div>
    </Layout >
  )
}

export const query = graphql`
query  {
  basic {
    id
    value {
      profiles {
        network
        username
        url
      }
      email
      headline
      label
      name
      phone
      picture
      region
      summary
      username
      website
      yearsOfExperience
    }
  }
}
`
