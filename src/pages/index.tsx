import CustomHead from '@/components/common/Head/Head'
import Dashboard from './dashboard'

export default function Home(): JSX.Element {
  return (
    <>
      <CustomHead title="Dashboard" />
      <Dashboard />
    </>
  )
}
