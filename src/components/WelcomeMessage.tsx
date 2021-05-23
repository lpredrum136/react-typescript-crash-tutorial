import { Box } from '@material-ui/core'

interface WelcomeMessageProps {
	username: string
	position: string
	country?: string
}

const WelcomeMessage = ({
	username,
	position,
	country = 'Vietnam'
}: WelcomeMessageProps) => {
	return (
		<Box mb={1}>
			Welcome {username} - {position} from {country}
		</Box>
	)
}

export default WelcomeMessage
