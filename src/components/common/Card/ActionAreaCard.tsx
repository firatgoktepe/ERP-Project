import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { IModuleItem } from '@/types/general'

const ActionAreaCard: React.FC<IModuleItem> = ({
  route,
  image,
  name,
}): JSX.Element => {
  return (
    <Card
      sx={{
        textAlign: 'center',
        borderRadius: '10px',
        backgroundColor: 'gray.light',
        '&:hover': {
          backgroundColor: 'gray.light',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <CardActionArea>
        <Link
          href={route}
          style={{
            textDecoration: 'none',
            color: 'inherit',
            fontSize: 30,
          }}
        >
          <Image src={image} width={100} height={100} alt="Materials" />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {name}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  )
}

export default ActionAreaCard