import React, { useState } from 'react';
import styles from '../../css/parking.module.css'
import range from 'lodash/range';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import differenceInMinutes from 'date-fns/differenceInMinutes'

const Grid = ({ entrances, slots, rates, onParkCar }) => {
    console.log('slots', slots);
    console.log('rates', rates);
    const [car, setCar] = useState({
        plate: '',
        size: 'small',
        started: 0
    })
    const [message, setMessage] = useState('')
    let rows = ['small', 'medium', 'large'].map(size => {
        let sizeSlots = slots.filter(slot => slot.size === size).map((slot, index) => {
            let distances = range(0, entrances)
                .map((entrance) => {
                    let entranceNumber = (+entrance) + 1;
                    return (<p key={`size-${size}entrance-${entrance}`}>
                        {`From entrance ${entranceNumber}: ${slot[entrance]}`}
                    </p>)
                })

            let carSpot;
            if (slot.taken) {
                let hourDifferential = Math.round(differenceInMinutes(new Date(), new Date(slot.carDetails.started)) / 60)
                console.log('hourDifferential', hourDifferential);
                let charge = rates[slot.size]
                if (hourDifferential) {
                    charge *= hourDifferential;
                }

                if (hourDifferential >= 24) {
                    charge = Math.floor(hourDifferential / 24) * rates['penalty']

                    charge += (hourDifferential % 24) * rates[slot.size]
                }

                carSpot = (
                    <div>
                        <h3>{slot.carDetails.plate}</h3>
                        <p>{formatDistanceToNow(new Date(slot.carDetails.started), { addSuffix: true })}</p>
                        <p>
                            Charge: {charge} php
                        </p>
                        <button onClick={() => onParkCar(slot.id, false)}>Clear Spot</button>
                    </div>
                )
            }

            return (
                <div key={`slot-${index}`} className={`${styles.slot} ${slot.taken ? styles.taken : ''}`}>
                    {distances}
                    {carSpot}
                </div >
            )
        })

        return (
            <div key={`size-${size}`} className={styles.sizeRow}>
                {size}
                {sizeSlots}
            </div>
        )
    })

    const handleSizeInput = (e) => {
        const { value } = e.target;
        setCar({ ...car, size: value })
    }

    const handlePlateInput = (e) => {
        const { value } = e.target;
        setCar({ ...car, plate: value })
    }

    const handlePark = (e) => {
        e.preventDefault()
        let validSlotsForSize = slots.filter(slot => {
            if (slot.taken) {
                return false
            }

            let sizeMap = {
                'small': 0,
                'medium': 1,
                'large': 2
            }

            return sizeMap[slot.size] >= sizeMap[car.size]
        }).map(slot => {
            console.log('slot', slot);
            let distances = range(0, entrances).map(entrance => slot[entrance])

            return { distances, id: slot.id }
        })

        console.log('validSlotsForSize', validSlotsForSize);

        if (!validSlotsForSize.length) {
            return setMessage('No space available')
        }

        var nearest = 9999
        var nearestParkingId = ''
        validSlotsForSize.map(slot => {
            let nearestSlot = Math.min(...slot.distances)
            console.log('nearestSlot', nearestSlot);
            if (nearestSlot < nearest) {
                nearest = nearestSlot
                nearestParkingId = slot.id
                console.log('slot', slot);
            }
        })

        console.log('nearestParkingId', nearestParkingId);
        return onParkCar(nearestParkingId, true, { ...car, started: +new Date() })
    }

    return (
        <form onSubmit={handlePark}>
            {rows}
            <input type="text" defaultValue={car.plate} placeholder="Enter plate" onChange={e => handlePlateInput(e)}></input>
            <select defaultValue={car.size} style={{ display: "inline-block" }} name="" onChange={e => handleSizeInput(e)}>
                <option value="small">
                    small
					</option>
                <option value="medium">
                    medium
					</option>
                <option value="large">
                    large
					</option>
            </select>
            <button type="submit" style={{ display: "inline-block" }}>Park this Car</button>
            {message ? <p>{message}</p> : ''}
        </form>

    );
};

export default Grid;