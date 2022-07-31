/*=============================================== Stepper ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled, { css } from "styled-components"
import { Link } from "react-router-dom"
import { v4 as uuid } from "uuid"

import Variables from "./Variables"
import { Small } from "./Font"
import Mixins from "./Mixins"
import Icon from "./Icon"
import FajnyIcon from "./FajnyIcon"

import { fajnyIconsType } from "./common-types"

/*==================== Component ====================*/

const Stepper = ({
    steps,
    direction = "row",
    active,
    iconActive,
    fajnyIconActive = "check-solid",
    ...props
}: props) => {
    return (
        <Container $direction={direction} {...props}>
            {steps.map((step, i) => (
                <Item $direction={direction} key={uuid()}>
                    <Number $active={active >= i ? true : false}>
                        {active >= i + 1 ? (
                            iconActive ? (
                                <Icon src={iconActive} size={16} />
                            ) : (
                                <FajnyIcon name={fajnyIconActive} size={16} />
                            )
                        ) : (
                            i
                        )}
                    </Number>

                    <Text as={step.to ? Link : "small"} to={step.to}>
                        {step.text}
                    </Text>
                </Item>
            ))}
        </Container>
    )
}

export default Stepper

/*==================== Types ====================*/

const direction = {
    column: "column",
    row: "row",
} as const

type directionTypes = keyof typeof direction

interface styleProps extends React.HTMLAttributes<HTMLDivElement> {
    $direction?: directionTypes
}

interface itemProps extends React.HTMLAttributes<HTMLSpanElement> {
    $direction?: directionTypes
    $to?: string
    icon?: string
    fajnyIcon?: fajnyIconsType
}

interface textProps extends React.HTMLAttributes<HTMLHyperlinkElementUtils> {
    to?: string
}

interface numberProps {
    $active?: boolean
}

interface baseProps extends React.HTMLAttributes<HTMLDivElement> {
    steps: {
        text: string
        to?: string
    }[]
    direction?: directionTypes
    active: number
}

interface possible1 extends baseProps {
    iconActive?: string
    fajnyIconActive?: never
}

interface possible2 extends baseProps {
    iconActive?: never
    fajnyIconActive?: fajnyIconsType
}

type props = possible1 | possible2

/*==================== Styles ====================*/

const Container = styled.div<styleProps>`
    position: relative;
    ${({ $direction }) =>
        Mixins.Flexbox({
            $align: "flex-start",
            $justify: $direction === "column" ? "flex-start" : "space-between",
            $gap: $direction === "column" ? "l" : "xs",
            $direction: $direction === "row" ? "row" : "column",
        })};

    &:before {
        content: "";
        width: ${({ $direction }) => ($direction === "row" ? "calc(100% - 24px)" : "2px")};
        height: ${({ $direction }) => ($direction === "row" ? "2px" : "calc(100% - 24px)")};
        position: absolute;
        left: 12px;
        top: 12px;
        background-color: ${Variables.Colors.Primary500};
        z-index: 0;
    }
`

const Item = styled.span<itemProps>`
    position: relative;
    z-index: 1;
    ${({ $direction }) =>
        Mixins.Flexbox({
            $align: "center",
            $justify: $direction === "row" ? "center" : "flex-start",
            $gap: "xxs",
            $inline: true,
        })};
    flex-direction: ${({ $direction }) => ($direction === "row" ? "column" : "row")};
`

const numberSize = 24

const Number = styled.span<numberProps>`
    width: ${numberSize}px;
    height: ${numberSize}px;
    border-radius: ${Variables.Radiuses.Circle};
    background-color: ${({ $active }) => ($active ? Variables.Colors.Primary500 : Variables.Colors.Primary300)};
    color: ${Variables.Colors.White};
    outline: 2px solid ${Variables.Colors.White};
    ${Mixins.Flexbox({
        $inline: true,
        $align: "center",
        $justify: "center",
    })};
    font-weight: ${Variables.FontWeights.Black};
`

const Text = styled(Small)<textProps>`
    font-size: ${Variables.FontSizes.Small};
    text-decoration: none;
    color: ${Variables.Colors.Primary500};

    ${({ to }) =>
        to &&
        css`
            transition: ${Variables.Transitions.Short};

            @media ${Variables.Breakpoints.Hover} {
                &:hover {
                    color: ${Variables.Colors.Primary300};
                }

                &:active {
                    color: ${Variables.Colors.Primary600};
                }
            }
        `}
`
