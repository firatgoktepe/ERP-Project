import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import { MENU_LIST_ITEMS } from '@/constants/menu-items'

interface openProps {
  open: boolean
}

const SideLists: React.FC<openProps> = ({ open }) => {
  const router = useRouter()
  const initialSelection = MENU_LIST_ITEMS.findIndex(
    (el) => el.route === router.pathname
  )
  const [selectedIndex, setSelectedIndex] = useState(
    initialSelection !== -1 ? initialSelection : 0
  )

  return (
    <>
      <List>
        {MENU_LIST_ITEMS.map(({ route, Icon, name }, id) => (
          <Link href={route} key={id}>
            <ListItem
              disablePadding
              onClick={() => setSelectedIndex(id)}
              sx={{ display: 'block' }}
              data-testid="list-item-one"
            >
              <ListItemButton
                selected={id === selectedIndex}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                ></ListItemIcon>
                <Icon />
                <ListItemText
                  primary={name}
                  sx={{ opacity: open ? 1 : 0, textDecoration: 'none' }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            sx={{ display: 'block' }}
            data-testid="list-item-two"
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default SideLists
