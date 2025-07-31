import type React from "react"

interface GridBackgroundProps {
  children?: React.ReactNode
  gridSize?: number
  color?: string
  opacity?: number
  strokeWidth?: number
  className?: string
}

export function GridBackground({
  children,
  gridSize = 20,
  color = "#ef4444", // red-500
  opacity = 0.3,
  strokeWidth = 1,
  className = "",
}: GridBackgroundProps) {
  const gridId = `grid-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className={`relative ${className}`}>
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={gridId} width={gridSize} height={gridSize} patternUnits="userSpaceOnUse">
            <path
              d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`}
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              opacity={opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${gridId})`} />
      </svg>
      {children}
    </div>
  )
}
