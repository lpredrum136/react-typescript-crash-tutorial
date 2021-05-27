import { Box, Drawer, Typography } from '@material-ui/core'
import { KeyboardEvent, MouseEvent, useState } from 'react'

const MovieDrawer = () => {
	// state
	const [open, setOpen] = useState(true)

	const closeDrawer = (event: KeyboardEvent | MouseEvent) => {
		setOpen(false)
	}

	return (
		<Drawer
			anchor='left'
			open={open}
			onClose={closeDrawer}
			className='movie-drawer'
		>
			<Box width='500px'>
				<Typography variant='h2'>Hello</Typography>
			</Box>
		</Drawer>
	)
}

export default MovieDrawer
