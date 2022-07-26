/*=============================================== FajnyIcon ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"

import Mixins from "./Mixins"
import SvgSprite from "../icon-sprite.svg"

import { fajnyIconsType, fajnyColorsType, colorsShortType } from "./common-types"

/*==================== Component ====================*/

const FajnyIcon = ({ color = "currentColor", name, size = 24, ...props }: props) => (
    <Container $color={color} $size={size} {...props}>
        <use xlinkHref={`${SvgSprite}#${name}`} />
    </Container>
)

export default FajnyIcon

/*==================== Types ====================*/

export interface styleProps extends React.HTMLAttributes<HTMLOrSVGElement> {
    $color?: fajnyColorsType | colorsShortType | string
    $size?: number
}

export interface props extends React.HTMLAttributes<HTMLOrSVGElement> {
    color?: fajnyColorsType | colorsShortType | string
    name: fajnyIconsType
    size?: number
}

/*==================== Styles ====================*/

const Container = styled.svg<styleProps>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    color: ${Mixins.AllColors};
`
