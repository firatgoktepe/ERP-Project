import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ActionAreaCard from '@/components/common/Card/ActionAreaCard'
import { MODULE_LIST_ITEMS } from '@/constants/module-items'

const DashboardContent: React.FC = (): JSX.Element => {
  return (
    <>
      <Box
        sx={{
          width: '80%',
          height: 150,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
          marginLeft: 25,
          borderRadius: '10px',
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Typography variant="h4" sx={{ margin: '0 auto' }}>
          Üretim Yönetimi ve Planlama Programı
        </Typography>
        <Typography variant="h6" sx={{ margin: '0 auto' }}>
          Burada ilgili modül ve işlem menülerini bulabilirsiniz.
        </Typography>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: 500,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          gap: 1,
          marginTop: 10,
        }}
      >
        {MODULE_LIST_ITEMS.map(({ route, image, name }, id) => (
          <ActionAreaCard route={route} image={image} name={name} key={id} />
        ))}
      </Box>
    </>
  )
}

export default DashboardContent
