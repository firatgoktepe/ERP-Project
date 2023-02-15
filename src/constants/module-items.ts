import materialPic from '@/assets/material.png'
import planPic from '@/assets/plan.png'
import projectPic from '@/assets/proje_yon.png'
import productPic from '@/assets/uretim_yon.png'
import purchasePic from '@/assets/tedarik.png'

import { IModuleItem } from '../types/general'
import * as ROUTES from './routes'

export const MODULE_LIST_ITEMS: IModuleItem[] = [
  {
    name: 'Proje Yönetimi Modülü',
    image: projectPic,
    route: ROUTES.PROJECT_MANAGEMENT,
  },
  {
    name: 'Üretim Yönetimi Modülü',
    image: productPic,
    route: ROUTES.PRODUCTION_MANAGEMENT,
  },
  {
    name: 'Satın Alma Yönetimi Modülü',
    image: purchasePic,
    route: ROUTES.PURCHASING_MANAGEMENT,
  },
  {
    name: 'Malzeme Yönetimi Modülü',
    image: materialPic,
    route: ROUTES.MATERIAL_MANAGEMENT,
  },
  {
    name: 'Planlama Yönetimi Modülü',
    image: planPic,
    route: ROUTES.MATERIAL_MANAGEMENT,
  },
]
