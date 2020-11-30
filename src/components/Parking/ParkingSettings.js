import React, { useState, } from 'react';
import range from 'lodash/range';

import styles from '../../css/parking.module.css'
const ParkingSettings = ({ onSaveSettings }) => {
	const [settings, setSettings] = useState({
		entrances: 3,
		slots: [
			{ 0: 1, 1: 4, 2: 5, size: 'small', taken: false, id: 1 },
			{
				0: 3, 1: 2, 2: 3, size: 'large', taken: false, id: 2
			},
			{ 0: 5, 1: 7, 2: 9, size: 'medium', taken: false, id: 3 },
		],
	})
	const [showSettings, toggleSettings] = useState(true)
	const [errors, setErrors] = useState([])
	const [slotCounter, setSlotCounter] = useState(settings.slots.length)
	const [selectedSize, setSelectedSize] = useState('small')

	const handleAddSlotClick = () => {
		setSettings({
			...settings,
			slots: [
				...settings.slots,
				{ size: selectedSize, taken: false, id: slotCounter + 1 }
			]
		});
		setSlotCounter(slotCounter + 1)
	};

	const handleEntranceInput = (e) => {
		const value = +e.target.value
		let slots = settings.slots.map(slot => {
			range(0, value).map(entrance => {
				if (!slot[entrance]) {
					slot[entrance] = 1
				}
			})
			return slot
		})
		setSettings({ ...settings, entrances: value })
	}

	const handleDistanceInput = (e, slot, entrance) => {
		const { value } = e.target;
		setErrors([])
		let validDistanceOnEntrance = true
		settings.slots.map(slotChecker => {
			console.log('slotChecker, entrance', slotChecker, entrance);
			if (slotChecker[entrance] === +value) {
				validDistanceOnEntrance = false
			}
		})

		if (!validDistanceOnEntrance) {
			return setErrors([...errors, 'Entrance distance already entered'])
		}

		let slots = [...settings.slots]
		slots[slot][entrance] = +value
		setSettings({ ...settings, slots })
	}

	const handleSizeInput = (e, slot) => {
		const { value } = e.target;
		let slots = [...settings.slots]
		slots[slot]['size'] = value
		setSettings({ ...settings, slots })
	}

	const handleAddSizeInput = (e) => {
		const { value } = e.target;
		setSelectedSize(value)
	}

	const onSubmit = (e) => {
		e.preventDefault()
		if (!errors.length) {
			onSaveSettings(settings)
			toggleSettings(!showSettings)
		}
	}

	const handleToggleClick = () => {
		toggleSettings(!showSettings)
	}

	let entranceInputs = [], slotForms;

	let ctr = 0

	slotForms = range(0, slotCounter).map(slotctr => {

		entranceInputs = range(ctr, settings.entrances).map((ctr) => {
			return (
				<div key={ctr}>
					<label htmlFor="">Entrance {ctr + 1}</label>
					<input type="number"
						min="1"
						defaultValue={settings.slots[slotctr][ctr] || 1}
						placeholder="Enter distance from entrance"
						required
						onChange={e => handleDistanceInput(e, slotctr, ctr)} />
				</div>
			)
		})

		return (
			<div key={`Slot-${slotctr}`} className={styles.slotForm}>
				<div>
					{entranceInputs}
				</div>
				<label htmlFor="">Size of Slot</label>
				<select name="" defaultValue={settings.slots[slotctr].size} onChange={e => handleSizeInput(e, slotctr)}>
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
			</div>
		)
	})


	ctr++;

	let errorList = (
		<ul className="errors">
			{errors.map((error, i) => {
				return (
					<li key={`error-${i}`} style={{ color: 'red' }}>{error}</li>
				)
			})}
		</ul>
	)

	return showSettings ? (
		<form onSubmit={onSubmit}>

			{errorList}
			<label htmlFor="">Entrances</label>
			<input type="number" required min="3" defaultValue={settings.entrances || 3} placeholder="Enter number of entrances" onChange={handleEntranceInput} />
			{slotForms}
			<select defaultValue={selectedSize} style={{ display: "inline-block" }} name="" onChange={e => handleAddSizeInput(e)}>
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
			<button type="button" style={{ display: "inline-block" }} onClick={handleAddSlotClick}>Add More</button>

			<div>
				<button style={{ marginTop: '1rem' }} type="submit">
					Save Settings
				</button>
			</div>
		</form >
	) : (
			<div>
				<button style={{ marginTop: '1rem' }} type="submit" onClick={handleToggleClick}>Show Settings</button>
			</div>
		)
};

export default ParkingSettings;
