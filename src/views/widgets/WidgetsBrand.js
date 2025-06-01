import React from 'react'
import PropTypes from 'prop-types'
import { CRow, CCol } from '@coreui/react'
import DashboardCard from '../../components/DashboardCard'

const WidgetsBrand = (props) => {
  return (
    <CRow className={props.className} xs={{ gutter: 4 }}>
      <CCol sm={6} xl={4} xxl={3}>
        <DashboardCard
          title="Produtos"
          backgroundColor="#3b5998"
          withChart={props.withCharts}
          path="/produtos"
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <DashboardCard
          title="Inventário"
          backgroundColor="#00aced"
          withChart={props.withCharts}
          path="/inventario"
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <DashboardCard
          title="Lista de compras"
          backgroundColor="#4875b4"
          withChart={props.withCharts}
          path="/lista-compras"
        />
      </CCol>
    </CRow>
  )
}

WidgetsBrand.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
}

export default WidgetsBrand
