import { createStitches, globalCss } from "@stitches/react"

export const globalStyles = globalCss({
  "*": { margin: 0, padding: 0 },
  html: {
    background: "#fff",
  },
  body: {
    fontFamily: "Inter, sans-serif",
    background: "#fff",
    minHeight: "100vh",
  },
  "#root": {
    minHeight: "100vh",
  },
  "input, button": {
    outline: "none",
    fontFamily: "Inter, sans-serif",
  },
  a: {
    color: "#000",
    textDecoration: "none",
  },
})

export const { styled, css } = createStitches({
  theme: {
    colors: {
      dark100: "rgba(9, 18, 41, 1)",
      dark80: "rgba(9, 18, 41, 0.80)",
      dark75: "rgba(9, 18, 41, 0.75)",
      dark60: "rgba(9, 18, 41, 0.60)",
      dark50: "rgba(9, 18, 41, 0.50)",
      dark30: "rgba(9, 18, 41, 0.30)",
      dark25: "rgba(9, 18, 41, 0.25)",
      dark20: "rgba(9, 18, 41, 0.20)",
      dark15: "rgba(9, 18, 41, 0.15)",
      dark10: "rgba(9, 18, 41, 0.10)",
      dark05: "rgba(9, 18, 41, 0.05)",
      dark025: "rgba(9, 18, 41, 0.025)",
      primary100: "rgba(109, 75, 255, 1)",
      primary80: "rgba(109, 75, 255, 0.80)",
      primary15: "rgba(109, 75, 255, 0.15)",
      primary10: "rgba(109, 75, 255, 0.10)",
      white: "rgba(255, 255, 255, 1)",
      danger100: "rgba(255, 75, 64, 1)",
      danger15: "rgba(255, 75, 64, 0.15)",
      success: "rgba(0, 201, 104, 1)",
    },
  },
  media: {
    bp1920: "(max-width: 1920px)",
    bp1900: "(max-width: 1900px)",
    bp1700: "(max-width: 1700px)",
    bp1440: "(max-width: 1440px)",
    bp1366: "(max-width: 1366px)",
    bp1170: "(max-width: 1170px)",
    bp970: "(max-width: 970px)",
    bp700: "(max-width: 700px)",
    bp640: "(max-width: 640px)",
    bp460: "(max-width: 460px)",
  },
})

export const Wrapper = styled("div", {
  minHeight: "100vh",
  height: "100%",
  display: "flex",
  flexDirection: "column",
})
