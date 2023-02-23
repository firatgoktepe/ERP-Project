import React from 'react'
import AppBar from '@/layout/Sidebar/AppBar/AppBar'
import Drawer from '@/layout/Sidebar/Drawer/Drawer'
import DrawerHeader from '@/layout/Sidebar/DrawerHeader/DrawerHeader'
import DrawerTitle from '@/layout/Sidebar/DrawerTitle/DrawerTitle'
import DrawerLogo from '@/layout/Sidebar/DrawerLogo/DrawerLogo'
import Header from '@/layout/Header/Header'
import SideLists from '@/layout/Sidebar/SideLists/SideLists'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { open, close, selectmenu } from '@/redux/features/menu/menuSlice'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const Layout = () => {
  const dispatch = useAppDispatch()
  const menu = useAppSelector(selectmenu)

  const handleDrawerOpen = () => {
    dispatch(open())
  }

  const handleDrawerClose = () => {
    dispatch(close())
  }

  const theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: 'lightgrey',
          },
        },
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed" open={menu}>
        <Header handleDrawerOpen={handleDrawerOpen} open={menu} />
      </AppBar>
      <Drawer variant="permanent" open={menu}>
        <DrawerHeader>
          <DrawerLogo />
          <DrawerTitle />
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
    </ThemeProvider>
  )
}

export default Layout
