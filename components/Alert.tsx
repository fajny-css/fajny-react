/*=============================================== Alert ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"

import Variables from "./Variables"
import { P } from "./Font"
import Mixins from "./Mixins"

import { colorsShortType } from "./common-types"

/*==================== Component ====================*/

const Alert = ({ color = "primary", children, modal, ...props }: props) => {
    return (
        <Container $color={color} as={typeof children === "string" ? P : "div"} $modal={modal} {...props}>
            {children}
        </Container>
    )
}

export default Alert

/*==================== Types ====================*/

interface styleProps extends React.HTMLAttributes<HTMLParagraphElement> {
    $color?: colorsShortType
    $modal?: boolean
}

interface props extends React.HTMLAttributes<HTMLParagraphElement> {
    color?: colorsShortType
    children: string | React.ReactNode | React.ReactNode[]
    modal?: boolean
}

/*==================== Styles ====================*/

const Container = styled.div<styleProps>`
    color: ${({ $color }) => ($color === "black" ? Variables.Colors.White : Variables.Colors.Black)};
    ${Mixins.Grid({
        $gap: "s",
    })};
    padding: ${Variables.Spacers.M};
    width: ${({ $modal }) => $modal && "100%"};
    max-width: ${({ $modal }) => $modal && "400px"};
    background-color: ${({ $color }) =>
        $color === "secondary"
            ? Variables.Colors.Secondary50
            : $color === "success"
            ? Variables.Colors.Success50
            : $color === "danger"
            ? Variables.Colors.Danger50
            : $color === "warning"
            ? Variables.Colors.Warning50
            : $color === "gray"
            ? Variables.Colors.Gray50
            : $color === "black"
            ? Variables.Colors.Gray800
            : $color === "white"
            ? Variables.Colors.Gray50
            : Variables.Colors.Primary50};
    border: 1px solid
        ${({ $color }) =>
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
    border-radius: ${Variables.Radiuses.M};
`
