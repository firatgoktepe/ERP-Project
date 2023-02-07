import React from 'react'
import useFetch from '@/hooks/useFetch'
import Typography from '@mui/material/Typography'
import ErrorComponent from '@/components/common/Error/Error'
import Spinner from '@/components/common/Spinner/Spinner'

const url = `https://jsonplaceholder.typicode.com/posts`

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

const Example: React.FC = () => {
  const { data, error } = useFetch<Post[]>(url)

  if (error) return <ErrorComponent message="Page is not found" />
  if (!data) return <Spinner open />
  return (
    <Typography variant="h3" sx={{ margin: '0 auto', width: '50%' }}>
      {data[0].title}
    </Typography>
  )
}

export default Example
