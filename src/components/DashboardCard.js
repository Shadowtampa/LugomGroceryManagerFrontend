import React from 'react'
import PropTypes from 'prop-types'
import { CCard, CCardBody } from '@coreui/react'
import { CChart } from '@coreui/react-chartjs'
import { useNavigate } from 'react-router-dom'

const DashboardCard = ({ title, backgroundColor, withChart = false, path }) => {
  const navigate = useNavigate()

  const chartOptions = {
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  }

  return (
    <CCard
      className="h-100 cursor-pointer"
      onClick={() => navigate(path)}
      style={{
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out',
        transform: 'scale(1)',
        '&:hover': {
          transform: 'scale(1.05)',
        }
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)'
      }}
    >
      <CCardBody
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          backgroundColor: backgroundColor,
          minHeight: '150px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {withChart && (
          <CChart
            className="position-absolute w-100 h-100"
            type="line"
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  backgroundColor: 'rgba(255,255,255,.1)',
                  borderColor: 'rgba(255,255,255,.55)',
                  pointHoverBackgroundColor: '#fff',
                  borderWidth: 2,
                  data: [65, 59, 84, 84, 51, 55, 40],
                  fill: true,
                },
              ],
            }}
            options={chartOptions}
          />
        )}
        <span className="text-white fw-bold fs-4">{title}</span>
      </CCardBody>
    </CCard>
  )
}

DashboardCard.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  withChart: PropTypes.bool,
  path: PropTypes.string.isRequired,
}

export default DashboardCard
