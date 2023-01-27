import Head from 'next/head'
import Example from '@/components/common/Example/Example'
import { AppBar } from '@/layout/Sidebar/AppBar/AppBar'
import { Drawer } from '@/layout/Sidebar/Drawer/Drawer'
import { DrawerHeader } from '@/layout/Sidebar/DrawerHeader/DrawerHeader'
import Main from '@/layout/Main/Main'
import Header from '@/layout/Header/Header'
import SideLists from '@/layout/Sidebar/SideLists/SideLists'
import { Theme, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { open, close, selectmenu } from '../app/features/menu/menuSlice'

export default function Home() {
  const theme = useTheme<Theme>()
  const dispatch = useAppDispatch()
  const menu = useAppSelector(selectmenu)

  const handleDrawerOpen = () => {
    dispatch(open())
  }

  const handleDrawerClose = () => {
    dispatch(close())
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Example />
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={menu}>
          <Header handleDrawerOpen={handleDrawerOpen} open={menu} />
        </AppBar>
        <Drawer variant="permanent" open={menu}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <SideLists open={menu} />
        </Drawer>
        <Main />
      </Box>
    </>
  )
}
