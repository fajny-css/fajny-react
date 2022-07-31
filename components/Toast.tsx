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
    iconColor = "primary",
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
                            ) : fajnyIconClose ? (
                                <FajnyIcon name={fajnyIconClose || "close-solid"} size={16} />
                            ) : (
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9.21178 7.99871L13.7475 3.46302C13.9083 3.30216 13.9987 3.08398 13.9987 2.85648C13.9987 2.62899 13.9083 2.41081 13.7475 2.24995C13.5866 2.08908 13.3684 1.99871 13.1409 1.99871C12.9134 1.99871 12.6953 2.08908 12.5344 2.24995L7.99871 6.78564L3.46302 2.24995C3.30216 2.08908 3.08398 1.99871 2.85648 1.99871C2.62899 1.99871 2.41081 2.08908 2.24995 2.24995C2.08908 2.41081 1.99871 2.62899 1.99871 2.85648C1.99871 3.08398 2.08908 3.30216 2.24995 3.46302L6.78564 7.99871L2.24995 12.5344C2.08908 12.6953 1.99871 12.9134 1.99871 13.1409C1.99871 13.3684 2.08908 13.5866 2.24995 13.7475C2.41081 13.9083 2.62899 13.9987 2.85648 13.9987C3.08398 13.9987 3.30216 13.9083 3.46302 13.7475L7.99871 9.21178L12.5344 13.7475C12.6953 13.9083 12.9134 13.9987 13.1409 13.9987C13.3684 13.9987 13.5866 13.9083 13.7475 13.7475C13.9083 13.5866 13.9987 13.3684 13.9987 13.1409C13.9987 12.9134 13.9083 12.6953 13.7475 12.5344L9.21178 7.99871Z"
                                        fill="currentColor"
                                    />
                                </svg>
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
    color: ${Variables.Colors.Primary500};

    @media ${Variables.Breakpoints.Hover} {
        &:hover {
            background-color: ${Variables.Colors.Gray50};
        }
    }
`
