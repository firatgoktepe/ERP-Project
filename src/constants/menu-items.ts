import DashboardIcon from '@mui/icons-material/Dashboard'
import DevicesIcon from '@mui/icons-material/Devices'
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'

import { IMenuItem } from '../types/general'
import * as ROUTES from './routes'

export const MENU_LIST_ITEMS: IMenuItem[] = [
  {
    name: 'Proje Yönetimi',
    Icon: DashboardIcon,
    route: ROUTES.PROJECT_MANAGEMENT,
  },
  {
    name: 'Üretim Yönetimi',
    Icon: DevicesIcon,
    route: ROUTES.PRODUCTION_MANAGEMENT,
  },
  {
    name: 'Satın Alma Yönetimi',
    Icon: GitHubIcon,
    route: ROUTES.PURCHASING_MANAGEMENT,
  },
  {
    name: 'Malzeme Yönetimi',
    Icon: TwitterIcon,
    route: ROUTES.MATERIAL_MANAGEMENT,
  },
]
