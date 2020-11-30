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
		console.log('slots', slots);
		setSettings({ ...settings, entrances: value, slots })
	}

	const handleDistanceInput = (e, slot, entrance) => {
		const { value } = e.target;
		// let validDistanceOnEntrance = true
		// settings.slots.map(slotChecker => {
		// 	console.log('slotChecker, entrance', slotChecker, entrance);
		// 	if (slotChecker[entrance] === +value) {
		// 		validDistanceOnEntrance = false
		// 	}
		// })

		// if (!validDistanceOnEntrance) {
		// 	return setErrors(['Entrance distance already entered'])
		// } else {
		// 	setErrors([])
		// }

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
				<div key={ctr} className="flex items-center text-sm lg:space-x-4">
					<label className="w-24" htmlFor="">Entrance {ctr + 1}</label>
					<input type="number"
						min="1"
						defaultValue={settings.slots[slotctr][ctr]}
						placeholder="Enter distance from entrance"
						className="mt-1 focus:ring-indigo-500 m-1 p-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
				<div className="flex items-center text-sm space-x-4">
					<label className="w-24" htmlFor="">Size</label>
					<select name=""
						className="mt-1 focus:ring-indigo-500 m-1 p-2 w-full focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
						defaultValue={settings.slots[slotctr].size} onChange={e => handleSizeInput(e, slotctr)}>
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
			<div className={styles.formInput}>
				{errorList}
			</div>
			<div className="flex items-center text-sm space-x-4 mx-auto mb-4">
				<label className="w-24" htmlFor="">Entrances</label>
				<input type="number"
					required min="3"
					className="mt-1 focus:ring-indigo-500 m-1 p-2 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md"
					defaultValue={settings.entrances || 3}
					placeholder="Enter number of entrances"
					onChange={handleEntranceInput} />
			</div>
			<h1>
				Slot Map
					</h1>
			<div className={styles.formSettings}>
				{slotForms}
			</div>
			<div className="mx-auto mt-5 flex items-center text-sm space-x-4">
				<select defaultValue={selectedSize}
					className="inline mt-1 focus:ring-indigo-500 m-1 p-2 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md"
					onChange={e => handleAddSizeInput(e)}>
					<option value="small">
						Small
						</option>
					<option value="medium">
						Medium
						</option>
					<option value="large">
						Large
						</option>
				</select>
				<button className="inline justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-text hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="button" style={{ display: "inline-block" }} onClick={handleAddSlotClick}>Add More</button>
			</div>
			<div>
				{JSON.stringify(settings)}
				<button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-text hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" style={{ marginTop: '1rem' }} type="submit" disabled={errors.length}>
					Save Settings
				</button>
			</div>
		</form >
	) : (
			<div>
				<button
					className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-text hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" style={{ marginTop: '1rem' }} type="submit" onClick={handleToggleClick}>Show Settings</button>
			</div>
		)
};

export default ParkingSettings;
