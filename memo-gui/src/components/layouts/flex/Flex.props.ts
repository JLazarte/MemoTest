import { CSSProperties } from "react"

export interface FlexProps {
  gap?: number
  direction?: 'row' | 'column' | 'grid' | 'flex-grid' | 'offset-grid'
  /* Only works with 'grid' or 'flex-grid' */
  maxColumns?: number
  /* Only works with 'offset-grid' */
  maxRows?: number
  style?: CSSProperties
}