import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import { styled } from '@mui/material/styles'

const BackdropSpinner = styled(Backdrop)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  color: '#fff',
}))

interface BackdropSpinnerProps {
  open: boolean
}

const Spinner = ({ open }: BackdropSpinnerProps): JSX.Element => {
  return (
    <BackdropSpinner open={open}>
      <CircularProgress color="inherit" />
    </BackdropSpinner>
  )
}
export default Spinner
