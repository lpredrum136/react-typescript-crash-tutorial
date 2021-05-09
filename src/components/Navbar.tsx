import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

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
				<Typography variant='h6' className={classes.title}>
					React TypeScript
				</Typography>
				<Button color='inherit'>Login</Button>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
