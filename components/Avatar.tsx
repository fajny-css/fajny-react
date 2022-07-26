/*=============================================== Avatar ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"

import Variables from "./Variables"
import Mixins from "./Mixins"
import FajnyIcon from "./FajnyIcon"
import Icon from "./Icon"
import Image from "./Image"

import { RequireAtLeastOne } from "./RequireAtLeastOne"
import { fajnyIconsType, colorsShortType, spacersType } from "./common-types"

/*==================== Component ====================*/

const Avatar = ({
    color = "primary",
    size = "xxl",
    src,
    alt = "Avatar",
    children,
    icon,
    fajnyIcon,
    ...props
}: props) => {
    const iconSize =
        size === "xxl"
            ? 48
            : size === "xl"
            ? 40
            : size === "l"
            ? 32
            : size === "m"
            ? 24
            : size === "s"
            ? 16
            : size === "xs"
            ? 12
            : 8

    return (
        <Container $color={color} $size={size} {...props}>
            {src && <Image src={src} alt={alt} width="100%" height="100%" fit="cover" />}

            {icon && <Icon src={icon} size={iconSize} />}

            {fajnyIcon && <FajnyIcon name={fajnyIcon} size={iconSize} />}

            {children && children}
        </Container>
    )
}

export default Avatar

/*==================== Types ====================*/

interface styleProps extends React.HTMLAttributes<HTMLSpanElement> {
    $color?: colorsShortType
    $size?: spacersType
}

interface baseProps extends React.HTMLAttributes<HTMLSpanElement> {
    color?: colorsShortType
    size?: spacersType
    src?: string
    alt?: string
    children?: string
}

interface possible1 extends baseProps {
    icon?: string
    fajnyIcon?: never
}

interface possible2 extends baseProps {
    icon?: never
    fajnyIcon?: fajnyIconsType
}

type possibleProps = possible1 | possible2

type props = RequireAtLeastOne<possibleProps, "src" | "icon" | "fajnyIcon" | "children">

/*==================== Styles ====================*/

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
    background-color: ${Mixins.ColorsShort};
    color: ${({ $color }) => ($color === "white" ? Variables.Colors.Primary500 : Variables.Colors.White)};
    font-weight: ${Variables.FontWeights.Black};
    font-size: ${({ $size }) =>
        $size === "xxl"
            ? 64 * 0.6
            : $size === "xl"
            ? 56 * 0.6
            : $size === "l"
            ? 48 * 0.6
            : $size === "m"
            ? 40 * 0.6
            : $size === "s"
            ? 32 * 0.6
            : $size === "xs"
            ? 24 * 0.6
            : 16 * 0.6}px;
    ${Mixins.Flexbox({
        $align: "center",
        $justify: "center",
        $inline: true,
    })};
    overflow: hidden;
`
