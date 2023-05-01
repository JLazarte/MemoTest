import { CSSProperties } from "react";

export interface TextureProps {
  type: 'upholstery' | 'carbon' | 'leather';
  style?: CSSProperties;
}