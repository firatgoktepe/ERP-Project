import React from 'react'
import { Box, Container, Grid, Typography, Link } from '@mui/material'

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        backgroundColor: 'primary.dark',
        paddingTop: '1rem',
        paddingBottom: '1rem',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            Created with &#10084; by{' '}
            <Link
              href="https://libreconsulting.org/"
              target="_blank"
              color="inherit"
              underline="hover"
            >
              Libre Consulting
            </Link>
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
