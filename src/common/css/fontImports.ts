import { css } from '@emotion/react'

export const biotifImports = css`
  @font-face {
    font-family: Biotif;
    src: url('/fonts/Biotif-Light.ttf') format('truetype');
    font-weight: 300;
  }

  @font-face {
    font-family: Biotif;
    src: url('/fonts/Biotif-Regular.ttf') format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: Biotif;
    src: url('/fonts/Biotif-Medium.ttf') format('truetype');
    font-weight: 500;
  }

  @font-face {
    font-family: Biotif;
    src: url('/fonts/Biotif-SemiBold.ttf') format('truetype');
    font-weight: 600;
  }

  @font-face {
    font-family: Biotif;
    src: url('/fonts/Biotif-Bold.ttf') format('truetype');
    font-weight: 700;
  }

  @font-face {
    font-family: Biotif;
    src: url('/fonts/Biotif-ExtraBold.ttf') format('truetype');
    font-weight: 800;
  }
`

const robotoFontImports = css`
  @font-face {
    font-family: Roboto;
    src: url('/fonts/Roboto-Thin.ttf') format('truetype');
    font-weight: 100;
  }

  @font-face {
    font-family: Roboto;
    src: url('/fonts/Roboto-Light.ttf') format('truetype');
    font-weight: 300;
  }

  @font-face {
    font-family: Roboto;
    src: url('/fonts/Roboto-Regular.ttf') format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: Roboto;
    src: url('/fonts/Roboto-Medium.ttf') format('truetype');
    font-weight: 500;
  }

  @font-face {
    font-family: Roboto;
    src: url('/fonts/Roboto-Bold.ttf') format('truetype');
    font-weight: 700;
  }

  @font-face {
    font-family: Roboto;
    src: url('/fonts/Roboto-Black.ttf') format('truetype');
    font-weight: 900;
  }
`

const quincyFontImports = css`
  @font-face {
    font-family: 'Quincy CF';
    src: url('/fonts/quincycf-light.otf') format('opentype');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Quincy CF';
    src: url('/fonts/quincycf-medium.otf') format('opentype');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Quincy CF';
    src: url('/fonts/quincycf-bold.otf') format('opentype');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Quincy CF';
    src: url('/fonts/quincycf-extrabold.otf') format('opentype');
    font-weight: 800;
  }

  @font-face {
    font-family: 'Quincy CF';
    src: url('/fonts/quincycf-black.otf') format('opentype');
    font-weight: 900;
  }
`

export const fontImports = css`
  ${biotifImports}
  ${robotoFontImports}
  ${quincyFontImports}
`
