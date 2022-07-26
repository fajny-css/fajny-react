/*=============================================== Button ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import Variables from "./Variables"
import Mixins from "./Mixins"
import Icon from "./Icon"
import FajnyIcon from "./FajnyIcon"
import Loader from "./Loader"

import { colorsHoverType, fajnyIconsType } from "./common-types"

/*==================== Component ====================*/

const Button = ({
    color = "primary",
    buttonStyle = "plain",
    noPadding,
    iconLeft,
    iconRight,
    fajnyIconLeft,
    fajnyIconRight,
    disabled,
    isLoading,
    children,
    to,
    type = "button",
    ...props
}: props) => {
    return (
        <Container
            $color={color}
            $buttonStyle={buttonStyle}
            $noPadding={noPadding}
            as={to ? Link : "button"}
            to={to ? to : undefined}
            disabled={isLoading || disabled}
            type={!to ? type : undefined}
            {...props}
        >
            {isLoading && <Loader color="gray" size="xxs" />}

            {iconLeft && <Icon src={iconLeft} size={16} />}

            {fajnyIconLeft && <FajnyIcon name={fajnyIconLeft} size={16} />}

            {children}

            {iconRight && <Icon src={iconRight} size={16} />}

            {fajnyIconRight && <FajnyIcon name={fajnyIconRight} size={16} />}
        </Container>
    )
}

export default Button

/*==================== Types ====================*/

const buttonStyles = {
    plain: "plain",
    text: "text",
    outline: "outline",
} as const

export type buttonStylesType = keyof typeof buttonStyles

interface styleProps extends React.HTMLAttributes<HTMLButtonElement> {
    $color?: colorsHoverType
    $buttonStyle?: buttonStylesType
    $noPadding?: boolean
}

interface baseProps extends React.HTMLAttributes<HTMLButtonElement> {
    color?: colorsHoverType
    buttonStyle?: buttonStylesType
    noPadding?: boolean
    disabled?: boolean
    isLoading?: boolean
    children: string
    to?: string
    type?: "button" | "submit" | "reset" | undefined
}

interface iconLeftRightProps extends baseProps {
    iconLeft?: string
    fajnyIconLeft?: never
    iconRight?: string
    fajnyIconRight?: never
}

interface iconLeftFajnyRightProps extends baseProps {
    iconLeft?: string
    fajnyIconLeft?: never
    iconRight?: never
    fajnyIconRight?: fajnyIconsType
}

interface fajnyLeftIconRight extends baseProps {
    iconLeft?: never
    fajnyIconLeft?: fajnyIconsType
    iconRight?: string
    fajnyIconRight?: never
}

interface fajnyLeftFajnyRight extends baseProps {
    iconLeft?: never
    fajnyIconLeft?: fajnyIconsType
    iconRight?: never
    fajnyIconRight?: fajnyIconsType
}

type props = iconLeftRightProps | iconLeftFajnyRightProps | fajnyLeftIconRight | fajnyLeftFajnyRight

/*==================== Styles ====================*/

const Container = styled.button<styleProps>`
    border: 1px solid ${({ $buttonStyle }) => ($buttonStyle === "outline" ? Mixins.ColorsHoverDefault : "transparent")};
    text-decoration: none;
    padding: ${({ $noPadding }) => ($noPadding ? 0 : `${Variables.Spacers.XS} ${Variables.Spacers.S}`)};
    ${Mixins.Flexbox({
        $inline: true,
        $align: "center",
        $justify: "center",
        $gap: "xs",
    })};
    border-radius: ${Variables.Radiuses.M};
    background-color: ${({ $buttonStyle }) => ($buttonStyle === "plain" ? Mixins.ColorsHoverDefault : "transparent")};
    color: ${({ $buttonStyle, $color }) =>
        $buttonStyle === "plain" && $color !== "white"
            ? Variables.Colors.White
            : $buttonStyle === "plain" && $color === "white"
            ? Variables.Colors.Primary500
            : Mixins.ColorsHoverDefault};

    &:hover {
        background-color: ${({ $buttonStyle }) => $buttonStyle === "plain" && Mixins.ColorsHoverHover};
        color: ${({ $buttonStyle }) =>
            ($buttonStyle === "text" || $buttonStyle === "outline") && Mixins.ColorsHoverHover};
        border-color: ${({ $buttonStyle }) => $buttonStyle === "outline" && Mixins.ColorsHoverHover};
    }

    &:active {
        background-color: ${({ $buttonStyle }) => $buttonStyle === "plain" && Mixins.ColorsHoverActive};
        color: ${({ $buttonStyle }) =>
            ($buttonStyle === "text" || $buttonStyle === "outline") && Mixins.ColorsHoverActive};
        border-color: ${({ $buttonStyle }) => $buttonStyle === "outline" && Mixins.ColorsHoverActive};
    }

    &:disabled {
        background-color: ${({ $buttonStyle }) => ($buttonStyle === "plain" ? Variables.Colors.Gray100 : "")};
        color: ${Variables.Colors.Gray500};
        border-color: ${({ $buttonStyle }) => $buttonStyle === "outline" && Variables.Colors.Gray500};
    }
`
