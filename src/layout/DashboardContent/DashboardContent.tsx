import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ActionAreaCard from '@/components/common/Card/ActionAreaCard'
import { MODULE_LIST_ITEMS } from '@/constants/module-items'
import { styled } from '@mui/material/styles'

const HeaderBox = styled(Box)(({ theme }) => ({
  height: 150,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 100,
  marginBottom: 50,
  [theme.breakpoints.down('md')]: {
    marginLeft: 15,
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: 5,
  },
  borderRadius: '10px',
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    background: theme.palette.primary.main,
    opacity: [0.9, 0.8, 0.7],
  },
}))

const CardBox = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
    height: '20%',
  },
  gap: 10,
  marginTop: 10,
  marginBottom: 50,
  marginLeft: 100,
  marginRight: 50,
}))

const DashboardContent: React.FC = (): JSX.Element => {
  return (
    <>
      <HeaderBox>
        <Typography variant="h4" sx={{ margin: '0 auto' }}>
          Üretim Yönetimi ve Planlama Programı
        </Typography>
        <Typography variant="h6" sx={{ margin: '0 auto' }}>
          Burada ilgili modül ve işlem menülerini bulabilirsiniz.
        </Typography>
      </HeaderBox>
      <CardBox>
        {MODULE_LIST_ITEMS.map(({ route, image, name }, id) => (
          <ActionAreaCard route={route} image={image} name={name} key={id} />
        ))}
      </CardBox>
    </>
  )
}

export default DashboardContent
