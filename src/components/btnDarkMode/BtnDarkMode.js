import sun from './../../img/icons/sun.svg'
import moon from './../../img/icons/moon.svg'
import { useEffect, useRef } from 'react'
import { useLocalStorage } from '../../utils/useLocalStorage'
import './BtnDarkMode.css'
import detecDarkMode from '../../utils/detecDarkMode'

const BtnDarkMode = () => {
	const [darkMode, setDarkMode] = useLocalStorage('darkMode', detecDarkMode())

	const btnRef = useRef(null)

	useEffect(() => {
		try {
			if (darkMode === 'dark') {
				document.body.classList.add('dark')
				btnRef.current.classList.add('dark-mode-btn--active')
			} else {
				document.body.classList.remove('dark')
				btnRef.current.classList.remove('dark-mode-btn--active')
			}
		} catch (error) {
			// Handle the error, e.g., log it
			console.error('Error applying dark mode:', error)
		}
	}, [darkMode])

	const toggleDarkMode = () => {
		setDarkMode(currentValue => {
			return currentValue === 'light' ? 'dark' : 'light'
		})
	}

	return (
		<button ref={btnRef} className='dark-mode-btn' onClick={toggleDarkMode}>
			<img src={sun} alt='Light mode' className='dark-mode-btn__icon' />
			<img src={moon} alt='Dark mode' className='dark-mode-btn__icon' />
		</button>
	)
}

export default BtnDarkMode
