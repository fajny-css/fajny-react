/*=============================================== Badge ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"

import Variables from "./Variables"
import Mixins from "./Mixins"
import Icon from "./Icon"
import FajnyIcon from "./FajnyIcon"

import { spacersType, colorsShortType, fajnyIconsType } from "./common-types"

/*==================== Component ====================*/

const Badge = ({ color = "primary", size = "xxl", children, icon, fajnyIcon, ...props }: props) => {
    const iconSizes =
        size === "xxl"
            ? 56
            : size === "xl"
            ? 40
            : size === "l"
            ? 24
            : size === "m"
            ? 16
            : size === "s"
            ? 12
            : size === "xs"
            ? 8
            : 4

    return (
        <Container $color={color} $size={size} $children={!!children} $childrenLength={children?.length} {...props}>
            {children && children}
            {icon && <Icon src={icon} size={iconSizes} />}
            {fajnyIcon && <FajnyIcon name={fajnyIcon} size={iconSizes} />}
        </Container>
    )
}

export default Badge

/*==================== Types ====================*/

interface styleProps extends React.HTMLAttributes<HTMLSpanElement> {
    $color?: colorsShortType
    $size?: spacersType
    $children?: boolean
    $childrenLength?: number
}

interface baseProps extends React.HTMLAttributes<HTMLSpanElement> {
    color?: colorsShortType
    size?: spacersType
}

interface numberProps extends baseProps {
    children?: string
    icon?: never
    fajnyIcon?: never
}

interface iconProps extends baseProps {
    children?: never
    icon?: string
    fajnyIcon?: never
}

interface fajnyIconProps extends baseProps {
    children?: never
    icon?: never
    fajnyIcon?: fajnyIconsType
}

type props = numberProps | iconProps | fajnyIconProps

/*==================== Styles ====================*/

const Container = styled.span<styleProps>`
    min-width: ${({ $size }) =>
        $size === "xxl"
            ? 64
            : $size === "xl"
            ? 48
            : $size === "l"
            ? 32
            : $size === "m"
            ? 24
            : $size === "s"
            ? 16
            : $size === "xs"
            ? 12
            : 8}px;
    height: ${({ $size }) =>
        $size === "xxl"
            ? 64
            : $size === "xl"
            ? 48
            : $size === "l"
            ? 32
            : $size === "m"
            ? 24
            : $size === "s"
            ? 16
            : $size === "xs"
            ? 12
            : 8}px;
    font-size: ${({ $size }) =>
        $size === "xxl"
            ? 64 * 0.6
            : $size === "xl"
            ? 48 * 0.6
            : $size === "l"
            ? 32 * 0.6
            : $size === "m"
            ? 24 * 0.6
            : $size === "s"
            ? 16 * 0.6
            : $size === "xs"
            ? 12 * 0.6
            : 8 * 0.6}px;
    ${Mixins.Flexbox({
        $inline: true,
        $align: "center",
        $justify: "center",
    })};
    background-color: ${Mixins.ColorsShort};
    border-radius: ${Variables.Radiuses.Round};
    color: ${({ $color }) => ($color === "white" ? Variables.Colors.Primary500 : Variables.Colors.White)};
    font-weight: ${Variables.FontWeights.Black};
    padding: ${({ $children, $childrenLength, $size }) =>
        $children &&
        $childrenLength &&
        $childrenLength > 2 &&
        ($size === "xxl"
            ? `0 ${Variables.Spacers.M}`
            : $size === "xl"
            ? `0 ${Variables.Spacers.S}`
            : $size === "l"
            ? `0 ${Variables.Spacers.S}`
            : $size === "m"
            ? `0 ${Variables.Spacers.XS}`
            : $size === "s"
            ? `0 ${Variables.Spacers.XS}`
            : $size === "xs"
            ? `0 ${Variables.Spacers.XXS}`
            : $size === "xxs" && `0 ${Variables.Spacers.XXS}`)};
`
