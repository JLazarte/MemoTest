import { CSSProperties } from "react";

export interface GameOptionProps {
  name: string
  played: boolean 
  score?: number
  link: string
  style?: CSSProperties
}