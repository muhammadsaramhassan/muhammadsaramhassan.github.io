'use client'

import { useState } from 'react'

interface FilterOption {
  label: string
  count: number
  tag: string | null  // null = "All"
}

interface BlogFiltersProps {
  options: FilterOption[]
  onFilter: (tag: string | null) => void
}

export default function BlogFilters({ options, onFilter }: BlogFiltersProps) {
  const [active, setActive] = useState<string | null>(null)

  function select(tag: string | null) {
    setActive(tag)
    onFilter(tag)
  }

  return (
    <div className="filters">
      <span className="lbl">filter</span>
      {options.map((o) => (
        <button
          key={o.tag ?? 'all'}
          className={`chip${active === o.tag ? ' active' : ''}`}
          onClick={() => select(o.tag)}
        >
          {o.label} <span className="n">{o.count}</span>
        </button>
      ))}
      <button className="chip active g" style={{ marginLeft: 'auto' }}>
        Recent first ↓
      </button>
    </div>
  )
}
