/*=============================================== Tag ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"

import Variables from "./Variables"
import Mixins from "./Mixins"

import { colorsShortType } from "./common-types"

/*==================== Component ====================*/

const Tag = ({ tagStyle = "rounded", color = "primary", children, ...props }: props) => (
    <Container $tagStyle={tagStyle} $color={color} {...props}>
        {children}
    </Container>
)

export default Tag

/*==================== Types ====================*/

const tagStyles = {
    pill: "pill",
    rounded: "rounded",
} as const

type tagStylesTypes = keyof typeof tagStyles

interface styleProps extends React.HTMLAttributes<HTMLSpanElement> {
    $tagStyle?: tagStylesTypes
    $color?: colorsShortType
}

interface props extends React.HTMLAttributes<HTMLSpanElement> {
    tagStyle?: tagStylesTypes
    color?: colorsShortType
    children: string
}

/*==================== Styles ====================*/

const Container = styled.span<styleProps>`
    font-size: ${Variables.FontSizes.Small};
    padding: ${({ $tagStyle }) =>
        $tagStyle === "pill"
            ? `${Variables.Spacers.XXS} ${Variables.Spacers.M}`
            : `${Variables.Spacers.XXS} ${Variables.Spacers.S}`};
    border-radius: ${({ $tagStyle }) => ($tagStyle === "pill" ? Variables.Radiuses.Round : Variables.Radiuses.S)};
    background-color: ${Mixins.ColorsShort};
    color: ${({ $color }) => ($color === "white" ? Variables.Colors.Primary500 : Variables.Colors.White)};
`
