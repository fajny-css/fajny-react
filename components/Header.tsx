/*=============================================== Header ===============================================*/

/*==================== Imports ====================*/

import React, { useState } from "react"
import styled, { css } from "styled-components"
import { Link } from "react-router-dom"

import Variables from "./Variables"
import Mixins from "./Mixins"
import Image from "./Image"
import Burger from "./Burger"

import { RequireAtLeastOne } from "./RequireAtLeastOne"

/*==================== Styles ====================*/

const BurgerHeader = styled(Burger)``

const Logo = styled(Link)`
    font-weight: ${Variables.FontWeights.Black};
`

const Container = styled.header<styleProps>`
    position: ${({ $position }) =>
        $position === "absolute" ? "absolute" : $position === "fixed" ? "fixed" : "relative"};
    top: 0;
    left: 0;
    width: 100%;
    ${Mixins.Flexbox({
        $align: "center",
        $justify: "space-between",
    })};
    z-index: 999;
    padding: ${Variables.Spacers.M} 5%;
    background-color: ${({ $headerStyle, $color }) =>
        $headerStyle === "plain" && $color === "primary"
            ? Variables.Colors.Primary500
            : $headerStyle === "plain" && $color === "white"
            ? Variables.Colors.White
            : "transparent"};

    a {
        color: ${({ $color, $headerStyle }) =>
            ($headerStyle === "plain" && $color === "white") || ($headerStyle === "transparent" && $color === "primary")
                ? Variables.Colors.Primary500
                : Variables.Colors.White};
        text-decoration: none;

        @media ${Variables.Breakpoints.Hover} {
            &:hover {
                color: ${({ $color, $headerStyle }) =>
                    ($headerStyle === "plain" && $color === "white") ||
                    ($headerStyle === "transparent" && $color === "primary")
                        ? Variables.Colors.Primary300
                        : Variables.Colors.Gray300};
            }

            &:active {
                color: ${({ $color, $headerStyle }) =>
                    ($headerStyle === "plain" && $color === "white") ||
                    ($headerStyle === "transparent" && $color === "primary")
                        ? Variables.Colors.Primary600
                        : Variables.Colors.Gray100};
            }
        }

        &:not(${Logo}) {
            font-weight: ${Variables.FontWeights.Regular};
        }

        &.active {
            font-weight: ${Variables.FontWeights.Black};
        }
    }

    ${BurgerHeader} {
        display: none;

        @media ${Variables.Breakpoints.Mobile} {
            display: inherit;
        }
    }

    ${({ $headerStyle, $color, $isOpen }) =>
        $headerStyle === "transparent" &&
        css`
            @media ${Variables.Breakpoints.Mobile} {
                transition: ${Variables.Transitions.Short};
                background-color: ${$isOpen && $color === "primary"
                    ? Variables.Colors.White
                    : $isOpen && $color === "white" && Variables.Colors.Primary500};
            }
        `}
`

const LogoImg = styled(Image)`
    width: 100px;
    height: 32px;
    object-fit: contain;
    object-position: left center;
`

const Nav = styled.nav<navProps>`
    ${Mixins.Flexbox({
        $align: "center",
        $justify: "flex-start",
        $gap: "m",
    })};

    @media ${Variables.Breakpoints.Mobile} {
        position: absolute;
        left: 0;
        top: ${({ $isOpen, $logoText }) => ($isOpen && $logoText ? 56 : $isOpen && !$logoText ? 64 : -300)}px;
        transition: ${Variables.Transitions.Short};
        flex-direction: column;
        padding: ${Variables.Spacers.M} 5%;
        background-color: ${({ $color, $headerStyle }) =>
            ($headerStyle === "plain" && $color === "white") || ($headerStyle === "transparent" && $color === "primary")
                ? Variables.Colors.White
                : Variables.Colors.Primary500};
        width: 100%;
        align-items: flex-start;
    }
`

/*==================== Component ====================*/

const Header = ({
    headerStyle = "plain",
    color = "primary",
    position = "relative",
    logoText = undefined,
    logoImg,
    logoAlt = "Logo",
    logoTo = "/",
    children,
    ...props
}: props) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Container $headerStyle={headerStyle} $color={color} $position={position} $isOpen={isOpen} {...props}>
            <Logo to={logoTo}>
                {logoImg ? <LogoImg src={logoImg} alt={logoAlt} width={100} height={32} fit="contain" /> : logoText}
            </Logo>

            <BurgerHeader
                onClick={() => setIsOpen(!isOpen)}
                isOpen={isOpen}
                color={
                    (headerStyle === "plain" && color === "white") ||
                    (headerStyle === "transparent" && color === "primary")
                        ? "primary"
                        : "white"
                }
            />

            <Nav
                $isOpen={isOpen}
                $color={color}
                $headerStyle={headerStyle}
                $logoText={logoText !== undefined ? true : false}
            >
                {children}
            </Nav>
        </Container>
    )
}

export default Header

/*==================== Types ====================*/

const headerStyles = {
    plain: "plain",
    transparent: "transparent",
} as const

type headerStylesTypes = keyof typeof headerStyles

const headerColors = {
    primary: "primary",
    white: "white",
} as const

type headerColorsTypes = keyof typeof headerColors

const positions = {
    relative: "relative",
    absolute: "absolute",
    fixed: "fixed",
} as const

type positionsTypes = keyof typeof positions

interface styleProps extends React.HTMLAttributes<HTMLDivElement> {
    $headerStyle?: headerStylesTypes
    $color?: headerColorsTypes
    $position?: positionsTypes
    $isOpen: boolean
}

interface baseProps extends React.HTMLAttributes<HTMLDivElement> {
    headerStyle?: headerStylesTypes
    color?: headerColorsTypes
    position?: positionsTypes
    logoText?: string
    logoImg?: string
    logoAlt?: string
    logoTo?: string
    children: React.ReactNode | React.ReactNode[]
}

type props = RequireAtLeastOne<baseProps, "logoText" | "logoImg">

interface navProps extends React.HTMLAttributes<HTMLDivElement> {
    $isOpen?: boolean
    $headerStyle?: headerStylesTypes
    $color?: headerColorsTypes
    $logoText?: boolean
}
