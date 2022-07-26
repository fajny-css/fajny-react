/*=============================================== Flexbox ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"
import { stringifyPx } from "js-utils-julseb"

import Variables from "./Variables"

import { spacersType, flexDirectionType, flexWrapType, flexJustifyType, flexAlignType } from "./common-types"

/*==================== Component ====================*/

const Flexbox = ({
    inline,
    direction,
    wrap,
    justify,
    align,
    gap,
    rowGap,
    columnGap,
    padding,
    children,
    ...props
}: props) => (
    <Container
        $inline={inline}
        $direction={direction}
        $wrap={wrap}
        $justify={justify}
        $align={align}
        $gap={gap}
        $rowGap={rowGap}
        $columnGap={columnGap}
        $padding={padding}
        {...props}
    >
        {children}
    </Container>
)

export default Flexbox

/*==================== Types ====================*/

interface styleProps extends React.HTMLAttributes<HTMLDivElement> {
    $inline?: boolean
    $direction?: flexDirectionType
    $wrap?: flexWrapType
    $justify?: flexJustifyType
    $align?: flexAlignType
    $gap?: spacersType | number
    $rowGap?: spacersType | number
    $columnGap?: spacersType | number
    $padding?: spacersType | number | string
}

interface props extends React.HTMLAttributes<HTMLDivElement> {
    inline?: boolean
    direction?: flexDirectionType
    wrap?: flexWrapType
    justify?: flexJustifyType
    align?: flexAlignType
    gap?: spacersType | number
    rowGap?: spacersType | number
    columnGap?: spacersType | number
    padding?: spacersType | number | string
}

/*==================== Styles ====================*/

const Container = styled.div<styleProps>`
    display: ${({ $inline }) => ($inline ? "inline-flex" : "flex")};
    flex-direction: ${({ $direction }) => $direction};
    flex-wrap: ${({ $wrap }) => $wrap};
    justify-content: ${({ $justify }) => $justify};
    align-items: ${({ $align }) => $align};
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
`
