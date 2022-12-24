import '@emotion/react'
import { DynamicStyleFunction } from 'facepaint'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      black: string
      cream: string
      error: string
      primary: string
      white: string
    }
    mq: DynamicStyleFunction
  }
}
