/*=============================================== Icon ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"
import SVG from "react-inlinesvg"

import Mixins from "./Mixins"

import { Props as SVGProps } from "react-inlinesvg"
import { fajnyColorsType, colorsShortType } from "./common-types"

/*==================== Component ====================*/

const Icon = ({ src, size = 24, color = "currentColor", ...props }: props) => (
    <Container src={`/icons/${src}.svg`} $color={color} $size={size} {...props} />
)

export default Icon

/*==================== Types ====================*/

interface styleProps extends SVGProps {
    $size?: number
    $color?: fajnyColorsType | colorsShortType | string
}

interface props extends SVGProps {
    src: string
    size?: number
    color?: fajnyColorsType | colorsShortType | string
}

/*==================== Styles ====================*/

const Container = styled(SVG)<styleProps>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    fill: ${Mixins.AllColors};

    path {
        fill: ${Mixins.AllColors};
    }
`
