import React, { useState } from "react"
import Layout from '../layouts'
import ParkingSettings from '../components/Parking/ParkingSettings'
import Grid from '../components/Parking/Grid'
import { graphql } from 'gatsby'
export default function Parking({ data }) {
  const [settings, setSettings] = useState({})

  console.log('settings', settings);
  const handleParkCar = (slotId, taken) => {
    let slots = settings.slots.map(slot => {
      if (slot.id === slotId) {
        slot.taken = taken
      }
      return slot
    })

    setSettings({ ...settings, slots })
  }

  return (
    <Layout data={data.basic.value}>
      <ParkingSettings onSaveSettings={setSettings} />
      {Object.keys(settings).length ?
        <Grid slots={settings.slots} onParkCar={handleParkCar}></Grid> : null
      }
    </Layout>
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
