/*=============================================== Tooltip ===============================================*/

/*==================== Imports ====================*/

import React, { useState } from "react"
import styled, { css } from "styled-components"

import Variables from "./Variables"
import Mixins from "./Mixins"

import { colorsShortType, fajnyColorsType } from "./common-types"

/*==================== Component ====================*/

const Tooltip = ({ tooltip, children, textStyle = "dotted", color, ...props }: props) => {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <Container
            $textStyle={textStyle}
            $color={color}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            {...props}
        >
            <Tip isVisible={isVisible}>{tooltip}</Tip>

            {children}
        </Container>
    )
}

export default Tooltip

/*==================== Types ====================*/

const textStyles = {
    dotted: "dotted",
    underline: "underline",
    bold: "bold",
} as const

type textStylesTypes = keyof typeof textStyles

interface styleProps extends React.HTMLAttributes<HTMLSpanElement> {
    $textStyle?: textStylesTypes
    $color?: colorsShortType | fajnyColorsType | string
}

interface styleTipProps extends React.HTMLAttributes<HTMLSpanElement> {
    isVisible: boolean
}

interface props extends React.HTMLAttributes<HTMLSpanElement> {
    tooltip: string
    children: string
    textStyle?: textStylesTypes
    color?: colorsShortType | fajnyColorsType | string
}

/*==================== Styles ====================*/

const Container = styled.span<styleProps>`
    display: inline;
    position: relative;
    color: ${Mixins.AllColors};

    ${({ $textStyle }) =>
        $textStyle === "dotted" || $textStyle === "underline"
            ? css`
                  border-bottom: 1px ${$textStyle} currentColor;
              `
            : css`
                  font-weight: ${Variables.FontWeights.Black};
              `}
`

const Tip = styled.span<styleTipProps>`
    width: 150px;
    background-color: ${Variables.Overlays.Plain.Black80};
    color: ${Variables.Colors.White};
    text-align: center;
    padding: ${Variables.Spacers.XS};
    border-radius: ${Variables.Radiuses.S};
    bottom: 125%;
    left: calc(50% - 150px / 2);
    font-size: ${Variables.FontSizes.Small};
    font-weight: ${Variables.FontWeights.Regular};
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
    z-index: 1;
    transition: ${Variables.Transitions.Short};
    position: absolute;

    &:after {
        content: "";
        bottom: calc(${Variables.Spacers.XS} * -1 - 2px);
        left: 50%;
        margin-left: 2px;
        border-width: 5px;
        border-style: solid;
        border-color: ${Variables.Overlays.Plain.Black80} transparent transparent transparent;
        opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
        visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
        z-index: 1;
        transition: ${Variables.Transitions.Short};
        position: absolute;
    }
`
