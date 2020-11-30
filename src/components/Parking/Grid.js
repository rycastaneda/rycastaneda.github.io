import React, { useState } from 'react';
import styles from '../../css/parking.module.css'

const Grid = ({ slots, onParkCar }) => {
    console.log('slots', slots);
    const [selectedSize, setSelectedSize] = useState('small')
    const [message, setMessage] = useState('')
    let rows = ['small', 'medium', 'large'].map(size => {
        let sizeSlots = slots.filter(slot => slot.size === size).map((slot, index) => {
            let distances = Object.keys(slot)
                .filter(slot => !['taken', 'size', 'id'].includes(slot))
                .map((entrance) => {
                    let entranceNumber = (+entrance) + 1;
                    return (<p key={`size-${size}entrance-${entrance}`}>
                        {`From entrance ${entranceNumber}: ${slot[entrance]}`}
                    </p>)
                })
            return (
                <div key={`slot-${index}`} className={`${styles.slot} ${slot.taken ? styles.taken : ''}`}>
                    { distances}
                    {slot.taken ? <button onClick={() => onParkCar(slot.id, false)}>Clear Spot</button> : ''}
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

    const handleSizeInput = (e, slot) => {
        const { value } = e.target;
        setSelectedSize(value)
    }

    const handlePark = () => {
        let availableSlot = false

        let validSlotsForSize = slots.filter(slot => {
            console.log('slot filtering', slot);
            if (slot.taken) {
                return false
            }

            let sizeMap = {
                'small': 0,
                'medium': 1,
                'large': 2
            }

            return sizeMap[slot.size] >= sizeMap[selectedSize]
        }).map(slot => {
            console.log('slot', slot);
            let distances = Object.keys(slot)
                .filter(key => !['taken', 'size', 'id'].includes(key))
                .map(entrance => slot[entrance])

            return { distances, id: slot.id }
        })

        console.log('validSlotsForSize', validSlotsForSize);

        if (!validSlotsForSize.length) {
            return setMessage('No space available')
        }

        var nearest = 0
        var nearestParkingId = ''
        validSlotsForSize.map(slot => {
            let nearestSlot = Math.min(...slot.distances)
            console.log('nearestSlot', nearestSlot);
            if (nearest < nearestSlot) {
                nearest = nearestSlot
                nearestParkingId = slot.id
                console.log('slot', slot);
            }
        })
        console.log('nearestParkingId', nearestParkingId);
        return onParkCar(nearestParkingId, true)
    }


    return (
        <div className={styles.grid}>
            {rows}

            <select defaultValue={selectedSize} style={{ display: "inline-block" }} name="" onChange={e => handleSizeInput(e)}>
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
            <button type="button" style={{ display: "inline-block" }} onClick={handlePark}>Park this Car</button>
            {message ? <p>{message}</p> : ''}
        </div>
    );
};

export default Grid;