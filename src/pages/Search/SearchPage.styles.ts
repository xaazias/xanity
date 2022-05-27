import { css, styled } from "../../theme"

export const styles = css({
  display: "flex",
  flexDirection: "column",
  rowGap: "45px",
  marginBottom: "45px",
  flexWrap: "wrap",
})

export const MainContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  rowGap: "45px",
})

export const ProductsContainer = styled("div", {
  display: "flex",
  columnGap: "25px",
  rowGap: "25px",

  "@bp700": {
    flexDirection: "column",
  }
})

export const Products = styled("div", {
  display: "grid",
  gap: "25px",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
})