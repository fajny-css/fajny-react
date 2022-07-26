/*=============================================== Toast ===============================================*/

/*==================== Imports ====================*/

import React, { useState } from "react"
import styled from "styled-components"

import Variables from "./Variables"
import { H5, P } from "./Font"
import Mixins from "./Mixins"
import Icon from "./Icon"
import FajnyIcon from "./FajnyIcon"

import { fajnyColorsType, colorsShortType, fajnyIconsType } from "./common-types"

/*==================== Component ====================*/

const Toast = ({
    title,
    close,
    children,
    icon,
    fajnyIcon,
    iconClose,
    fajnyIconClose,
    iconColor = Variables.Colors.Primary500,
    ...props
}: props) => {
    const [isClosed, setIsClosed] = useState(false)

    return (
        <Container $isClosed={isClosed} {...props}>
            {icon || fajnyIcon || close || iconClose || fajnyIconClose ? (
                <TitleContainer>
                    {icon && <Icon src={icon} size={24} color={iconColor} />}

                    {fajnyIcon && <FajnyIcon name={fajnyIcon} size={24} color={iconColor} />}

                    <H5>{title}</H5>

                    {(close || iconClose || fajnyIconClose) && (
                        <CloseButton onClick={() => setIsClosed(true)}>
                            {iconClose ? (
                                <Icon src={iconClose} size={16} />
                            ) : (
                                <FajnyIcon name={fajnyIconClose || "close-solid"} size={16} />
                            )}
                        </CloseButton>
                    )}
                </TitleContainer>
            ) : (
                <H5>{title}</H5>
            )}

            {children && <Content as={typeof children === "string" ? P : "div"}>{children}</Content>}
        </Container>
    )
}

export default Toast

/*==================== Types ====================*/

interface styleProps extends React.HTMLAttributes<HTMLDivElement> {
    $isClosed?: boolean
}

interface baseProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    iconColor?: fajnyColorsType | colorsShortType | string
    close?: boolean
    children?: string | React.ReactNode
}

interface possible1 extends baseProps {
    icon?: string
    fajnyIcon?: never

    iconClose?: string
    fajnyIconClose?: never
}

interface possible2 extends baseProps {
    icon?: never
    fajnyIcon?: fajnyIconsType

    iconClose?: string
    fajnyIconClose?: never
}

interface possible3 extends baseProps {
    icon?: string
    fajnyIcon?: never

    iconClose?: never
    fajnyIconClose?: fajnyIconsType
}

interface possible4 extends baseProps {
    icon?: never
    fajnyIcon?: fajnyIconsType

    iconClose?: never
    fajnyIconClose?: fajnyIconsType
}

type props = possible1 | possible2 | possible3 | possible4

/*==================== Styles ====================*/

const Container = styled.div<styleProps>`
    width: 100%;
    max-width: 400px;
    background-color: ${Variables.Colors.White};
    display: ${({ $isClosed }) => ($isClosed ? "none" : "grid")};
    gap: ${Variables.Spacers.XXS};
    box-shadow: ${Variables.Shadows.M};
    padding: ${Variables.Spacers.M};
    border-radius: ${Variables.Radiuses.M};
`

const TitleContainer = styled.div`
    ${Mixins.Flexbox({
        $align: "center",
        $justify: "flex-start",
        $gap: "xs",
    })};

    h5 {
        flex-grow: 1;
    }
`

const Content = styled.div`
    ${Mixins.Grid({
        $gap: "xxs",
    })}
`

const buttonSize = 32

const CloseButton = styled.button`
    width: ${buttonSize}px;
    height: ${buttonSize}px;
    border-radius: ${Variables.Radiuses.Circle};
    border: none;
    ${Mixins.Flexbox({
        $align: "center",
        $justify: "center",
        $inline: true,
    })};
    background-color: transparent;
    transition: ${Variables.Transitions.Short};

    &:hover {
        background-color: ${Variables.Colors.Gray50};

        @media ${Variables.Breakpoints.Touch} {
            background-color: transparent;
        }
    }
`
