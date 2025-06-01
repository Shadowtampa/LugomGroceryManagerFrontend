import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilExternalLink,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Produtos',
    to: '/produtos',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Inventário	',
    to: '/inventario',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Lista de Compras',
    to: '/lista-compras',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  }
]

export default _nav
