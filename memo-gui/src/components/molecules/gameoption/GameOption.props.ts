import { CSSProperties } from "react";

export interface GameOptionProps {
  id: number
  name: string
  played: boolean 
  score?: number
  onClick?: (id: number) => void
  style?: CSSProperties
}