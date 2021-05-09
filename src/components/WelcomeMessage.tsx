interface WelcomeMessageProps {
	username: string
	position:
		| 'Back-end Developer'
		| 'Front-end Developer'
		| 'Full-stack Developer'
	country?: string
}

const WelcomeMessage = ({
	username,
	position,
	country = 'Vietnam'
}: WelcomeMessageProps) => {
	return (
		<p>
			Welcome {username} - {position} from {country}
		</p>
	)
}

export default WelcomeMessage
