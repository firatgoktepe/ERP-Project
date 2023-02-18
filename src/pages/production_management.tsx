import CustomHead from '@/components/common/Head/Head'
import Layout from '@/layout/Layout/Layout'
import Footer from '@/layout/Footer/Footer'
import Box from '@mui/material/Box'
import Main from '@/layout/Main/Main'

export default function ProductionManagement(): JSX.Element {
  return (
    <>
      <CustomHead title="Üretim Yönetimi" />
      <Box>
        <Layout />
        <Main />
        <Footer />
      </Box>
    </>
  )
}
