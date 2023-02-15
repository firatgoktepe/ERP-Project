import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import Search from '../../components/specific/Search/Search'
import SearchIconWrapper from '../../components/specific/Search/SearchIconWrapper'
import StyledInputBase from '../../components/specific/Search/StyledInputBase'
import ProfileElements from '@/components/specific/ProfileElements/ProfileElements'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import {
  openProfile,
  closeProfile,
  selectprofileMenu,
} from '../../redux/features/profileElements/profileMenuSlice'
import {
  openMobileProfile,
  closeMobileProfile,
  selectmobileprofileMenu,
} from '@/redux/features/profileElements/mobileProfileMenuSlice'

interface openProps {
  open: boolean
  handleDrawerOpen: () => void
}

const Header: React.FC<openProps> = ({ open, handleDrawerOpen }) => {
  const dispatch = useAppDispatch()
  const profileMenu = useAppSelector(selectprofileMenu)
  const mobileProfileMenu = useAppSelector(selectmobileprofileMenu)

  const isMenuOpen = Boolean(profileMenu)
  const isMobileMenuOpen = Boolean(mobileProfileMenu)
  const matches = useMediaQuery('(max-width:600px)')

  const handleProfileMenuOpen = () => {
    dispatch(openProfile())
  }

  const handleMobileMenuClose = () => {
    dispatch(closeMobileProfile())
  }

  const handleMenuClose = () => {
    dispatch(closeProfile())
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = () => {
    dispatch(openMobileProfile())
  }

  return (
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{
          marginRight: 5,
          ...(open && { display: 'none' }),
        }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div">
        {matches ? '' : 'Libre Gaudium' && open ? '' : 'Libre Gaudium'}
      </Typography>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
      <ProfileElements
        handleProfileMenuOpen={handleProfileMenuOpen}
        handleMobileMenuClose={handleMobileMenuClose}
        handleMenuClose={handleMenuClose}
        handleMobileMenuOpen={handleMobileMenuOpen}
        isMenuOpen={isMenuOpen}
        isMobileMenuOpen={isMobileMenuOpen}
        anchorEl={profileMenu}
        mobileMoreAnchorEl={mobileProfileMenu}
      />
    </Toolbar>
  )
}

export default Header
