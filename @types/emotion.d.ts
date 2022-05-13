import '@emotion/react'
import CSS from 'csstype'

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface Theme {
    colors: {
      purple: CSS.Property.Color
      black: CSS.Property.Color
    }
  }
}
