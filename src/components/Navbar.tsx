import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
// import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import WelcomeMessage from './WelcomeMessage'
import {
	Box,
	Chip,
	Select,
	MenuItem,
	FormControl
	// InputLabel
} from '@material-ui/core'
import { useContext, useState, ChangeEvent } from 'react'
import {
	ProgressContext,
	ProgressContextDefault
} from '../contexts/ProgressContext'

// const useStyles = makeStyles((theme: Theme) =>
// 	createStyles({
// 		root: {
// 			flexGrow: 1
// 		},
// 		title: {
// 			flexGrow: 1
// 		},
// 		position: {
// 			color: 'white'
// 		}
// 	})
// )

const Navbar = () => {
	// const classes = useStyles()

	// useState
	const [position, setPosition] = useState<string>('Full-stack Developer')

	const onPositionChange = (event: ChangeEvent<{ value: unknown }>) => {
		setPosition(event.target.value as string)
	}

	// context
	const { lastTime, status } = useContext(
		ProgressContext
	) as ProgressContextDefault

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
						<WelcomeMessage username='henry' position={position} />
						<Chip
							label={`Last time working on this project: ${lastTime} - Status: ${status}`}
						/>
						<Box mt={1}>
							<FormControl>
								<Select
									value={position}
									className='position-select'
									onChange={onPositionChange}
								>
									<MenuItem value='Full-stack Developer'>
										Full-stack Developer
									</MenuItem>
									<MenuItem value='Front-end Developer'>
										Front-end Developer
									</MenuItem>
									<MenuItem value='Back-end Developer'>
										Back-end Developer
									</MenuItem>
								</Select>
							</FormControl>
						</Box>
					</Box>

					<Button variant='contained'>Login</Button>
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
