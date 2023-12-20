import { useState, useEffect } from 'react'

function getStorageValue(key, defaultValue) {
	// getting stored value
	const saved = localStorage.getItem(key)
	try {
		const initial = JSON.parse(saved)
		return initial || defaultValue
	} catch (error) {
		// Handle parsing error, e.g., log the error and return the defaultValue
		console.error('Error parsing stored value:', error)
		return defaultValue
	}
}


export const useLocalStorage = (key, defaultValue) => {
	const [value, setValue] = useState(() => {
		return getStorageValue(key, defaultValue)
	})

	useEffect(() => {
		// storing input name
		localStorage.setItem(key, JSON.stringify(value))
	}, [key, value])

	return [value, setValue]
}
