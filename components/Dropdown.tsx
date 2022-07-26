/*=============================================== Dropdown ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"

import Variables from "./Variables"
import Mixins from "./Mixins"
import Flexbox from "./Flexbox"

/*==================== Styles ====================*/

const Container = styled.div<styleProps>`
    position: absolute;
    top: 42px;
    ${Mixins.Grid({})};
    min-width: 200px;
    background-color: ${Variables.Colors.White};
    border-radius: ${Variables.Radiuses.M};
    overflow: hidden;
    box-shadow: ${Variables.Shadows.M};
    max-height: ${({ $isOpen }) => ($isOpen ? "800px" : 0)};
    transition: ${Variables.Transitions.Long};
    z-index: 50;

    a,
    button {
        color: ${Variables.Colors.Primary500};
        text-decoration: none;
        text-align: left;
        background-color: transparent;
        border: none;
        padding: ${Variables.Spacers.XS} ${Variables.Spacers.S};
        transition: ${Variables.Transitions.Short};

        &:hover {
            background-color: ${Variables.Colors.Primary300};
            color: ${Variables.Colors.White};
        }

        &:active {
            background-color: ${Variables.Colors.Primary600};
            color: ${Variables.Colors.White};
        }

        @media ${Variables.Breakpoints.Touch} {
            &:hover,
            &:active {
                background-color: transparent;
                color: ${Variables.Colors.Primary500};
            }
        }
    }
`

const StyledContainer = styled(Flexbox)<styleContainerProps>`
    position: relative;

    ${Container} {
        left: ${({ $justify }) => $justify === "left" && 0};
        right: ${({ $justify }) => $justify === "right" && 0};
    }
`

/*==================== Component ====================*/

const DropdownContainer = ({ justify = "left", children, ...props }: containerProps) => (
    <StyledContainer $justify={justify} justify={justify === "right" ? "flex-end" : "flex-start"} {...props}>
        {children}
    </StyledContainer>
)

const Dropdown = ({ children, isOpen, ...props }: props) => (
    <Container $isOpen={isOpen} {...props}>
        {children}
    </Container>
)

export { DropdownContainer, Dropdown }

/*==================== Types ====================*/

const justify = {
    left: "left",
    right: "right",
} as const

type justifyTypes = keyof typeof justify

interface styleProps extends React.HTMLAttributes<HTMLDivElement> {
    $isOpen: boolean
    $justify?: justifyTypes
}

interface styleContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    $justify?: justifyTypes
}

interface containerProps extends React.HTMLAttributes<HTMLDivElement> {
    justify?: justifyTypes
}

interface props extends React.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean
    justify?: justifyTypes
}
