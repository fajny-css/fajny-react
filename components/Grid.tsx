/*=============================================== Grid ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled, { css } from "styled-components"
import { stringifyPx } from "js-utils-julseb"

import Variables from "./Variables"

import {
    spacersType,
    gridJustifyItemsType,
    gridAlignItemsType,
    gridJustifyContentType,
    gridAlignContentType,
} from "./common-types"

/*==================== Component ====================*/

const Grid = ({
    inline,
    col,
    gap,
    columnGap,
    rowGap,
    justifyItems,
    alignItems,
    justifyContent,
    alignContent,
    padding,
    colTablet,
    colMobile,
    children,
    ...props
}: props) => (
    <Container
        $inline={inline}
        $col={col}
        $gap={gap}
        $columnGap={columnGap}
        $rowGap={rowGap}
        $justifyItems={justifyItems}
        $alignItems={alignItems}
        $justifyContent={justifyContent}
        $alignContent={alignContent}
        $padding={padding}
        $colTablet={colTablet}
        $colMobile={colMobile}
        {...props}
    >
        {children}
    </Container>
)

export default Grid

/*==================== Types ====================*/

const col = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    11: 11,
    12: 12,
} as const

type colType = keyof typeof col

interface styleProps extends React.HTMLAttributes<HTMLDivElement> {
    $inline?: boolean
    $col?: colType | number | string
    $gap?: spacersType | number | string
    $columnGap?: spacersType | number | string
    $rowGap?: spacersType | number | string
    $justifyItems?: gridJustifyItemsType
    $alignItems?: gridAlignItemsType
    $justifyContent?: gridJustifyContentType
    $alignContent?: gridAlignContentType
    $padding?: spacersType | number | string
    $colTablet?: string
    $colMobile?: string
}

interface props extends React.HTMLAttributes<HTMLDivElement> {
    inline?: boolean
    col?: colType | number | string
    gap?: spacersType | number | string
    columnGap?: spacersType | number | string
    rowGap?: spacersType | number | string
    justifyItems?: gridJustifyItemsType
    alignItems?: gridAlignItemsType
    justifyContent?: gridJustifyContentType
    alignContent?: gridAlignContentType
    padding?: spacersType | number | string
    colTablet?: string
    colMobile?: string
}

/*==================== Styles ====================*/

const Container = styled.div<styleProps>`
    display: ${({ $inline }) => ($inline ? "inline-grid" : "grid")};
    grid-template-columns: ${({ $col }) => (typeof $col === "number" ? `repeat(${$col}, 1fr)` : $col)};
    gap: ${({ $gap }) =>
        $gap === "xxl"
            ? Variables.Spacers.XXL
            : $gap === "xl"
            ? Variables.Spacers.XL
            : $gap === "l"
            ? Variables.Spacers.L
            : $gap === "m"
            ? Variables.Spacers.M
            : $gap === "s"
            ? Variables.Spacers.S
            : $gap === "xs"
            ? Variables.Spacers.XS
            : $gap === "xxs"
            ? Variables.Spacers.XXS
            : $gap
            ? stringifyPx($gap)
            : ""};
    column-gap: ${({ $columnGap }) =>
        $columnGap === "xxl"
            ? Variables.Spacers.XXL
            : $columnGap === "xl"
            ? Variables.Spacers.XL
            : $columnGap === "l"
            ? Variables.Spacers.L
            : $columnGap === "m"
            ? Variables.Spacers.M
            : $columnGap === "s"
            ? Variables.Spacers.S
            : $columnGap === "xs"
            ? Variables.Spacers.XS
            : $columnGap === "xxs"
            ? Variables.Spacers.XXS
            : $columnGap
            ? stringifyPx($columnGap)
            : ""};
    row-gap: ${({ $rowGap }) =>
        $rowGap === "xxl"
            ? Variables.Spacers.XXL
            : $rowGap === "xl"
            ? Variables.Spacers.XL
            : $rowGap === "l"
            ? Variables.Spacers.L
            : $rowGap === "m"
            ? Variables.Spacers.M
            : $rowGap === "s"
            ? Variables.Spacers.S
            : $rowGap === "xs"
            ? Variables.Spacers.XS
            : $rowGap === "xxs"
            ? Variables.Spacers.XXS
            : $rowGap
            ? stringifyPx($rowGap)
            : ""};
    justify-items: ${({ $justifyItems }) => $justifyItems};
    align-items: ${({ $alignItems }) => $alignItems};
    justify-content: ${({ $justifyContent }) => $justifyContent};
    align-content: ${({ $alignContent }) => $alignContent};
    padding: ${({ $padding }) =>
        $padding === "xxl"
            ? Variables.Spacers.XXL
            : $padding === "xl"
            ? Variables.Spacers.XL
            : $padding === "l"
            ? Variables.Spacers.L
            : $padding === "m"
            ? Variables.Spacers.M
            : $padding === "s"
            ? Variables.Spacers.S
            : $padding === "xs"
            ? Variables.Spacers.XS
            : $padding === "xxs"
            ? Variables.Spacers.XXS
            : $padding
            ? stringifyPx($padding)
            : ""};

    ${({ $col, $colTablet, $colMobile }) =>
        typeof $col === "number"
            ? css`
                  @media ${Variables.Breakpoints.Tablet} {
                      grid-template-columns: repeat(
                          ${!$col
                              ? 1
                              : $col >= 6
                              ? 4
                              : $col === 4 || $col === 5
                              ? 3
                              : $col === 3 || $col === 2
                              ? 2
                              : 1},
                          1fr
                      );
                  }

                  @media ${Variables.Breakpoints.Mobile} {
                      grid-template-columns: repeat(${!$col ? 1 : $col >= 6 ? 2 : 1}, 1fr);
                  }
              `
            : css`
                  @media ${Variables.Breakpoints.Tablet} {
                      grid-template-columns: ${$colTablet};
                  }

                  @media ${Variables.Breakpoints.Mobile} {
                      grid-template-columns: ${$colMobile};
                  }
              `}
`
