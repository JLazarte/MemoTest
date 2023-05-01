import { NextFont, NextFontWithVariable } from "next/dist/compiled/@next/font";
import { CSSProperties } from "react";

export interface PageProps {
  title: string,
  inter: NextFont | NextFontWithVariable,
  style?: CSSProperties
}