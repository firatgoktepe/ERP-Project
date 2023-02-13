import CustomHead from '@/components/common/Head/Head'
import Layout from '@/layout/Layout/Layout'
import Footer from '@/layout/Footer/Footer'
import Box from '@mui/material/Box'

export default function PurchasingManagement(): JSX.Element {
  return (
    <>
      <CustomHead title="Satın Alma Yönetimi" />
      <Box>
        <Layout />
        <div>Github</div>
        <Footer />
      </Box>
    </>
  )
}
