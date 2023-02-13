import CustomHead from '@/components/common/Head/Head'
import Layout from '@/layout/Layout/Layout'
import Footer from '@/layout/Footer/Footer'
import Box from '@mui/material/Box'

export default function ProductionManagement(): JSX.Element {
  return (
    <>
      <CustomHead title="Üretim Yönetimi" />
      <Box>
        <Layout />
        <div>Devto</div>
        <Footer />
      </Box>
    </>
  )
}
