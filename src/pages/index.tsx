import CustomHead from '@/components/common/Head/Head'
import ProjectManagement from './project_management'

export default function Home(): JSX.Element {
  return (
    <>
      <CustomHead title="Dashboard" />
      <ProjectManagement />
    </>
  )
}
