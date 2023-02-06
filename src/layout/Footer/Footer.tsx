import React, { ReactElement } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export const Footer: React.FC = (): ReactElement => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        backgroundColor: 'primary.dark',
        paddingTop: '1rem',
        paddingBottom: '1rem',
        color: 'white',
        [theme.breakpoints.up('md')]: {
          position: 'absolute',
        },
        bottom: 0,
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h5">Libre Consulting</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              {`${new Date().getFullYear()} | Destek | İletişim | Gizlilik`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
