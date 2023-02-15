import CustomHead from '@/components/common/Head/Head'
import Layout from '@/layout/Layout/Layout'
import Footer from '@/layout/Footer/Footer'
import Box from '@mui/material/Box'
import DashboardContent from '@/layout/DashboardContent/DashboardContent'

export default function Dashboard(): JSX.Element {
  return (
    <>
      <CustomHead title="Kontrol Paneli" />
      <Box>
        <Layout />
        <DashboardContent />
        <Footer />
      </Box>
    </>
  )
}
