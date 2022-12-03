import React from 'react'
import { colors } from '@ignite-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
        <div
          style={{
            color: getContrast(color, '#fff') < 3.5 ? '#000' : '#fff',
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
          }}
        >
          <span>{key} </span>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}
