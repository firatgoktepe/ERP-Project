import type { SvgIconTypeMap } from '@mui/material/SvgIcon'
import type { OverridableComponent } from '@mui/material/OverridableComponent'

export interface IMenuItem {
  name: string
  Icon: OverridableComponent<SvgIconTypeMap>
  route: string
}

export interface IModuleItem {
  name: string
  route: string
  image: any
}
