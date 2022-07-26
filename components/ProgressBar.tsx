/*=============================================== ProgressBar ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled, { keyframes, css } from "styled-components"

import Variables from "./Variables"

import { colorsShortType } from "./common-types"

/*==================== Component ====================*/

const ProgressBar = ({ value, color = "primary", animated = true, ...props }: props) => {
    return <Container $value={value} $animated={animated} $color={color} {...props} />
}

export default ProgressBar

/*==================== Types ====================*/

interface styleProps extends React.HTMLAttributes<HTMLSpanElement> {
    $value: number
    $color?: colorsShortType
    $animated?: boolean
}

interface props extends React.HTMLAttributes<HTMLSpanElement> {
    value: number
    color?: colorsShortType
    animated?: boolean
}

/*==================== Styles ====================*/

const Progress = ({ $value }: styleProps) => keyframes`
    0% {
        width: 0;
    }

    100% {
        width: ${$value}%;
    }
`

const Container = styled.span<styleProps>`
    width: 100%;
    height: 16px;
    background-color: ${({ $color }) => ($color === "white" ? Variables.Colors.Gray900 : Variables.Colors.Gray100)};
    border-radius: ${Variables.Radiuses.Round};
    position: relative;
    display: block;
    overflow: hidden;

    &:before {
        content: "";
        position: absolute;
        width: ${({ $value }) => $value}%;
        height: 100%;
        border-radius: ${({ $value }) => $value < 3 ? Variables.Radiuses.Circle : Variables.Radiuses.Round};
        transition: ${Variables.Transitions.Short};
        background-color: ${({ $color }) =>
            $color === "secondary"
                ? Variables.Colors.Secondary500
                : $color === "success"
                ? Variables.Colors.Success500
                : $color === "danger"
                ? Variables.Colors.Danger500
                : $color === "warning"
                ? Variables.Colors.Warning500
                : $color === "gray"
                ? Variables.Colors.Gray500
                : $color === "black"
                ? Variables.Colors.Black
                : $color === "white"
                ? Variables.Colors.White
                : Variables.Colors.Primary500};

        ${({ $animated, $value }) =>
            $animated &&
            css`
                animation: ${Progress({ $value: $value })} calc(${$value} * 50ms) 1;
            `}
    }
`
