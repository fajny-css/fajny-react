/*=============================================== Modal ===============================================*/

/*==================== Imports ====================*/

import React, { useEffect } from "react"
import styled from "styled-components"

import Variables from "./Variables"
import Mixins from "./Mixins"
import Icon from "./Icon"
import FajnyIcon from "./FajnyIcon"

import { fajnyIconsType } from "./common-types"

/*==================== Component ====================*/

const Modal = ({ children, isOpen, close, iconClose, fajnyIconClose = "close-solid", ...props }: props) => {
    useEffect(() => {
        isOpen ? document.body.classList.add("stop-scrolling") : document.body.classList.remove("stop-scrolling")
    })

    return (
        <Container $isOpen={isOpen} {...props}>
            {close && (
                <CloseButton onClick={close}>
                    {iconClose ? (
                        <Icon src={iconClose} size={32} color={Variables.Colors.White} />
                    ) : (
                        <FajnyIcon name={fajnyIconClose} size={32} color={Variables.Colors.White} />
                    )}
                </CloseButton>
            )}

            <Content>{children}</Content>
        </Container>
    )
}

export default Modal

/*==================== Types ====================*/

interface styleProps extends React.HTMLAttributes<HTMLDivElement> {
    $isOpen: boolean
}

interface baseProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    isOpen: boolean
    close?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

interface possible1 extends baseProps {
    iconClose?: string
    fajnyIconClose?: never
}

interface possible2 extends baseProps {
    iconClose?: never
    fajnyIconClose?: fajnyIconsType
}

type props = possible1 | possible2

/*==================== Styles ====================*/

const Container = styled.div<styleProps>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    background-color: ${Variables.Overlays.Plain.Black80};
`

const Content = styled.div`
    width: 90%;
    height: 90%;
    position: relative;
    z-index: 1;
    ${Mixins.Flexbox({
        $align: "center",
        $justify: "center",
    })};
`

const buttonSize = 48

const CloseButton = styled.button`
    position: absolute;
    top: ${Variables.Spacers.XXL};
    right: ${Variables.Spacers.XXL};
    width: ${buttonSize}px;
    height: ${buttonSize}px;
    border-radius: ${Variables.Radiuses.Circle};
    border: none;
    background-color: transparent;
    transition: ${Variables.Transitions.Short};
    ${Mixins.Flexbox({
        $align: "center",
        $justify: "center",
    })};

    @media ${Variables.Breakpoints.Hover} {
        &:hover {
            background-color: ${Variables.Colors.Gray800};
        }
    }
`
