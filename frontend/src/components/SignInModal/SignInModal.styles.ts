import { css, styled } from "../../theme"

export const styles = css({
  display: "flex",
  flexDirection: "column",
  rowGap: "35px",
  alignItems: "center",
})

export const Logo = styled("img", {
  width: "160px",
})

export const ActionsContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",

  "@bp460": {
    flexDirection: "column",
    rowGap: "10px",
  },
})

export const SignUp = styled("div", {
  display: "flex",
  flexDirection: "column",

  p: {
    color: "$dark100",
    fontSize: "14px",
    fontWeight: 500,
  },

  button: {
    color: "$primary100",
    fontWeight: 500,
    fontSize: "14px",
    background: "transparent",
    border: "none",
    width: "fit-content",
    cursor: "pointer",
  },

  "@bp460": {
    alignItems: "center",
    order: 2,
  },
})
