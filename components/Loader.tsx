/*=============================================== Loader ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled, { keyframes } from "styled-components"

import Variables from "./Variables"
import Mixins from "./Mixins"

import { colorsShortType, spacersType } from "./common-types"

/*==================== Component ====================*/

const Loader = ({ size = "xxl", color = "primary", ...props }: props) => (
    <Container $size={size} $color={color} {...props} />
)

export default Loader

/*==================== Types ====================*/

interface styleProps extends React.HTMLAttributes<HTMLSpanElement> {
    $size?: spacersType
    $color?: colorsShortType
}

interface props extends React.HTMLAttributes<HTMLSpanElement> {
    size?: spacersType
    color?: colorsShortType
}

/*==================== Styles ====================*/

const Spin = keyframes`
    0% {
        transform: rotate(0deg)
    }

    100% {
        transform: rotate(360deg);
    }
`

const Container = styled.span<styleProps>`
    width: ${({ $size }) =>
        $size === "xxl"
            ? 64
            : $size === "xl"
            ? 56
            : $size === "l"
            ? 48
            : $size === "m"
            ? 40
            : $size === "s"
            ? 32
            : $size === "xs"
            ? 24
            : 16}px;
    height: ${({ $size }) =>
        $size === "xxl"
            ? 64
            : $size === "xl"
            ? 56
            : $size === "l"
            ? 48
            : $size === "m"
            ? 40
            : $size === "s"
            ? 32
            : $size === "xs"
            ? 24
            : 16}px;
    border-radius: ${Variables.Radiuses.Circle};
    border: ${({ $size }) =>
            $size === "xxl"
                ? 8
                : $size === "xl"
                ? 7
                : $size === "l"
                ? 6
                : $size === "m"
                ? 5
                : $size === "s"
                ? 4
                : $size === "xs"
                ? 3
                : 2}px
        solid transparent;
    border-bottom-color: ${Mixins.ColorsShort};
    animation: ${Spin} 1500ms linear infinite;
`
