import './BtnGitHub.css'
import icon from './../../img/icons/gitHub-black.svg'

const BtnGitHub = ({ link }) => {
	return (
		// eslint-disable-next-line react/jsx-no-target-blank
		<a href={link} target='_blank' className='btn-outline'>
			<img src={icon} alt='' />
			GitHub repo
		</a>
	)
}

export default BtnGitHub
