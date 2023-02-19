import React from 'react'
import Typography from '@mui/material/Typography'

interface IPrimaryButton {
  title: string
  className?: string
}

const PrimaryButton: React.FC<IPrimaryButton> = ({
  title,
  className,
}): JSX.Element => {
  return (
    <Typography
      sx={{
        borderRadius: 5,
        border: '10px',
        backgroundColor: '#1976d2',
        color: 'white',
        padding: '10px',
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
