import CustomHead from '@/components/common/Head/Head'
import Layout from '@/layout/Layout/Layout'
import Footer from '@/layout/Footer/Footer'
import Box from '@mui/material/Box'

export default function ProjectManagement(): JSX.Element {
  return (
    <>
      <CustomHead title="Proje Yönetimi" />
      <Box>
        <Layout />
        <div>Projects</div>
        <Footer />
      </Box>
    </>
  )
}
