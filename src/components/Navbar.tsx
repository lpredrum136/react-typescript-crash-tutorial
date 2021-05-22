import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import WelcomeMessage from './WelcomeMessage'
import { Box, Chip } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1
		},
		title: {
			flexGrow: 1
		}
	})
)

const Navbar = () => {
	const classes = useStyles()

	return (
		<AppBar position='static'>
			<Toolbar>
				<Box
					display='flex'
					justifyContent='space-between'
					alignItems='center'
					width={1}
					py={2}
				>
					<Typography variant='h6'>React TypeScript</Typography>

					<Box textAlign='center'>
						<WelcomeMessage username='henry' position='Full-stack Developer' />
						<Chip label='Last time working on this project: ' />
					</Box>

					<Button variant='contained'>Login</Button>
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
