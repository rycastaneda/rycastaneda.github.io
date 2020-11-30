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
      <div className={styles.container}>
        <ParkingSettings onSaveSettings={setSettings} />
        {Object.keys(settings).length ?
          <div>
            <Grid slots={settings.slots} entrances={settings.entrances} rates={rates} onParkCar={handleParkCar}></Grid>
            <hr />
            <button onClick={handleAddMinutes}>Add 30 minutes</button>
            <button onClick={handleAddDay}>Add 24 hours</button>
            <button onClick={() => refreshToggle(!refresh)}>Refresh</button>
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
