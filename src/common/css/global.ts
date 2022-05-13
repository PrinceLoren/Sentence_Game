import { css, Theme } from '@emotion/react'
import { fontImports } from './fontImports'

export const globalStyles = (theme: Theme) => css`
  ${fontImports}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  html,
  body {
    font-size: 62.5%;
    font-family: 'Plus Jakarta Sans', sans-serif;
    background-color: ${theme.colors.purple};
    color: ${theme.colors.black};
  }

  button {
    border: none;
    background-color: inherit;
  }
`
