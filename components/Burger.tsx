/*=============================================== Burger ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"

import Variables from "./Variables"
import Mixins from "./Mixins"

import { colorsHoverType } from "./common-types"

/*==================== Component ====================*/

const Burger = ({ isOpen, ariaLabel = `${isOpen ? "Close" : "Open"} burger`, color, ...props }: props) => {
    return (
        <Container $isOpen={isOpen} aria-label={ariaLabel} $color={color} {...props}>
            <span />
            <span />
            <span />
        </Container>
    )
}

export default Burger

/*==================== Types ====================*/

interface styleProps extends React.HTMLAttributes<HTMLButtonElement> {
    $isOpen: boolean
    $color?: colorsHoverType
}

interface props extends React.HTMLAttributes<HTMLButtonElement> {
    ariaLabel?: string
    isOpen: boolean
    color?: colorsHoverType
}

/*==================== Styles ====================*/

const Container = styled.button<styleProps>`
    position: relative;
    border: none;
    background-color: transparent;
    width: 32px;
    height: 24px;
    color: ${Mixins.ColorsHoverDefault};

    &:hover {
        color: ${Mixins.ColorsHoverHover};
    }

    &:active {
        color: ${Mixins.ColorsHoverActive};
    }

    @media ${Variables.Breakpoints.Touch} {
        &:hover,
        &:active {
            color: ${Mixins.ColorsHoverDefault};
        }
    }

    span {
        display: block;
        width: 100%;
        height: 2px;
        border-radius: ${Variables.Radiuses.Round};
        position: absolute;
        left: 0;
        background-color: currentColor;
        transition: ${Variables.Transitions.Short};

        &:first-child {
            top: ${({ $isOpen }) => ($isOpen ? "45%" : 0)};
            transform: ${({ $isOpen }) => $isOpen && "rotate(45deg)"};
        }

        &:nth-child(2) {
            top: calc(50% - 2px / 2);
            width: ${({ $isOpen }) => $isOpen && 0};
        }

        &:last-child {
            bottom: ${({ $isOpen }) => ($isOpen ? "45%" : 0)};
            transform: ${({ $isOpen }) => $isOpen && "rotate(-45deg)"};
        }
    }
`
