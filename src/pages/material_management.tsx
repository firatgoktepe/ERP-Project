import CustomHead from '@/components/common/Head/Head'
import Layout from '@/layout/Layout/Layout'
import Footer from '@/layout/Footer/Footer'
import Box from '@mui/material/Box'

export default function MaterialManagement(): JSX.Element {
  return (
    <>
      <CustomHead title="Malzeme Yönetimi" />
      <Box>
        <Layout />
        <div>Twitter</div>
        <Footer />
      </Box>
    </>
  )
}
