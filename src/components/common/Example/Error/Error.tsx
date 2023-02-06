import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'
import MoodBadIcon from '@mui/icons-material/MoodBad'

const Error = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  flex: 1,
}))

interface ErrorProps {
  message: string
}

const ErrorComponent = ({ message }: ErrorProps): JSX.Element => {
  return (
    <Error variant="h5">
      <MoodBadIcon fontSize="large" />
      {message}
    </Error>
  )
}

export default ErrorComponent
