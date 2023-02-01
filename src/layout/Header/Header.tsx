import React from 'react'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import Search from '../../components/specific/Search/Search'
import SearchIconWrapper from '../../components/specific/Search/SearchIconWrapper'
import StyledInputBase from '../../components/specific/Search/StyledInputBase'
import ProfileElements from '@/components/specific/ProfileElements/ProfileElements'

interface openProps {
  open: boolean
  handleDrawerOpen: () => void
}

const Header: React.FC<openProps> = ({ open, handleDrawerOpen }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget)
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
        ERP Project
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
        anchorEl={anchorEl}
        mobileMoreAnchorEl={mobileMoreAnchorEl}
      />
    </Toolbar>
  )
}

export default Header
