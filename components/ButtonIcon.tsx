/*=============================================== ButtonIcon ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import Variables from "./Variables"
import Mixins from "./Mixins"
import FajnyIcon from "./FajnyIcon"
import Icon from "./Icon"
import Loader from "./Loader"

import { colorsHoverType, fajnyIconsType } from "./common-types"

/*==================== Component ====================*/

const ButtonIcon = ({
    buttonStyle = "plain",
    color = "primary",
    disabled,
    isLoading,
    to,
    icon,
    fajnyIcon,
    ...props
}: props) => {
    return (
        <Container
            $buttonStyle={buttonStyle}
            $color={color}
            to={to ? to : undefined}
            as={to ? Link : "button"}
            disabled={isLoading ? true : disabled}
            {...props}
        >
            {isLoading ? (
                <Loader size="s" color="gray" />
            ) : icon ? (
                <Icon src={icon} size={32} />
            ) : fajnyIcon ? (
                <FajnyIcon name={fajnyIcon} size={32} />
            ) : (
                ""
            )}
        </Container>
    )
}

export default ButtonIcon

/*==================== Types ====================*/

const buttonStyles = {
    plain: "plain",
    transparent: "transparent",
} as const

type buttonStylesProps = keyof typeof buttonStyles

interface styleProps extends React.HTMLAttributes<HTMLButtonElement> {
    $buttonStyle?: buttonStylesProps
    $color?: colorsHoverType
}

interface baseProps extends React.HTMLAttributes<HTMLButtonElement> {
    buttonStyle?: buttonStylesProps
    color?: colorsHoverType
    disabled?: boolean
    isLoading?: boolean
    to?: string
}

interface iconProps extends baseProps {
    icon: string
    fajnyIcon?: never
}

interface fajnyIconProps extends baseProps {
    icon?: never
    fajnyIcon: fajnyIconsType
}

type props = iconProps | fajnyIconProps

/*==================== Styles ====================*/

const buttonSize = 48

const Container = styled.button<styleProps>`
    width: ${buttonSize}px;
    height: ${buttonSize}px;
    border-radius: ${Variables.Radiuses.Circle};
    ${Mixins.Flexbox({
        $inline: true,
        $align: "center",
        $justify: "center",
    })};
    padding: 0;
    border: none;
    background-color: ${({ $buttonStyle }) => ($buttonStyle === "plain" ? Mixins.ColorsHoverDefault : "transparent")};
    color: ${({ $buttonStyle, $color }) =>
        $buttonStyle === "plain" && $color === "white"
            ? Variables.Colors.Primary500
            : $buttonStyle === "plain" && $color !== "white"
            ? Variables.Colors.White
            : $buttonStyle === "transparent" && Mixins.ColorsHoverDefault};

    @media ${Variables.Breakpoints.Hover} {
        &:hover {
            background-color: ${({ $buttonStyle }) => $buttonStyle === "plain" && Mixins.ColorsHoverHover};
            color: ${({ $buttonStyle }) => $buttonStyle === "transparent" && Mixins.ColorsHoverHover};
        }

        &:active {
            background-color: ${({ $buttonStyle }) => $buttonStyle === "plain" && Mixins.ColorsHoverActive};
            color: ${({ $buttonStyle }) => $buttonStyle === "transparent" && Mixins.ColorsHoverActive};
        }
    }

    &:disabled {
        background-color: ${({ $buttonStyle }) => $buttonStyle === "plain" && Variables.Colors.Gray100};
        color: ${Variables.Colors.Gray500};
    }
`
