import React from 'react'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

interface IPrimaryButton {
  title: string
  className?: string
}

const PrimaryButton: React.FC<IPrimaryButton> = ({
  title,
  className,
}): JSX.Element => {
  const matches = useMediaQuery('(max-width:600px)')
  return (
    <Typography
      //@ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
      sx={{
        borderRadius: 5,
        border: '10px',
        backgroundColor: '#1976d2',
        color: 'white',
        padding: '10px',
        marginTop: className && '5rem',
        marginLeft: className && '6rem',
        width: className && matches ? '15%' : className ? '20%' : '100%',
        textAlign: className && 'center',
      }}
      gutterBottom
      variant="h6"
      component="div"
      className={className}
    >
      {title}
    </Typography>
  )
}

export default PrimaryButton
